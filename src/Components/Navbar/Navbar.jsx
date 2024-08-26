import './Navbar.scss';

const Navbar = () => {
    return(
        <div className="navBar">
            <div className="logo"></div>

            <div className="menu">
                <ul>
                    <li className='nav-list'>Destinations</li>
                    <li className='nav-list'>Abous Us</li>
                    <li className='nav-list'>Testiminial</li>
                    <li className='nav-list'>Gallery</li>
                </ul>
            </div>

            <button className="button-signup">Sign up</button>
        </div>
    )
}

export default Navbar;