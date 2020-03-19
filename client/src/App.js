import React from 'react';
import MapGL, {Marker}  from 'react-map-gl';
import "./App.css"

import data from './data/patient-data.json';
import MARKER_STYLE from './marker-style';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN
  
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 40.7485452,
        longitude: -73.9879522,
        zoom: 11,
        bearing: 0,
        pitch: 0
      } 
    };     
  }
 
  _renderMarker(data, i) {
    const {patientid, coordinates, status, reportdate} = data; 
    return (
      <Marker
        key={i}
        longitude={coordinates[0]}
        latitude={coordinates[1]}
        captureDrag={false}
        captureDoubleClick={false} 
      > 
        <div className={status}>
            <span>Patient: {patientid} &nbsp;</span> 
            <span>Latitude: {coordinates[1]} &nbsp;</span>
            <span>Longitude: {coordinates[0]} &nbsp;</span>  
            <span>Condition: {status} &nbsp;</span>
            <span>Report date: {reportdate}</span>
        </div>  
         
     </Marker>
    );
  }

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={viewport => this.setState({viewport})}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      > 
        <style>{MARKER_STYLE}</style>
        {data.map(this._renderMarker)}
      </MapGL>
    );
  }  
}

export default App;
