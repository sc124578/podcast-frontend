import axios from "axios";

const api = axios.create({
  baseURL: "https://soul-of-a-gamer-podcast-backend.onrender.com",
});

export const deleteGame = async (gameId, username, password) => {
  try {
    const response = await api.delete(`/api/deletegame/${gameId}`, {
      data: { username, password },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error deleting game: ${error}`);
    throw error;
  }
};

export default api;
