import Restaurant from "../assets/restaurant.jpg";
import ChefB from "../assets/Mario and Adrian A.jpg";

function Chicago() {
    return (
        <section className="about">
            <div className="chicago-container about-container">

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
    );
}

export default Chicago;