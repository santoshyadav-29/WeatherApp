import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, ImageBackground } from "react-native";
import WeatherCards from "./src/components/WeatherCard.js";
import RecommendedPlaces from "./src/components/RecommendedPlaces";
import { fetchWeatherData } from "./src/services/api";
import backgroundImg from "./assets/Snowy Background.png"; // Replace with your actual background image path

const App = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeatherData();
      if (data) setWeather(data.weather);
    };
    getWeather();
  }, []);

  return (
    <ImageBackground
      source={backgroundImg}
      style={styles.background}
      resizeMode="cover" // Ensures the image covers the screen
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {weather && <WeatherCards weather={weather} />}
          <RecommendedPlaces />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, // Ensures the background image fills the entire screen
  },
  container: {
    flex: 1,
    backgroundColor: "transparent", // Transparent to show the background image
  },
});

export default App;
