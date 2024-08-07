import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { ChatState } from './Context/ChatProvider';
function Home(props) {
    const {user} = ChatState();
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? 'light' : 'dark'} bg-${props.mode === 'light' ? 'light' : 'dark'}`} >
                <div className="container-fluid">
                    <Link className="navbar-brand" >
                        <h3 style={{ color: 'blue', fontFamily: 'cursive' }}>TradeCollab</h3>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <Link className="nav-link" aria-current="page" >Feed</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/chats">Chat</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/education">Education</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" >Notification</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to='/support'>Contact us</Link>
                            </li>
                        </ul>

                        {/* <form className="d-flex" role="search">
                            <input className="form-control mx-3" type="search" placeholder="Search" aria-label="Search" />
                        </form> */}

                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                onClick={props.toggleMode}
                            />
                        </div>
                    </div>
                </div>
            </nav>
            <br/>
            <div >
                <div>
                    <br /><br />
                    <br /><br />
                    <h1 style={{ color: '' }}><span style={{color:'red'}}>🌹🌹  '{user.name}'</span> Welcome to TradeCollab! 🌹🌹</h1>
                    <h1>🙏👊🥳</h1>
                    <br /><br />
                </div>
            </div>
            <footer className="text-center p-3 " style={{ backgroundColor: '#042743', color: '#fff', position: 'fixed', bottom: '0', width: '100%' }} onClick={props.toggleMode}>
                © 2023 TradeCollab Copyright:
            </footer>

        </>
    );
}

export default Home;
