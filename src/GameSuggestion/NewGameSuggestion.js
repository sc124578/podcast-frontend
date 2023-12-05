import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../Api"; // Import the Axios instance
import "./NewGameSuggestion.css";

export default function NewGameSuggestion() {
    const [formState, setFormState] = useState({
        name: "",
        platform: "",
        year: ""
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

   const submitGame = (event) => {
    event.preventDefault();
    setLoading(true);
    api.post("/api/addgame", formState)
        .then((response) => {
            setFormState({
                name: "",
                platform: "",
                year: "",
            });
            window.location.href = "/Game-Suggestion";
        })
        .catch((error) => {
            console.error(`Error adding game: ${error}`);
            setError(`Error adding game: ${error.response?.data?.error || 'Unknown error'}`);
        })
        .finally(() => {
            setLoading(false);
        });
};

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="NewGameSuggestion">
            <div className="addNewGame">
                <h1 className="addNewGameH1">Add New Game</h1>
                <form onSubmit={submitGame}>
                    <label className="gameNameInput">
                        Game Name
                        <input 
                            className="gameNameInput2"
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label className="platformInput">
                        Platform
                        <input
                            type="text"
                            name="platform"
                            value={formState.platform}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label className="yearInput">
                        Year
                        <input
                            type="text"
                            name="year"
                            value={formState.year}
                            onChange={handleInputChange}
                        />
                    </label>
                    <div className="addGameSubmit">
                        <button className="btn btn-primary btn-lg" onClick={submitGame} disabled={loading}>
                            {loading ? "Loading..." : "Submit"}
                        </button>
                        <Link to="/Game-Suggestion">
                            <button className="cancel btn btn-danger">Cancel</button>
                        </Link>
                    </div>
                </form>
            </div>
            <div className="error">
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}
