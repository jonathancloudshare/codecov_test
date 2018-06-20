export function sayHello(name) {
    return `hi ${name}`;
}

export function sayHelloIfEven(name, n) {
    if (n % 2 === 0) {
        return `hi ${name}`;
    } else {
        return "No hello for you!";
    }
}

export function jonnyBoy(name, n) {
    if (n % 2 === 0) {
        return `hi ${name}, this is jonny`;
    } else {
        return "No hello for you! (from jonny)";
    }
}
