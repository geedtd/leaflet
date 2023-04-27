import './App.css'
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'

function App() {

  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello, I am pop 1"
    }
  ]
  

  return (
    <>
      <MapContainer 
        center={[48.8566, 2.3522]} 
        zoom={13}
        
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {markers.map(marker => (
          <Marker key={markers.indexOf(marker)} position={marker.geocode}>
            <Popup>
              <h2>{marker.popUp}</h2>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  )
}

export default App
