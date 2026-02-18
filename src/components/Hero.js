import heroImage from "../assets/restauranfood.jpg";

function Hero() {
    return (
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
    );
}
export default Hero;