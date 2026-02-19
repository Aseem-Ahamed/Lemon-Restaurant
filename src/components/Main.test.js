import { initializeTimes, updateTimes } from "./Main";

describe("Reducer functions", () => {

    beforeEach(() => {
        global.fetchAPI = jest.fn(() => [
            "17:00",
            "18:00",
            "19:00"
        ]);
    });

    test("initializeTimes returns available times from fetchAPI", () => {
        const result = initializeTimes();

        expect(global.fetchAPI).toHaveBeenCalled();
        expect(result).toEqual([
            "17:00",
            "18:00",
            "19:00"
        ]);
    });

    test("updateTimes returns available times based on selected date", () => {
        const state = [];

        const action = {
            type: "UPDATE_TIMES",
            date: "2026-02-20"
        };

        const result = updateTimes(state, action);

        expect(global.fetchAPI).toHaveBeenCalledWith(new Date("2026-02-20"));
        expect(result).toEqual([
            "17:00",
            "18:00",
            "19:00"
        ]);
    });

});
