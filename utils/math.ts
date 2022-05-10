export const range = (from : number, to : number, step : number = 1) : number[] => {
    return Array.from(Array(Math.floor((to - from) / step) + 1)).map(
        (v, k) => from + k * step
    );
}