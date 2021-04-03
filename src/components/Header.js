import React from 'react';

const Header = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">          
                <a className="navbar-brand" href="#">Surer</a>
                <div className="navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2">
                        <input className="form-control mx-2" type="search" placeholder="search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
        </nav>
    )
}

export default Header;