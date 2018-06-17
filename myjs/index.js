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
