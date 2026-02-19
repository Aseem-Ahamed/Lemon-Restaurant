import salad from "../assets/greek salad.jpg";
import bruschetta from "../assets/bruchetta.svg";
import dessert from "../assets/lemon dessert.jpg";

function Specials() {
    return (
        <section className="specials">
            <div className="specials-container">

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
    );
}
export default Specials;