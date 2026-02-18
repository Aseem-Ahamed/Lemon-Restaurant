// function Nav() {
//     return (
//         <nav className="navbar">
//             <ul>
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">About</a></li>
//                 <li><a href="#">Menu</a></li>
//                 <li><a href="#">Reservations</a></li>
//                 <li><a href="#">Order Online</a></li>
//                 <li><a href="#">Login</a></li>
//             </ul>
//         </nav>
//     );
// }

// export default Nav;

// function Nav() {
//     return (
//         <nav className="navbar">
//             <ul>
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">About</a></li>
//                 <li><a href="#">Menu</a></li>
//                 <li><a href="#">Reservations</a></li>
//                 <li><a href="#">Order Online</a></li>
//                 <li><a href="#">Login</a></li>
//             </ul>
//         </nav>
//     );
// }

// export default Nav;

import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/order">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
