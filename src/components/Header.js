import Logo from '../assets/Logo.svg';
import Nav from './Nav';

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <img src={Logo} alt="Little Lemon Logo" className="logo" />
                <Nav />
            </div>
        </header>
    );
}

export default Header;
