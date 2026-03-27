import { Trash2Icon } from "lucide-react";
import React from "react";

const SelectedPlayer = ({ selected, handleDeletePlayer }) => {
  return (
    <div className="flex flex-col sm:flex-row text-center sm:text-start items-center justify-between border border-[#13131310] p-6 rounded-2xl gap-4">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div>
          <img
            src={selected.player_image}
            alt=""
            className="w-30 h-30 rounded-2xl object-cover"
          />
        </div>
        <div>
          <h2>{selected.player_name}</h2>
          {selected.player_role === "Bowler"
            ? selected.player_bowling_style
            : selected.player_batting_style}
        </div>
      </div>
      <button type="button" className="cursor-pointer">
        <Trash2Icon
          color="red"
          onClick={() => handleDeletePlayer(selected)}
        ></Trash2Icon>
      </button>
    </div>
  );
};

export default SelectedPlayer;
