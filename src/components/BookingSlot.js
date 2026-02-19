function BookingSlot({ time, onSelect }) {
    return (
        <button
            type="button"
            onClick={() => onSelect(time)}
            style={{
                padding: "8px",
                margin: "5px",
                borderRadius: "6px",
                cursor: "pointer"
            }}
        >
            {time}
        </button>
    );
}

export default BookingSlot;
