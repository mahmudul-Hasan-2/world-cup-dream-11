import React from "react";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";
import { Info, TriangleAlert } from "lucide-react";
import { toast } from "react-toastify";

const SelectedPlayers = ({
  selectedData,
  players,
  setSelectedData,
  setCurrentBalance,
  currentBalance,
  setSelectedType,
}) => {
  const handleDeletePlayer = (selected) => {
    const filtered = selectedData.filter(
      (player) => selected.player_id !== player.player_id,
    );
    setSelectedData(filtered);
    setCurrentBalance(currentBalance + selected.player_price);
    toast("The player has Deleted Successfully");
  };
  return (
    <div>
      {selectedData.length === 0 && (
        <div className="p-10 space-y-5 border  border-gray-200 rounded-2xl flex items-center justify-center flex-col text-center">
          <Info size={80} className="text-yellow-500 " />
          <div className="space-y-2">
            <p className="font-medium text-gray-400">
              No players in your list.
            </p>
            <h2 className="text-xl md:text-3xl font-bold">
              Start Building Your Team
            </h2>
          </div>
        </div>
      )}
      <div className="space-y-6">
        {selectedData.map((selected) => (
          <SelectedPlayer
            key={selected.player_id}
            selected={selected}
            players={players}
            handleDeletePlayer={handleDeletePlayer}
          ></SelectedPlayer>
        ))}
      </div>
      <div className="p-2 border sm:inline-block mt-12 mb-2 rounded-2xl bg-white/5 flex items-center justify-center">
        <button
          className="px-5 py-3.5 bg-[#E7FE29] w-full rounded-xl font-bold cursor-pointer"
          onClick={() => setSelectedType("available")}
        >
          {selectedData.length > 0 ? "Add More Player" : "Add Player"}
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;
