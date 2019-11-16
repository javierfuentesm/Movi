/*global google*/
import React from "react";
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} = require("react-google-maps");

class Map extends React.Component {
  state = {
    directions: null
  };

  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route(
      {
        origin: this.props.addressIni,
        destination: this.props.addressFin,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });

          console.log(this.state.directions);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  render() {
    const GoogleMapRoute = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap defaultCenter={this.props.addressIni} defaultZoom={13}>
          <DirectionsRenderer directions={this.state.directions} />
        </GoogleMap>
      ))
    );

    return (
      <GoogleMapRoute
        containerElement={<div style={{ height: "100vh", width: "75vw" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: "100%" }} />}
      />
    );
  }
}

/* const Map = props => {

  const MapLoader = withScriptjs(Ride);

  return (
    <>
      <Ride addressIni={props.addressIni} addressFin={props.addressFin}></Ride>;

      <MapLoader
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: "100%" }} />}
      />
    </>
  );
}; */

export default Map;
