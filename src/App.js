import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header/Header.js";
import Home from "./Home/Home.js";
import Hosts from "./Hosts/Hosts.js";
import GameList from "./GameList/GameList.js";
import GameSuggestion from "./GameSuggestion/GameSuggestion.js";
import Contact from "./Contact/Contact.js";
import NewGameSuggestion from "./GameSuggestion/NewGameSuggestion.js";

export default function App() {
  return (
    <div className="mainApp">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hosts" element={<Hosts />} />
          <Route path="/Game-List" element={<GameList />} />
          <Route path="/Game-Suggestion" element={<GameSuggestion />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Game-Suggestion/New" element={<NewGameSuggestion />} />
        </Routes>
      </Router>
    </div>
  );
}
