import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // For icons

const WeatherCard = ({ weather }) => {
  return (
    <View style={styles.container}>

    <View style={styles.cityContainer}>
    <FontAwesome5 name="map-marker-alt" size={16} color="#fff" />
    <Text style={styles.cityText}>Kathmandu</Text>
  </View>

  {/* Temperature and Weather Info */}
  <View style={styles.mainInfo}>
    <Text style={styles.temperature}>40°C</Text>

    <View style={styles.divider} />

    <View style={styles.weatherInfo}>
      <Text style={styles.condition}>
        Sunny <FontAwesome5 name="cloud-sun" size={16} color="#fff" />
      </Text>
      <Text style={styles.date}>Friday, 6 December</Text>
    </View>
  </View>

  {/* Feels Like */}
  <Text style={styles.feelsLike}>Feels Like 42°C</Text>
        

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
    backgroundColor: "transparent", // Matches the gradient background
    padding: 5,
    alignItems: "center",
  },
  cityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  cityText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
    marginLeft: 8,
  },
  mainInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  temperature: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#fff",
  },
  divider: {
    width: 1,
    height: 60,
    backgroundColor: "#fff",
    marginHorizontal: 20,
  },
  weatherInfo: {
    justifyContent: "center",
  },
  condition: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: "#ddd",
  },
  feelsLike: {
    fontSize: 16,
    color: "#ddd",
    marginTop: 10,
  },
  detailsCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
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
