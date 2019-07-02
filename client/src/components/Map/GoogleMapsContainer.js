import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';

class GoogleMapsContainer extends React.Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };

    bounds = new this.props.google.maps.LatLngBounds();

    pinSymbol = (color, scale) => {
        return {
            path: 'M10 2.009c-2.762 0-5 2.229-5 4.99 0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99zM10 9.76c-1.492 0-2.7-1.209-2.7-2.7s1.208-2.7 2.7-2.7c1.49 0 2.699 1.209 2.699 2.7s-1.209 2.7-2.699 2.7z',
            size: new this.props.google.maps.Size(20, 20),
            anchor: new this.props.google.maps.Point(10, 15),
            fillColor: color,
            fillOpacity: 1,
            scale: scale
       };
    }

    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });

    renderBounds() {
      var bounds = new this.props.google.maps.LatLngBounds();

      this.props.restaurants[0].businesses.map(restaurant =>{
        bounds.extend({ lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude })
      })

      let longNewLeftBound = ((bounds.ia.j - bounds.ia.l)/.56);
      bounds.ia.j += longNewLeftBound;

      return bounds;
    }

    renderCenter() {
      var center = {
        lat: this.props.restaurants[0].region.center.latitude, 
        lng: this.props.restaurants[0].region.center.longitude
      }

      return center
    }
    
    renderMarkers() {
        return this.props.restaurants[0].businesses.map(restaurant => {
            this.bounds.extend({ lat: restaurant.coordinates.latitude, lng:restaurant.coordinates.longitude })
            return (
              
                <Marker
                    onClick = { this.onMarkerClick }
                    name = { restaurant.name }
                    onMouseover = { () => this.props.setSelectedMarker(restaurant.id) }
                    key = { restaurant.id }             
                    icon = { this.pinSymbol(
                      (restaurant.id===this.props.selectedMarker ? 'red' : 'yellow'),
                      (restaurant.id===this.props.selectedMarker ? 2.5 : 2 )
                    )}
                    title = { restaurant.name }
                    position = {{ lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude }}
                >
                </Marker>
            );
        });
    }

    

    render() {
        if (!this.props.restaurants[0]) {
            return (
              <div></div>
            )
        } else {
            this.renderMarkers()
            return ( 
                <div className="map">
                    <Map
                        google = { this.props.google }
                        initialCenter = { this.renderCenter() }
                        bounds = { this.renderBounds() }
                        disableDefaultUI = { true }
                        zoomControl = { true }
                        styles = {[
                            {
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#ebe3cd"
                                }
                              ]
                            },
                            {
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#523735"
                                }
                              ]
                            },
                            {
                              "elementType": "labels.text.stroke",
                              "stylers": [
                                {
                                  "color": "#f5f1e6"
                                }
                              ]
                            },
                            {
                              "featureType": "administrative",
                              "elementType": "geometry.stroke",
                              "stylers": [
                                {
                                  "color": "#c9b2a6"
                                }
                              ]
                            },
                            {
                              "featureType": "administrative.land_parcel",
                              "elementType": "geometry.stroke",
                              "stylers": [
                                {
                                  "color": "#dcd2be"
                                }
                              ]
                            },
                            {
                              "featureType": "administrative.land_parcel",
                              "elementType": "labels",
                              "stylers": [
                                {
                                  "visibility": "off"
                                }
                              ]
                            },
                            {
                              "featureType": "administrative.land_parcel",
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#ae9e90"
                                }
                              ]
                            },
                            {
                              "featureType": "landscape.natural",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#dfd2ae"
                                }
                              ]
                            },
                            {
                              "featureType": "poi",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#dfd2ae"
                                }
                              ]
                            },
                            {
                              "featureType": "poi",
                              "elementType": "labels.text",
                              "stylers": [
                                {
                                  "visibility": "off"
                                }
                              ]
                            },
                            {
                              "featureType": "poi",
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#93817c"
                                }
                              ]
                            },
                            {
                              "featureType": "poi.business",
                              "stylers": [
                                {
                                  "visibility": "off"
                                }
                              ]
                            },
                            {
                              "featureType": "poi.park",
                              "elementType": "geometry.fill",
                              "stylers": [
                                {
                                  "color": "#a5b076"
                                }
                              ]
                            },
                            {
                              "featureType": "poi.park",
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#447530"
                                }
                              ]
                            },
                            {
                              "featureType": "road",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#f5f1e6"
                                }
                              ]
                            },
                            {
                              "featureType": "road",
                              "elementType": "labels.icon",
                              "stylers": [
                                {
                                  "visibility": "off"
                                }
                              ]
                            },
                            {
                              "featureType": "road.arterial",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#fdfcf8"
                                }
                              ]
                            },
                            {
                              "featureType": "road.arterial",
                              "elementType": "labels",
                              "stylers": [
                                {
                                  "visibility": "off"
                                }
                              ]
                            },
                            {
                              "featureType": "road.highway",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#f8c967"
                                }
                              ]
                            },
                            {
                              "featureType": "road.highway",
                              "elementType": "geometry.stroke",
                              "stylers": [
                                {
                                  "color": "#e9bc62"
                                }
                              ]
                            },
                            {
                              "featureType": "road.highway",
                              "elementType": "labels",
                              "stylers": [
                                {
                                  "visibility": "off"
                                }
                              ]
                            },
                            {
                              "featureType": "road.highway.controlled_access",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#e98d58"
                                }
                              ]
                            },
                            {
                              "featureType": "road.highway.controlled_access",
                              "elementType": "geometry.stroke",
                              "stylers": [
                                {
                                  "color": "#e9bc62"
                                }
                              ]
                            },
                            {
                              "featureType": "road.local",
                              "stylers": [
                                {
                                  "visibility": "off"
                                }
                              ]
                            },
                            {
                              "featureType": "road.local",
                              "elementType": "labels",
                              "stylers": [
                                {
                                  "visibility": "off"
                                }
                              ]
                            },
                            {
                              "featureType": "road.local",
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#806b63"
                                }
                              ]
                            },
                            {
                              "featureType": "transit",
                              "stylers": [
                                {
                                  "visibility": "off"
                                }
                              ]
                            },
                            {
                              "featureType": "transit.line",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#dfd2ae"
                                }
                              ]
                            },
                            {
                              "featureType": "transit.line",
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#8f7d77"
                                }
                              ]
                            },
                            {
                              "featureType": "transit.line",
                              "elementType": "labels.text.stroke",
                              "stylers": [
                                {
                                  "color": "#ebe3cd"
                                }
                              ]
                            },
                            {
                              "featureType": "transit.station",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#dfd2ae"
                                }
                              ]
                            },
                            {
                              "featureType": "water",
                              "elementType": "geometry.fill",
                              "stylers": [
                                {
                                  "color": "#b9d3c2"
                                }
                              ]
                            },
                            {
                              "featureType": "water",
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#92998d"
                                }
                              ]
                            }
                          ]}
                    >  
                        {this.renderMarkers()}
                        <InfoWindow
                          marker={this.state.activeMarker}
                          visible={this.state.showingInfoWindow}>
                            <div>
                              <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    </Map>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return { restaurants: Object.values(state.restaurants)};
};

export default compose(
    connect(
        mapStateToProps
    ),
    GoogleApiWrapper(
        { apiKey: 'AIzaSyCY6yhE9gCjVdX6AVX2at-VENJlZRaNHyg' }
    )
)(GoogleMapsContainer);