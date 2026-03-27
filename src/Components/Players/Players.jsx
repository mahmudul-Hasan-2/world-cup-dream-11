import React, { use } from "react";
import AvailablePlayers from "../Homepage/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../Homepage/SelectedPlayers/SelectedPlayers";

const Players = ({
  setSelectedType,
  selectedType,
  playerPromise,
  setCurrentBalance,
  currentBalance,
  setSelectedData,
  selectedData,
}) => {
  let players = use(playerPromise);
  return (
    <div>
      {/* for contain the header */}
      <div className="flex items-center flex-col sm:flex-row gap-5 justify-between mt-[88px] mb-[32px]">
        <div>
          <h2 className="text-2xl font-bold">
            {selectedType === "available" && "Available Players"}
            {selectedType === "selected" &&
              `Selected Player (${selectedData.length}/11)`}
          </h2>
        </div>
        <div>
          <button
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""} rounded-l-xl rounded-none`}
            onClick={() => setSelectedType("available")}
          >
            Available
          </button>
          <button
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} rounded-r-xl rounded-none`}
            onClick={() => setSelectedType("selected")}
          >
            Selected ({selectedData.length})
          </button>
        </div>
      </div>

      {selectedType === "available" ? (
        <AvailablePlayers
          setCurrentBalance={setCurrentBalance}
          currentBalance={currentBalance}
          players={players}
          setSelectedData={setSelectedData}
          selectedData={selectedData}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers
          selectedData={selectedData}
          players={players}
          setSelectedType={setSelectedType}
          setSelectedData={setSelectedData}
          setCurrentBalance={setCurrentBalance}
          currentBalance={currentBalance}
        ></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
