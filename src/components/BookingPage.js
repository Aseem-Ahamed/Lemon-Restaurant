// import { useState } from "react";
// import BookingForm from "./BookingForm";

// function BookingPage({ availableTimes, dispatch }) {
//     const [bookingData, setBookingData] = useState([]);

//     const handleBookingSubmit = (formData) => {
//         setBookingData([...bookingData, formData]);
//     };

//     return (
//         <section className="booking">
//             <div className="container">
//                 <h2>Reserve a Table</h2>

//                 <BookingForm
//                     availableTimes={availableTimes}
//                     dispatch={dispatch}
//                     onSubmit={handleBookingSubmit}
//                 />

//                 {/* Table Section */}
//                 {bookingData.length > 0 && (
//                     <table border="1" style={{ marginTop: "20px" }}>
//                         <thead>
//                             <tr>
//                                 <th>Date</th>
//                                 <th>Time</th>
//                                 <th>Guests</th>
//                                 <th>Occasion</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {bookingData.map((booking, index) => (
//                                 <tr key={index}>
//                                     <td>{booking.date}</td>
//                                     <td>{booking.time}</td>
//                                     <td>{booking.guests}</td>
//                                     <td>{booking.occasion}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 )}

//             </div>
//         </section>
//     );
// }

// export default BookingPage;

import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
    return (
        <section className="booking-section">
            <div className="booking-wrapper">
                <h1 className="booking-title">Reserve a Table</h1>

                <BookingForm
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    submitForm={submitForm}
                />
            </div>
        </section>
    );
}

export default BookingPage;



