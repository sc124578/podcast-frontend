import "./GameList.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import gameList from "./List";

export default function GameList() {
const [games, setGames] = useState([]);
const [selectGames, setSelectGames] = useState(null);
const [search, setSearch] = useState("");
 
useEffect(() => {
    setGames(gameList)
}, [])

const handleClick = (game) => {
    setSelectGames((prevGame) => (prevGame === game ? null : game))
}

const handleSearch = (event) => {
    setSearch(event.target.value)
}

const filteredGames = games.filter(
    (game) =>
      game.name.toLowerCase().includes(search.toLowerCase()) && game.realeased === "true"
  );
  console.log(filteredGames)
  return (
    <div className="GameList">
        <div className="gameListDescription">
            <h1 className="desH1">Game List</h1>
            <p className="desP">This is the list of games we have played thus far. We have included several platforms that play the game,
                but might have missed a few of them. 
            </p>
        </div>
        <div className="searchBar">
            <input type="text" placeholder="Seach Games" onChange={handleSearch} />
        </div>
        <div className="listedGames">
            <ul>
                {filteredGames.map((game) => (
                    <li key={game.id}>
                        <span className="gameName" onClick={() => handleClick(game)}>
                            Episode {game.episode}: {game.name}
                        </span>
                            {selectGames === game && (
                                <div className="gameDetails">
                                    <p className="platform">Platform(s): {game.platform}</p>
                                    <p className="year">Year realeased: {game.year}</p>
                                </div>
                            )}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )

}