import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MapGL from './MapGL';

mapboxgl.accessToken = 'pk.eyJ1IjoiamFyaXZhc2hrZW5henkiLCJhIjoiY2wxd2x2dXpuMDZ6bjNjcDhxNHJpODU3ciJ9.wJrxwloDiZyGmA6QGzh3Sw';

// export default function App() {
//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const [lng, setLng] = useState(34.8777);
//     const [lat, setLat] = useState(32.1079);
//     const [zoom, setZoom] = useState(10.5);

//     useEffect(() => {
//         if (map.current) return; // initialize map only once
//         map.current = new mapboxgl.Map({
//             container: mapContainer.current,
//             style: 'mapbox://styles/mapbox/streets-v11',
//             center: [lng, lat],
//             zoom: zoom
//         });
//     });

//     useEffect(() => {
//         if (!map.current) return; // wait for map to initialize
//         map.current.on('move', () => {
//             setLng(map.current.getCenter().lng.toFixed(4));
//             setLat(map.current.getCenter().lat.toFixed(4));
//             setZoom(map.current.getZoom().toFixed(2));
//         });
//     });

const App = () => {
    return (
        <div>
            <Navbar />
            <MapGL />
        </div>
    );
}
   
        

        //     <Router>
        //         <div className="App">
        //             <Navbar />
        //             <div className="content">
        //                 <Switch>
        //                     <Route exact path='/'>
        //                         <Home />
        //                     </Route>
        //                     <Route exact path='/create'>
        //                         <Create />
        //                     </Route>
        //                     <Route exact path='/blogs/:id'>
        //                         <BlogDetails />
        //                     </Route>
        //                     <Route path='*'>
        //                         <NotFound />
        //                     </Route>
        //                 </Switch>
        //             </div>
        //         </div>
        //     </Router>

        // <div>
        //     <div className="sidebar">
        //         Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        //     </div>
        //     <div ref={mapContainer} className="map-container" />
        // </div>

export default App;