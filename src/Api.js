import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const deleteGame = async (gameId, username, password) => {
  try {
    const response = await api.delete(`/api/deletegame/${gameId}`, {
      data: { username, password },
    });

    console.log(response.data); // Log success message
    return response.data; // Return data if needed
  } catch (error) {
    console.error(`Error deleting game: ${error}`);
    throw error; // Throw error to handle in the component
  }
};

// You can add more functions here if needed

export default api;
