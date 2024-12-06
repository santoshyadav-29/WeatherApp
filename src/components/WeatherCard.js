import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // For icons

const WeatherCard = ({ weather }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>Kathmandu</Text>
      <Text style={styles.temperature}>{weather.temperature}°C</Text>
      <Text style={styles.condition}>{weather.condition}</Text>
      <Text style={styles.date}>Friday, 6 December</Text>
      <Text style={styles.feelsLike}>Feels Like {weather.feels_like}°</Text>

      <View style={styles.weatherDetails}>
        <View style={styles.detailBox}>
          <FontAwesome5 name="cloud-rain" size={24} color="#555" />
          <Text style={styles.detailText}>
            {weather.precipitation_probability}%
          </Text>
        </View>
        <View style={styles.detailBox}>
          <FontAwesome5 name="wind" size={24} color="#555" />
          <Text style={styles.detailText}>{weather.wind_speed} km/hr</Text>
        </View>
        <View style={styles.detailBox}>
          <FontAwesome5 name="thermometer-half" size={24} color="#555" />
          <Text style={styles.detailText}>{weather.atm_pressure} mm</Text>
        </View>
        <View style={styles.detailBox}>
          <FontAwesome5 name="tint" size={24} color="#555" />
          <Text style={styles.detailText}>{weather.humidity}%</Text>
        </View>
      </View>

      <Text style={styles.warning}>Extremely Sunny</Text>
      <Text style={styles.sunscreen}>Apply Sunscreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
   
    // borderRadius: 20,
    // margin: 10,
    // elevation: 5,
    // shadowColor: "#000",
  },
  city: {
    fontSize: 22,
    fontWeight: "600",
    color: "#ffff",
  },
  temperature: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#ffff",
  },
  condition: {
    fontSize: 18,
    color: "#666",
  },
  date: {
    fontSize: 16,
    marginVertical: 8,
    color: "#aaa",
  },
  feelsLike: {
    fontSize: 14,
    color: "#aaa",
  },
  weatherDetails: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "100%",
  },
  detailBox: {
    alignItems: "center",
  },
  detailText: {
    marginTop: 5,
    fontSize: 14,
    color: "#333",
  },
  warning: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
    marginTop: 15,
  },
  sunscreen: {
    fontSize: 14,
    color: "#FF8800",
  },
});

export default WeatherCard;
