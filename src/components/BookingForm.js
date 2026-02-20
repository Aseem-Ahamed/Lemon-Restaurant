// import { useState } from "react";

// function BookingForm({ availableTimes, dispatch, submitForm }) {
//     const [resDate, setResDate] = useState("");
//     const [resTime, setResTime] = useState("");
//     const [guests, setGuests] = useState(1);
//     const [occasion, setOccasion] = useState("");

//     const today = new Date().toISOString().split("T")[0];

//     const handleDateChange = (e) => {
//         setResDate(e.target.value);

//         dispatch({
//             type: "UPDATE_TIMES",
//             date: e.target.value,
//         });
//     };

//     const guestCount = Number(guests);

//     const isFormValid =
//         resDate &&
//         resTime &&
//         guestCount >= 1 &&
//         guestCount <= 10 &&
//         occasion;

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!isFormValid) return;

//         submitForm({
//             date: resDate,
//             time: resTime,
//             guests: guestCount,
//             occasion,
//         });
//     };

//     return (
//         <form className="booking-form" onSubmit={handleSubmit} noValidate>
//             <div>
//                 <label htmlFor="res-date">Choose date</label>
//                 <input
//                     type="date"
//                     id="res-date"
//                     value={resDate}
//                     onChange={handleDateChange}
//                     min={today}
//                     required
//                 />
//             </div>

//             <div>
//                 <label htmlFor="res-time">Choose time</label>
//                 <select
//                     id="res-time"
//                     value={resTime}
//                     onChange={(e) => setResTime(e.target.value)}
//                     required
//                 >
//                     <option value="">Select a time</option>
//                     {availableTimes.map((time) => (
//                         <option key={time} value={time}>
//                             {time}
//                         </option>
//                     ))}
//                 </select>
//             </div>

//             <div>
//                 <label htmlFor="guests">Number of guests</label>
//                 <input
//                     type="number"
//                     id="guests"
//                     min="1"
//                     max="10"
//                     value={guests}
//                     onChange={(e) => setGuests(e.target.value)}
//                     required
//                 />
//                 <small>You can book between 1 and 10 guests.</small>
//             </div>

//             <div>
//                 <label htmlFor="occasion">Occasion</label>
//                 <select
//                     id="occasion"
//                     value={occasion}
//                     onChange={(e) => setOccasion(e.target.value)}
//                     required
//                 >
//                     <option value="">Select occasion</option>
//                     <option value="Birthday">Birthday</option>
//                     <option value="Anniversary">Anniversary</option>
//                 </select>
//             </div>

//             <button type="submit" disabled={!isFormValid}>
//                 Make Your Reservation
//             </button>
//         </form>
//     );
// }

// export default BookingForm;


import { useState } from "react";

const validateForm = ({ date, time, guests, occasion }) => {
    const guestCount = Number(guests);
    return (
        date &&
        time &&
        guestCount >= 1 &&
        guestCount <= 10 &&
        occasion
    );
};

function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: 1,
        occasion: ""
    });

    const today = new Date().toISOString().split("T")[0];

    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));

        if (id === "date") {
            dispatch({
                type: "UPDATE_TIMES",
                date: value
            });
        }
    };

    const isValid = validateForm(formData);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValid) return;

        submitForm({
            ...formData,
            guests: Number(formData.guests)
        });
    };

    return (
        <form onSubmit={handleSubmit} noValidate className="booking-form">
            <label htmlFor="date">Choose date</label>
            <input
                type="date"
                id="date"
                min={today}
                value={formData.date}
                onChange={handleChange}
                required
            />

            <label htmlFor="time">Choose time</label>
            <select
                id="time"
                value={formData.time}
                onChange={handleChange}
                required
            >
                <option value="">Select time</option>
                {availableTimes.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                min="1"
                max="10"
                value={formData.guests}
                onChange={handleChange}
                required
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={formData.occasion}
                onChange={handleChange}
                required
            >
                <option value="">Select occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <button
                type="submit"
                disabled={!isValid}
            >
                Make Your Reservation
            </button>
        </form>
    );
}

export default BookingForm;