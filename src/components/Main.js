// /* global fetchAPI submitAPI */

// import { Routes, Route, useNavigate } from "react-router-dom";
// import { useReducer } from "react";

// import Homepage from "./Homepage";
// import BookingPage from "./BookingPage";
// import Specials from "./Specials";
// import Chicago from "./Chicago";
// import ConfirmedBooking from "./ConfirmedBooking";

// /* =========================
//    Reducer Functions
// ========================= */

// export function initializeTimes() {
//     return fetchAPI(new Date());
// }

// export function updateTimes(state, action) {
//     return fetchAPI(new Date(action.date));
// }



// /* =========================
//    Main Component
// ========================= */

// function Main() {
//     const navigate = useNavigate();

//     const [availableTimes, dispatch] = useReducer(
//         updateTimes,
//         [],
//         initializeTimes
//     );

//     function submitForm(formData) {
//         const success = submitAPI(formData);

//         if (success) {
//             navigate("/confirmed");
//         }
//     }

//     return (
//         <main>
//             <Routes>
//                 <Route path="/" element={<Homepage />} />

//                 <Route
//                     path="/booking"
//                     element={
//                         <BookingPage
//                             availableTimes={availableTimes}
//                             dispatch={dispatch}
//                             submitForm={submitForm}
//                         />
//                     }
//                 />

//                 <Route path="/confirmed" element={<ConfirmedBooking />} />

//                 <Route path="/about" element={<Chicago />} />
//                 <Route path="/menu" element={<Specials />} />
//                 <Route path="/order" element={<div>Order Online Page</div>} />
//                 <Route path="/login" element={<div>Login Page</div>} />
//             </Routes>
//         </main>
//     );
// }

// export default Main;


import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../api";

import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import Chicago from "./Chicago";
import Specials from "./Specials";

export function initializeTimes() {
    return fetchAPI(new Date());
}

export function updateTimes(state, action) {
    switch (action.type) {
        case "UPDATE_TIMES":
            return fetchAPI(new Date(action.date));
        default:
            return state;
    }
}

function Main() {
    const navigate = useNavigate();

    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        [],
        initializeTimes
    );

    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route
                    path="/booking"
                    element={
                        <BookingPage
                            availableTimes={availableTimes}
                            dispatch={dispatch}
                            submitForm={submitForm}
                        />
                    }
                />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
                <Route path="/about" element={<Chicago />} />
                <Route path="/menu" element={<Specials />} />
            </Routes>
        </main>
    );
}

export default Main;