import React from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter, Route } from 'react-router-dom';
import home from './component/ReataurantManagement/home';
import Signup from './component/ReataurantManagement/signup';

function MyApp({ Component, pageProps }) {
    return (
        <PrimeReactProvider>
            <Component {...pageProps} />
        </PrimeReactProvider>
    );
}

function App() {
    return (
        <PrimeReactProvider>
            <BrowserRouter>
                <Route path="/" exact component={Signup}></Route>
                <Route path="/home" exact component={home}></Route>
            </BrowserRouter>
        </PrimeReactProvider>
    );
}

export default App;
