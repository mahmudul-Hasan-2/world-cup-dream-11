import React from "react";
import Card from "../../../UI/Card";

const AvailablePlayers = ({
  players,
  currentBalance,
  setCurrentBalance,
  setSelectedData,
  selectedData,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {players.map((player) => (
        <Card
          player={player}
          key={player.player_id}
          currentBalance={currentBalance}
          setCurrentBalance={setCurrentBalance}
          setSelectedData={setSelectedData}
          selectedData={selectedData}
        ></Card>
      ))}
    </div>
  );
};

export default AvailablePlayers;
