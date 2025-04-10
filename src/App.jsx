import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutCompany from './components/AboutCompany';
import Products from './components/Products';
import ForBusiness from './components/ForBusiness';
import InDevelopment from './components/InDevelopment';
import AboutFund from './components/AboutFund';
import Contacts from './components/Contacts';
import './App.css';
import logo from './assets/images/logo.png';
import fundLogo from './assets/images/fund-logo.png'; // Предполагаем, что логотип фонда находится в этой папке

const App = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setDropdownVisible(false);
        }, 200);
    };

    return (
        <Router>
            <div className="app-container">
                <header className="header">
                    <div className="header-content">
                        <div
                            className="logo-container"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={logo} alt="Логотип компании" className="logo" />
                            {/* Добавляем логотип фонда рядом с основным логотипом */}
                            <Link to="/about-fund" className="fund-logo-link">
                                <img
                                    src={fundLogo}
                                    alt="Логотип фонда"
                                    className="fund-logo"
                                    style={{ filter: "brightness(1.1) contrast(1.2)" }}  // Делаем ярче и контрастнее
                                />
                            </Link>

                            <ul className={`nav-links ${isDropdownVisible ? 'visible' : ''}`}>
                                <li><Link to="/card-site">О компании</Link></li>
                                <li><Link to="/products">Продукты</Link></li>
                                <li><Link to="/for-business">Для бизнеса</Link></li>
                                <li><Link to="/in-development">В разработке</Link></li>
                                {/*<li><Link to="/about-fund">О фонде</Link></li>*/}
                                <li><Link to="/contacts">Контакты</Link></li>
                            </ul>
                        </div>
                        <h1 className="company-name">НОВАТЕХ</h1>
                    </div>
                </header>
                <main className="content">
                    <Routes>
                        <Route path="/card-site" element={<AboutCompany />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/for-business" element={<ForBusiness />} />
                        <Route path="/in-development" element={<InDevelopment />} />
                        <Route path="/about-fund" element={<AboutFund />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/" element={<AboutCompany />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;