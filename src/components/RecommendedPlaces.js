import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import img from '../../assets/DataImg.png';

const places = [
  { id: 1, name: 'Kathmandu', distance: '15 KM', description: 'City full of temples and monkeys' },
  { id: 2, name: 'Chitwan', distance: '50 KM', description: 'Meet the wildlife' },
  { id: 3, name: 'Pokhara', distance: '90 KM', description: "Tourist's hub" },
  { id: 4, name: 'Dhangadhi', distance: '185 KM', description: 'Beauty of Far-West' },
];

const rainChances = [
  { day: 'Sun', value: 20 },
  { day: 'Mon', value: 50 },
  { day: 'Tue', value: 70 },
  { day: 'Wed', value: 80 },
  { day: 'Thu', value: 60 },
  { day: 'Fri', value: 40 },
  { day: 'Sat', value: 30 },
];

const RecommendedPlaces = () => (
  <View style={styles.cardContainer}>
    <Text style={styles.title}>Recommended Places</Text>
    {places.map((item) => (
      <View key={item.id} style={styles.card}>
        <Image source={img} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.distance}>{item.distance}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    ))}
  </View>
);

const RainChances = () => (
  <View style={styles.cardContainer}>
    <Text style={styles.title}>Chances of Rain</Text>
    <View style={styles.barChart}>
      {rainChances.map((item) => (
        <View key={item.day} style={styles.barWrapper}>
          <View
            style={[
              styles.bar,
              { height: `${item.value}%`, backgroundColor: item.value > 50 ? '#007BFF' : '#CCC' },
            ]}
          />
          <Text style={styles.barLabel}>{item.day}</Text>
        </View>
      ))}
    </View>
  </View>
);

const App = () => (
  <FlatList
    data={[]}
    keyExtractor={(item, index) => index.toString()}
    renderItem={null}
    ListHeaderComponent={
      <>
        <RecommendedPlaces />
        <RainChances />
      </>
    }
    contentContainerStyle={styles.container}
  />
);

const styles = StyleSheet.create({
  container: {
    padding: 0,
   
    flexGrow: 1,
  },
  cardContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  distance: {
    fontSize: 14,
    color: '#888',
  },
  description: {
    fontSize: 12,
    color: '#aaa',
  },
  barChart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 100,
  },
  barWrapper: {
    alignItems: 'center',
    flex: 1,
  },
  bar: {
    width: 15,
    borderRadius: 5,
    marginBottom: 5,
  },
  barLabel: {
    fontSize: 12,
    color: '#555',
  },
});

export default App;
