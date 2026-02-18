import Logo from '../assets/Logo .svg';

function Footer() {
    return (
        <footer>
            <img src={Logo} alt="Little Lemon Logo" />

            <section>
                <h4>Doormat Navigation</h4>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </section>

            <address>
                <h4>Contact</h4>
                <ul>
                    <li>123 Main Street</li>
                    <li>+1 234 567 890</li>
                    <li>info@littlelemon.com</li>
                </ul>
            </address>

            <section>
                <h4>Social Media Links</h4>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;
