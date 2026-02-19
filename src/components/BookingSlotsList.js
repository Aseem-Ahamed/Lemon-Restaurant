import BookingSlot from "./BookingSlot";

function BookingSlotsList({ availableTimes, onSelect }) {
    return (
        <div style={{ marginTop: "10px" }}>
            {availableTimes.map((time) => (
                <BookingSlot
                    key={time}
                    time={time}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
}

export default BookingSlotsList;
