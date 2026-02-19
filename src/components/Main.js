/* global fetchAPI submitAPI */

import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";

import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import Specials from "./Specials";
import Chicago from "./Chicago";
import ConfirmedBooking from "./ConfirmedBooking";

/* =========================
   Reducer Functions
========================= */

export function initializeTimes() {
    const today = new Date();
    return global.fetchAPI(today);
}

export function updateTimes(state, action) {
    return global.fetchAPI(new Date(action.date));
}




/* =========================
   Main Component
========================= */

function Main() {
    const navigate = useNavigate();

    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        [],
        initializeTimes
    );

    function submitForm(formData) {
        const success = submitAPI(formData);

        if (success) {
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
                <Route path="/order" element={<div>Order Online Page</div>} />
                <Route path="/login" element={<div>Login Page</div>} />
            </Routes>
        </main>
    );
}

export default Main;


