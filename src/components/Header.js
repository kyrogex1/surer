import React from 'react';

const Header = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">          
                <a class="navbar-brand" href="#">Surer</a>
                <div class="navbar-collapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2">
                        <input class="form-control mx-2" type="search" placeholder="search" />
                        <button class="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
        </nav>
    )
}

export default Header;