import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps'; // 0.21.0
import { Marker } from 'react-native-maps'; // 0.21.0
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.099295,
          longitude: 115.096584
        },
        title: 'Polsek Kota Singaraja',
        subtitle: 'Lokasi Jl. Surapati No.123, Kp. Baru, Kec. Buleleng, Kabupaten Buleleng, Bali 81114'
      },
      {
        key:2,
        latlng: {
          latitude:-8.111850,
          longitude: 115.090650
        },
        title: 'Polres Buleleng',
        subtitle: 'Lokasi Jalan Pramuka No. 1, Singaraja, Banjar Jawa, Kec. Buleleng, Kabupaten Buleleng, Bali 81118'
      },
      {
        key:3,
        latlng: {
          latitude: -8.089593,
          longitude:  115.127378
        },
        title: 'Polsek Sawan',
        subtitle: 'Lokasi Jalan Raya Sangsit, Kecamatan Sawan, Sangsit, Kec. Buleleng, Kabupaten Buleleng, Bali 81171'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.192535,
          longitude: 114.940010
        },
        title: 'Polsek Seririt',
        subtitle: 'Lokasi Jl. Sudirman No.90, Seririt, Buleleng, Kabupaten Buleleng, Bali 81112'
      },
      {
        key:5,
        latlng: {
          latitude:-8.359279,
          longitude: 114.625013
        },
        title: 'Polres Jembrana',
        subtitle: 'Lokasi Jl. Pahlawan No.27, Pendem, Negara, Kabupaten Jembrana, Bali 82211'
      },
      {
        key:6,
        latlng: {
          latitude:-8.560819,
          longitude: 115.172453
        },
        title: 'Polres Badung',
        subtitle: 'Lokasi Jl. Kebo Iwa No.1, Mengwitani, Mengwi, Kabupaten Badung, Bali 80351'
      },
      {
        key:7,
        latlng: {
          latitude:-8.541701,
          longitude: 115.323206
        },
        title: 'Polres Gianyar',
        subtitle: 'Lokasi Jl. Ngurah Rai-Gianyar, Gianyar, Kec. Gianyar, Kabupaten Gianyar, Bali 80511'
      },
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>Peta Polres & Polsek Bali </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}>AGUSAWE@Copyright </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#448AFF',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#448AFF',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
