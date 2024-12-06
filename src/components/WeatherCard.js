import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // For icons

const WeatherCard = ({ weather }) => {
  return (
    <View style={styles.container}>
      {/* Main Weather Info */}
      <Text style={styles.city}>Kathmandu</Text>
      <View style={styles.flexBox}>
        
      <Text style={styles.temperature}>{weather.temperature}°C</Text>
        
      <Text style={styles.condition}>Sunny</Text>
        <Text style={styles.date}>Friday, 6 December</Text>
        </View>
        <Text style={styles.feelsLike}>Feels Like {weather.feels_like}°C</Text>
        

      {/* Weather Details Card */}
      <View style={styles.detailsCard}>
        <View style={styles.detailBox}>
          <FontAwesome5 name="cloud-rain" size={24} color="#555" />
          <Text style={styles.detailValue}>{weather.precipitation_probability}%</Text>
          <Text style={styles.detailLabel}>Precipitation</Text>
        </View>
        <View style={styles.detailBox}>
          <FontAwesome5 name="wind" size={24} color="#555" />
          <Text style={styles.detailValue}>{weather.wind_speed} km/hr</Text>
          <Text style={styles.detailLabel}>Wind Speed</Text>
        </View>
        <View style={styles.detailBox}>
          <FontAwesome5 name="thermometer-half" size={24} color="#555" />
          <Text style={styles.detailValue}>{weather.atm_pressure} mm</Text>
          <Text style={styles.detailLabel}>Atm Pressure</Text>
        </View>
        <View style={styles.detailBox}>
          <FontAwesome5 name="tint" size={24} color="#555" />
          <Text style={styles.detailValue}>{weather.humidity}%</Text>
          <Text style={styles.detailLabel}>Humidity</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "transparent", // Ensure background image shows
  },
  city: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
  },
  temperature: {
    fontSize: 72,
    fontWeight: "bold",
    color: "#fff",
  },
  condition: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
    marginVertical: 5,
  },
  date: {
    fontSize: 16,
    color: "#ddd",
  },
  feelsLike: {
    fontSize: 16,
    color: "#ddd",
    marginTop: 5,
  },
  detailsCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginTop: 20,
    // width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: "row",
    flexWrap:'wrap',
    justifyContent: "space-around",
  },
  detailBox: {
    alignItems: "center",
    width: "50%", // Ensures even spacing
  },
  detailValue: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginTop: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: "#888",
    marginTop: 3,
    textAlign: "center",
  },
});

export default WeatherCard;
