// // function Main() {
// //     return (
// //         <>
// //             Main
// //         </>
// //     );
// // }

// // export default Main;

// import Specials from "./Specials";
// import Testimonials from "./Testimonials";







// function Main() {
//     return (
//         <main>

//             {/* HERO SECTION */}
//             {/* <section className="hero">
//                 <div className="container hero-content">
//                     <div className="hero-text">
//                         <h1>Little Lemon</h1>
//                         <h3>Chicago</h3>
//                         <p>
//                             We are a family owned Mediterranean restaurant,
//                             focused on traditional recipes served with a modern twist.
//                         </p>
//                         <button className="btn-primary">Reserve a Table</button>
//                     </div>

//                     <div className="hero-image">
//                         <img src={heroImage} alt="Restaurant food" />
//                     </div>
//                 </div>
//             </section> */}




//             {/* SPECIALS SECTION */}
//             {/* <section className="specials container">
//                 <div className="specials-header">
//                     <h2>This week’s specials!</h2>
//                     <button className="btn-primary">Online Menu</button>
//                 </div>

//                 <div className="cards">

//                     <article className="card">
//                         <img src={salad} alt="Greek salad" />
//                         <div className="card-body">
//                             <div className="card-title">
//                                 <h4>Greek salad</h4>
//                                 <span>$12.99</span>
//                             </div>
//                             <p>
//                                 Fresh lettuce, peppers, olives and Chicago style feta cheese,
//                                 garnished with crunchy garlic and rosemary croutons.
//                             </p>
//                             <a href="#">Order a delivery 🚴</a>
//                         </div>
//                     </article>

//                     <article className="card">
//                         <img src={bruschetta} alt="Bruschetta" />
//                         <div className="card-body">
//                             <div className="card-title">
//                                 <h4>Bruschetta</h4>
//                                 <span>$5.99</span>
//                             </div>
//                             <p>
//                                 Grilled bread that has been smeared with garlic and seasoned
//                                 with salt and olive oil.
//                             </p>
//                             <a href="#">Order a delivery 🚴</a>
//                         </div>
//                     </article>

//                     <article className="card">
//                         <img src={dessert} alt="Lemon Dessert" />
//                         <div className="card-body">
//                             <div className="card-title">
//                                 <h4>Lemon Dessert</h4>
//                                 <span>$5.00</span>
//                             </div>
//                             <p>
//                                 This comes straight from grandma’s recipe book, every last
//                                 ingredient has been sourced and is as authentic as can be imagined.
//                             </p>
//                             <a href="#">Order a delivery 🚴</a>
//                         </div>
//                     </article>

//                 </div>
//             </section> */}
//             <Specials />



//             {/* TESTIMONIALS */}
//             {/* <section className="testimonials">
//                 <div className="container">
//                     <h2>Testimonials</h2>
//                     <div className="testimonial-cards">
//                         <div className="testimonial-card">Rating ⭐⭐⭐⭐<p>Review text</p></div>
//                         <div className="testimonial-card">Rating ⭐⭐⭐⭐<p>Review text</p></div>
//                         <div className="testimonial-card">Rating ⭐⭐⭐⭐<p>Review text</p></div>
//                         <div className="testimonial-card">Rating ⭐⭐⭐⭐<p>Review text</p></div>
//                     </div>
//                 </div>
//             </section> */}





//             {/* ABOUT SECTION */}
//             {/* <section className="about container">
//                 <div className="about-text">
//                     <h2>Little Lemon</h2>
//                     <h4>Chicago</h4>
//                     <p>
//                         We are a family owned Mediterranean restaurant focused on
//                         traditional recipes served with a modern twist.
//                     </p>
//                 </div>

//                 <div className="about-images">
//                     <div className="img-box"></div>
//                     <div className="img-box overlap"></div>
//                 </div>
//             </section> */}



//         </main>
//     );
// }

// export default Main;

import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import Specials from "./Specials";
import Chicago from "./Chicago";

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/about" element={<Chicago />} />
                <Route path="/menu" element={<Specials />} />
                <Route path="/order" element={<div>Order Online Page</div>} />
                <Route path="/login" element={<div>Login Page</div>} />
            </Routes>
        </main>
    );
}

export default Main;

