import React from 'react';
import { Header, BurgerMenu, Footer } from './Components/&organisms';
import AppRouter from './Components/AppRouter';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <BurgerMenu />
            <AppRouter/>
            <Footer />
        </div>
    );
}

export default App;
