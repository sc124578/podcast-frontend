import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./GameSuggestion.css";

const api = axios.create({
    baseURL: "http://localhost:3001",
});

export default function GameSuggestion({ onDelete }) {
   
    const [games, setGames] = useState([])

    useEffect(() => {
        fetchGames()
    }, [])

    const fetchGames = () => {
        api.get("/api/games")
        .then((response) => {
            setGames(response.data)
        })
        .catch((error) => {
            console.error(`Error fetching games.: ${error}`)
        })
    }


    
    return (
        <div className="GameSuggestion">
            <h1 className="gameSuggestionH1">Game Suggestion</h1>
            <p className="gameSuggestionP">This is where you can tell us what games you want us to play. Before you make a 
            suggestion, please check the game list to see if we have already played the game. If we have not, click the button
            to add a game and fill out the form. We will add it to the list and play it as soon as we can.
            </p>
            <div className="submitButton">
                <Link to="/Game-Suggestion/New">
                    <button className="btn btn-primary btn-lg">Add New Game</button>
                </Link>
            </div>
            <h2 className="tabledGames">Listed Games</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Game</th>
                            <th>Platform</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {games.map((game) => (
                            <tr key="game.id">
                                <td>{game.name}</td>
                                <td>{game.platform}</td>
                                <td>{game.year_released}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}