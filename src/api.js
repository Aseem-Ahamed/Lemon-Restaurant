// export const seededRandom = function (seed) {
//     var m = 2 ** 35 - 31;
//     var a = 185852;
//     var s = seed % m;
//     return function () {
//         return (s = s * a % m) / m;
//     };
// };

// export const fetchAPI = function (date) {
//     let result = [];
//     let random = seededRandom(date.getDate());

//     for (let i = 17; i <= 23; i++) {
//         if (random() < 0.5) {
//             result.push(i + ':00');
//         }
//         if (random() < 0.5) {
//             result.push(i + ':30');
//         }
//     }
//     return result;
// };

// export const submitAPI = function (formData) {
//     return true;
// };

// // 👇 ADD THIS
// if (typeof global !== "undefined") {
//     global.fetchAPI = fetchAPI;
//     global.submitAPI = submitAPI;
// }

export const seededRandom = function (seed) {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;

    return function () {
        return (s = (s * a) % m) / m;
    };
};

export const fetchAPI = function (date) {
    const result = [];
    const random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) result.push(`${i}:00`);
        if (random() < 0.5) result.push(`${i}:30`);
    }

    return result;
};

export const submitAPI = function () {
    return true;
};
