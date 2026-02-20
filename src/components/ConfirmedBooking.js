// function ConfirmedBooking() {
//     return (
//         <section className="booking-confirmation">
//             <h2>Booking Confirmed!</h2>
//             <p>Your reservation has been successfully submitted.</p>
//         </section>
//     );
// }

// export default ConfirmedBooking;

function ConfirmedBooking() {
    return (
        <section
            role="status"
            aria-live="polite"
            className="booking-confirmation"
        >
            <h2>Booking Confirmed!</h2>
            <p>Your reservation has been successfully submitted.</p>
        </section>
    );
}

export default ConfirmedBooking;