import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, ImageBackground, View } from "react-native";
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
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={backgroundImg}
        style={styles.background}
        resizeMode="cover" // Ensures the image covers the screen
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer} // Ensures padding at the bottom
        >
          {weather && <WeatherCards weather={weather} />}
          <RecommendedPlaces />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "transparent", // Transparent so the background image is visible
  },
  background: {
    flex: 1, // Ensures the background image fills the entire screen
    justifyContent: "flex-start", // Keeps content at the top and ensures no overlap with the top notch
  },
  scrollContainer: {
    paddingTop: 10, // Ensures content does not overlap with the status bar or notch
    paddingBottom: 20, // Provides space for the bottom navigation bar
    paddingHorizontal: 10, // Optional: Adds padding to the left and right of the content
  },
});

export default App;
