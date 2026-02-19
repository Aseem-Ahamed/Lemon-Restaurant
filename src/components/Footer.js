import Logo from '../assets/Logo.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-logo">
                    <img src={Logo} alt="Little Lemon Logo" />
                </div>

                <nav className="footer-nav">
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>

                <address className="footer-contact">
                    <h4>Contact</h4>
                    <p>123 Main Street</p>
                    <p><a href="tel:+1234567890">+1 234 567 890</a></p>
                    <p><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
                </address>

                <section className="footer-social">
                    <h4>Social Media Links</h4>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </section>

            </div>
        </footer>
    );
}

export default Footer;

