import React from "react";
import Map from "./Map";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

// reactstrap components
import { Card, CardHeader, CardTitle, Input, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { setTrips } from "../actions";

// core components
/* import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.jsx"; */

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      addressIni: "",
      addressFin: "",
      origin: "",
      destination: ""
    };
  }

  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };

  handleChange = address => {
    this.setState({ addressIni: address });
  };
  handleChange2 = address => {
    this.setState({ addressFin: address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({ origin: latLng }))
      .catch(error => console.error("Error", error));
  };

  handleSelect2 = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({ destination: latLng }))
      .catch(error => console.error("Error", error));
  };
  componentDidMount() {
    const API = "https://movi.javierfuentesm.now.sh/api/trips";
    const fetchdata = async () => {
      const response = await fetch(API);
      const data = await response.json();
      this.props.setTrips(data.data);
      return data;
    };
    fetchdata();
   // console.log(this.props.user[0].name);
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="6">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="12">
                      <CardTitle tag="h3">Ruta Origen</CardTitle>
                      <PlacesAutocomplete
                        value={this.state.addressIni}
                        onChange={this.handleChange}
                        onSelect={this.handleSelect}
                      >
                        {({
                          getInputProps,
                          suggestions,
                          getSuggestionItemProps,
                          loading
                        }) => (
                          <div>
                            <Input
                              {...getInputProps({
                                placeholder: "Buscando Ruta ..."
                              })}
                            />
                            <div className="autocomplete-dropdown-container">
                              {loading && <div>Loading...</div>}
                              {suggestions.map(suggestion => {
                                const className = suggestion.active
                                  ? "suggestion-item--active"
                                  : "suggestion-item";
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                  ? {
                                      backgroundColor: "#fafafa",
                                      cursor: "pointer"
                                    }
                                  : {
                                      backgroundColor: "#ffffff",
                                      cursor: "pointer"
                                    };
                                return (
                                  <div
                                    {...getSuggestionItemProps(suggestion, {
                                      className,
                                      style
                                    })}
                                  >
                                    <span>{suggestion.description}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </PlacesAutocomplete>
                    </Col>
                  </Row>
                </CardHeader>
              </Card>
            </Col>
            <Col xs="6">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="12">
                      <CardTitle tag="h3">Ruta Destino</CardTitle>

                      <PlacesAutocomplete
                        value={this.state.addressFin}
                        onChange={this.handleChange2}
                        onSelect={this.handleSelect2}
                      >
                        {({
                          getInputProps,
                          suggestions,
                          getSuggestionItemProps,
                          loading
                        }) => (
                          <div>
                            <Input
                              {...getInputProps({
                                placeholder: "Buscando Ruta ..."
                              })}
                            />
                            <div className="autocomplete-dropdown-container">
                              {loading && <div>Loading...</div>}
                              {suggestions.map(suggestion => {
                                const className = suggestion.active
                                  ? "suggestion-item--active"
                                  : "suggestion-item";
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                  ? {
                                      backgroundColor: "#fafafa",
                                      cursor: "pointer"
                                    }
                                  : {
                                      backgroundColor: "#ffffff",
                                      cursor: "pointer"
                                    };
                                return (
                                  <div
                                    {...getSuggestionItemProps(suggestion, {
                                      className,
                                      style
                                    })}
                                  >
                                    <span>{suggestion.description}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </PlacesAutocomplete>
                    </Col>
                  </Row>
                </CardHeader>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Mi cuenta</h5>
                      <CardTitle tag="h2">Viaje</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <div>
                  <Map
                    addressIni={this.state.origin}
                    addressFin={this.state.destination}
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  setTrips
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
