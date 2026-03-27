import React, { useState } from "react";
import { FaFlag } from "react-icons/fa";
import { toast } from "react-toastify";

const Card = ({
  player,
  setCurrentBalance,
  currentBalance,
  setSelectedData,
  selectedData,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectedPlayers = () => {
    if (selectedData.length >= 11) {
      toast.error("Limit reached, You has selected 11 player already!");
      return;
    }
    const available = selectedData.find(
      (selected) => selected.player_id === player.player_id,
    );
    if (available) {
      toast.warning("You has select it one time!");
      return;
    } else {
      setSelectedData((prev) => [...prev, player]);
    }
    setIsSelected(true);
    const newBalance = currentBalance - player.player_price;
    if (newBalance > 0) {
      setCurrentBalance(newBalance);
    } else {
      toast.warning("Haven't money to buy the player");
      return;
    }
    toast.success(`${player.player_name} is selected`);
  };

  return (
    <div className="card bg-base-100 w-full shadow-sm p-4 space-y-4">
      <figure>
        <img
          src={player.player_image}
          alt="Player Image"
          className="h-[250px] w-full rounded-xl"
        />
      </figure>
      <h2 className="card-title">{player.player_name}</h2>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-[#898989]">
          <FaFlag />
          <span>{player.player_country}</span>
        </div>
        <div>
          <button className="btn">{player.player_role}</button>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex items-center justify-between">
        <h2 className="text-[#131313] font-bold text-base">Rating</h2>
        <div>
          <span className="text-[#13131370]">{player.player_rating}</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-[#131313] font-bold text-[14px]">
          {player.player_batting_style}
        </h2>
        <div>
          <span className="text-[#13131370] text-xs sm:text-[14px]">
            {player.player_bowling_style}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-[#131313] font-bold text-[12px] sm:text-[14px]">
          Price ${player.player_price}
        </h2>
        <div>
          <button
            className="btn"
            disabled={isSelected}
            onClick={handleSelectedPlayers}
            type="button"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
