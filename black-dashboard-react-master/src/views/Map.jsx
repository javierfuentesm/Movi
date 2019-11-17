/*global google*/
import React from "react";
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer
} = require("react-google-maps");

class Map extends React.Component {
  state = {
    directions: null,
    currentLatLng: ""
  };

  componentDidMount() {
    const getGeoLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          console.log(position.coords);
          this.setState(prevState => ({
            currentLatLng: {
              ...prevState.currentLatLng,
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          }));
        });
      }
    };
    getGeoLocation();
  }

  componentDidUpdate(prevProps) {
    const DirectionsService = new google.maps.DirectionsService();

    if (
      this.props.addressFin !== prevProps.addressFin ||
      this.props.addressIni !== prevProps.addressIni
    ) {
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
  }

  render() {
    const GoogleMapRoute = withScriptjs(
      withGoogleMap(props => {
       // if ((this.props.addressIni&&this.props.addressFin)) {
          return (
            <GoogleMap defaultCenter={this.props.addressIni} defaultZoom={13}>
              <DirectionsRenderer directions={this.state.directions} />
            </GoogleMap>
          );
/*         } else {
          return (
            <GoogleMap
              defaultCenter={this.state.currentLatLng}
              defaultZoom={13}
            >
              <Marker position={this.state.currentLatLng} />

              <DirectionsRenderer directions={this.state.directions} />
            </GoogleMap>
          );
        } */
      })
    );

    return (
      <GoogleMapRoute
        containerElement={<div style={{ height: "100vh", width: "100vw" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: "100%" }} />}
      />
    );
  }
}

export default Map;
