import axios from "axios";

const API_URL = "https://mr-api-three.vercel.app/weather"; // Replace with your API URL

export const fetchWeatherData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
