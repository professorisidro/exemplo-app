

import React from 'react'
import Corpo from './Corpo';
import List from './List';
import Detail from './Detail';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {

        return (


            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item nav-link">
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li class="nav-item nav-link">
                                <NavLink to="/detalhes">Detalhes</NavLink>
                            </li>
                            <li class="nav-item nav-link">
                                <NavLink to="/lista">Lista</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}
export default Navbar;
