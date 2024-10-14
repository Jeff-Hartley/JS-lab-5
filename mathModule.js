import { toUpperCase } from './stringModule.js';

//addition function
export let add =(a,b) => {
    return a + b;
}

//subtraction function
export let subtract = (a,b) => {
    return a - b;
}

//default export multiply
export default function multiply (a,b) {
    return a * b;
}

//add and log upper function
export let addAndLogUpper = (a,b) => {
    const result = add(a,b);
    console.log(toUpperCase(result.toString()));
}