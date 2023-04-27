import './App.css'
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { divIcon } from 'leaflet'

function App() {

  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello, I am pop 1"
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, I am pop 2"
    },
  ]
  
  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      // iconSize: point(33,33, true)

    })
  }

  return (
    <>
      <MapContainer 
        center={[48.8566, 2.3522]} 
        zoom={13}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        >
        {markers.map(marker => (
          <Marker key={markers.indexOf(marker)} position={marker.geocode}>
            <Popup>
              <h2>{marker.popUp}</h2>
            </Popup>
          </Marker>
        ))}
        </MarkerClusterGroup>

      </MapContainer>
    </>
  )
}

export default App
