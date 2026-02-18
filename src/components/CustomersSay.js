import Adrian from "../assets/adrian.jpg";
import Basil from "../assets/basil.jpg";
import Boxton from "../assets/boxton.jpg";
import Willies from "../assets/willies.jpg";
import Star from "../assets/star.jpg";


function CustomersSay() {
    return (
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
    );
}

export default CustomersSay;