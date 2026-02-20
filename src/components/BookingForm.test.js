// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import BookingForm from "./BookingForm";

// const renderComponent = (submitMock = jest.fn()) => {
//     render(
//         <BookingForm
//             availableTimes={["17:00", "18:00"]}
//             dispatch={jest.fn()}
//             submitForm={submitMock}
//         />
//     );
// };

// describe("BookingForm Validation Tests", () => {

//     test("Renders the BookingForm static text", () => {
//         renderComponent();
//         const labelElement = screen.getByText("Choose date");
//         expect(labelElement).toBeInTheDocument();
//     });

//     test("Date input is required", () => {
//         renderComponent();
//         const dateInput = screen.getByLabelText(/choose date/i);
//         expect(dateInput).toBeRequired();
//     });

//     test("Time select is required", () => {
//         renderComponent();
//         const timeSelect = screen.getByLabelText(/choose time/i);
//         expect(timeSelect).toBeRequired();
//     });

//     test("Guests input has min and max attributes", () => {
//         renderComponent();
//         const guestsInput = screen.getByLabelText(/number of guests/i);

//         expect(guestsInput).toHaveAttribute("min", "1");
//         expect(guestsInput).toHaveAttribute("max", "10");
//     });

//     test("Occasion select is required", () => {
//         renderComponent();
//         const occasionSelect = screen.getByLabelText(/occasion/i);
//         expect(occasionSelect).toBeRequired();
//     });

//     test("Submit button is disabled when form is invalid", () => {
//         renderComponent();
//         const submitButton = screen.getByDisplayValue(/make your reservation/i);
//         expect(submitButton).toBeDisabled();
//     });

//     test("Submit button becomes enabled when form is valid", async () => {
//         renderComponent();

//         await userEvent.type(
//             screen.getByLabelText(/choose date/i),
//             "2026-12-25"
//         );

//         await userEvent.selectOptions(
//             screen.getByLabelText(/choose time/i),
//             "17:00"
//         );

//         await userEvent.clear(
//             screen.getByLabelText(/number of guests/i)
//         );

//         await userEvent.type(
//             screen.getByLabelText(/number of guests/i),
//             "4"
//         );

//         await userEvent.selectOptions(
//             screen.getByLabelText(/occasion/i),
//             "Birthday"
//         );

//         const submitButton = screen.getByDisplayValue(
//             /make your reservation/i
//         );

//         expect(submitButton).toBeEnabled();
//     });

//     test("Form submits correct data when valid", async () => {
//         const mockSubmit = jest.fn();
//         renderComponent(mockSubmit);

//         await userEvent.type(
//             screen.getByLabelText(/choose date/i),
//             "2026-12-25"
//         );

//         await userEvent.selectOptions(
//             screen.getByLabelText(/choose time/i),
//             "17:00"
//         );

//         await userEvent.clear(
//             screen.getByLabelText(/number of guests/i)
//         );

//         await userEvent.type(
//             screen.getByLabelText(/number of guests/i),
//             "3"
//         );

//         await userEvent.selectOptions(
//             screen.getByLabelText(/occasion/i),
//             "Birthday"
//         );

//         await userEvent.click(
//             screen.getByDisplayValue(/make your reservation/i)
//         );

//         expect(mockSubmit).toHaveBeenCalledWith({
//             date: "2026-12-25",
//             time: "17:00",
//             guests: 3,
//             occasion: "Birthday",
//         });
//     });

// });


import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "../components/BookingForm";

test("submit button disabled when invalid", () => {
    render(
        <BookingForm
            availableTimes={["17:00"]}
            dispatch={jest.fn()}
            submitForm={jest.fn()}
        />
    );

    expect(
        screen.getByRole("button", { name: /make your reservation/i })
    ).toBeDisabled();
});

test("submit button enabled when form valid", async () => {
    render(
        <BookingForm
            availableTimes={["17:00"]}
            dispatch={jest.fn()}
            submitForm={jest.fn()}
        />
    );

    await userEvent.type(screen.getByLabelText(/choose date/i), "2026-12-25");
    await userEvent.selectOptions(screen.getByLabelText(/choose time/i), "17:00");
    await userEvent.clear(screen.getByLabelText(/number of guests/i));
    await userEvent.type(screen.getByLabelText(/number of guests/i), "2");
    await userEvent.selectOptions(screen.getByLabelText(/occasion/i), "Birthday");

    expect(
        screen.getByRole("button", { name: /make your reservation/i })
    ).toBeEnabled();
});