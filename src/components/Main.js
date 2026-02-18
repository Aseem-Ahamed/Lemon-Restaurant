// function Main() {
//     return (
//         <>
//             Main
//         </>
//     );
// }

// export default Main;

import heroImage from "../assets/restauranfood.jpg";
import salad from "../assets/greek salad.jpg";
import bruschetta from "../assets/bruchetta.svg";
import dessert from "../assets/lemon dessert.jpg";
import Adrian from "../assets/adrian.jpg";
import Basil from "../assets/basil.jpg";
import Boxton from "../assets/boxton.jpg";
import Willies from "../assets/willies.jpg";
import Star from "../assets/star.jpg";
import Restaurant from "../assets/restaurant.jpg";
import ChefB from "../assets/Mario and Adrian A.jpg";




function Main() {
    return (
        <main>

            {/* HERO SECTION */}
            {/* <section className="hero">
                <div className="container hero-content">
                    <div className="hero-text">
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>
                            We are a family owned Mediterranean restaurant,
                            focused on traditional recipes served with a modern twist.
                        </p>
                        <button className="btn-primary">Reserve a Table</button>
                    </div>

                    <div className="hero-image">
                        <img src={heroImage} alt="Restaurant food" />
                    </div>
                </div>
            </section> */}
            <section className="hero">
                <div className="hero-container">

                    <div className="hero-text">
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>
                            We are a family owned Mediterranean restaurant,
                            focused on traditional recipes served with a modern twist.
                        </p>
                        <button className="btn-primary">Reserve a Table</button>
                    </div>

                    <div className="hero-image">
                        <img src={heroImage} alt="Little Lemon food" />
                    </div>

                </div>
            </section>



            {/* SPECIALS SECTION */}
            {/* <section className="specials container">
                <div className="specials-header">
                    <h2>This week’s specials!</h2>
                    <button className="btn-primary">Online Menu</button>
                </div>

                <div className="cards">

                    <article className="card">
                        <img src={salad} alt="Greek salad" />
                        <div className="card-body">
                            <div className="card-title">
                                <h4>Greek salad</h4>
                                <span>$12.99</span>
                            </div>
                            <p>
                                Fresh lettuce, peppers, olives and Chicago style feta cheese,
                                garnished with crunchy garlic and rosemary croutons.
                            </p>
                            <a href="#">Order a delivery 🚴</a>
                        </div>
                    </article>

                    <article className="card">
                        <img src={bruschetta} alt="Bruschetta" />
                        <div className="card-body">
                            <div className="card-title">
                                <h4>Bruschetta</h4>
                                <span>$5.99</span>
                            </div>
                            <p>
                                Grilled bread that has been smeared with garlic and seasoned
                                with salt and olive oil.
                            </p>
                            <a href="#">Order a delivery 🚴</a>
                        </div>
                    </article>

                    <article className="card">
                        <img src={dessert} alt="Lemon Dessert" />
                        <div className="card-body">
                            <div className="card-title">
                                <h4>Lemon Dessert</h4>
                                <span>$5.00</span>
                            </div>
                            <p>
                                This comes straight from grandma’s recipe book, every last
                                ingredient has been sourced and is as authentic as can be imagined.
                            </p>
                            <a href="#">Order a delivery 🚴</a>
                        </div>
                    </article>

                </div>
            </section> */}
            <section className="specials">
                <div className="container">

                    <div className="specials-header">
                        <h2>This week’s specials!</h2>
                        <button className="btn-primary">Online Menu</button>
                    </div>

                    <div className="specials-cards">

                        <article className="special-card">
                            <img src={salad} alt="Greek salad" />
                            <div className="card-content">
                                <div className="card-top">
                                    <h4>Greek salad</h4>
                                    <span className="price">$12.99</span>
                                </div>
                                <p>
                                    The famous greek salad of crispy lettuce, peppers, olives
                                    and Chicago style feta cheese, garnished with crunchy garlic
                                    and rosemary croutons.
                                </p>
                                <a href="#" className="delivery-link">Order a delivery 🚴</a>
                            </div>
                        </article>

                        <article className="special-card">
                            <img src={bruschetta} alt="Bruschetta" />
                            <div className="card-content">
                                <div className="card-top">
                                    <h4>Bruschetta</h4>
                                    <span className="price">$5.99</span>
                                </div>
                                <p>
                                    Our Bruschetta is made from grilled bread that has been
                                    smeared with garlic and seasoned with salt and olive oil.
                                </p>
                                <a href="#" className="delivery-link">Order a delivery 🚴</a>
                            </div>
                        </article>

                        <article className="special-card">
                            <img src={dessert} alt="Lemon Dessert" />
                            <div className="card-content">
                                <div className="card-top">
                                    <h4>Lemon Dessert</h4>
                                    <span className="price">$5.00</span>
                                </div>
                                <p>
                                    This comes straight from grandma’s recipe book,
                                    every last ingredient has been sourced and is as
                                    authentic as can be imagined.
                                </p>
                                <a href="#" className="delivery-link">Order a delivery 🚴</a>
                            </div>
                        </article>

                    </div>
                </div>
            </section>



            {/* TESTIMONIALS */}
            {/* <section className="testimonials">
                <div className="container">
                    <h2>Testimonials</h2>
                    <div className="testimonial-cards">
                        <div className="testimonial-card">Rating ⭐⭐⭐⭐<p>Review text</p></div>
                        <div className="testimonial-card">Rating ⭐⭐⭐⭐<p>Review text</p></div>
                        <div className="testimonial-card">Rating ⭐⭐⭐⭐<p>Review text</p></div>
                        <div className="testimonial-card">Rating ⭐⭐⭐⭐<p>Review text</p></div>
                    </div>
                </div>
            </section> */}
            <section className="testimonials">
                <div className="container">
                    <h2>Testimonials</h2>

                    <div className="testimonial-cards">

                        <article className="testimonial-card">
                            <div className="rating">
                                {[...Array(5)].map((_, i) => (
                                    <img key={i} src={Star} alt="star" />
                                ))}
                            </div>

                            <div className="testimonial-user">
                                <img src={Adrian} alt="Adrian" />
                                <span>Adrian</span>
                            </div>

                            <p>Amazing food and great atmosphere. Highly recommended!</p>
                        </article>


                        <article className="testimonial-card">
                            <div className="rating">
                                {[...Array(4)].map((_, i) => (
                                    <img key={i} src={Star} alt="star" />
                                ))}
                            </div>

                            <div className="testimonial-user">
                                <img src={Basil} alt="Basil" />
                                <span>Basil</span>
                            </div>

                            <p>The Mediterranean flavors are authentic and delicious.</p>
                        </article>


                        <article className="testimonial-card">
                            <div className="rating">
                                {[...Array(5)].map((_, i) => (
                                    <img key={i} src={Star} alt="star" />
                                ))}
                            </div>

                            <div className="testimonial-user">
                                <img src={Boxton} alt="Boxton" />
                                <span>Boxton</span>
                            </div>

                            <p>Best restaurant experience I’ve had in Chicago.</p>
                        </article>


                        <article className="testimonial-card">
                            <div className="rating">
                                {[...Array(4)].map((_, i) => (
                                    <img key={i} src={Star} alt="star" />
                                ))}
                            </div>

                            <div className="testimonial-user">
                                <img src={Willies} alt="Willies" />
                                <span>Willies</span>
                            </div>

                            <p>Fantastic service and unforgettable dishes!</p>
                        </article>

                    </div>
                </div>
            </section>




            {/* ABOUT SECTION */}
            {/* <section className="about container">
                <div className="about-text">
                    <h2>Little Lemon</h2>
                    <h4>Chicago</h4>
                    <p>
                        We are a family owned Mediterranean restaurant focused on
                        traditional recipes served with a modern twist.
                    </p>
                </div>

                <div className="about-images">
                    <div className="img-box"></div>
                    <div className="img-box overlap"></div>
                </div>
            </section> */}
            <section className="about">
                <div className="container about-container">

                    <div className="about-text">
                        <h2>Little Lemon</h2>
                        <h4>Chicago</h4>
                        <p>
                            Little Lemon is a family owned Mediterranean restaurant,
                            focused on traditional recipes served with a modern twist.
                        </p>
                    </div>

                    <div className="about-images">
                        <img src={Restaurant} alt="Restaurant interior" className="img-back" />
                        <img src={ChefB} alt="Chef cooking" className="img-front" />
                    </div>

                </div>
            </section>


        </main>
    );
}

export default Main;
