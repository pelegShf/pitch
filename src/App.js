import React from 'react';
import { useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Navbar } from './components';
import { Home, Create, FieldDetails, Login, Loading } from './pages';
import { AuthProvider } from './helpers/authContext'
import { auth } from './helpers/firebase';
import { onAuthStateChanged } from 'firebase/auth';

mapboxgl.accessToken = 'pk.eyJ1IjoiamFyaXZhc2hrZW5henkiLCJhIjoiY2wxd2x2dXpuMDZ6bjNjcDhxNHJpODU3ciJ9.wJrxwloDiZyGmA6QGzh3Sw';

const App = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setIsLoading(false);
        })
    }, []);

    // const App = () => {
    return (
        <div className='App'>
            <Router>
                <AuthProvider value={{ currentUser }} >
                    {isLoading == true ? Loading() :
                        currentUser ?
                            <div>
                                <Navbar />
                                <div className="content">
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/add_field" element={<Create />} />
                                        <Route path="/detailed_field/:id" element={<FieldDetails />} />
                                        <Route path="*" element={<Home />} />
                                    </Routes>
                                </div>
                            </div>
                            :
                            <Login />
                    }
                </AuthProvider>
            </Router>
        </div>

    );
}

export default App;
