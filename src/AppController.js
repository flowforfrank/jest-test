class AppController {
    add(a, b)       { return a + b };
    subtract(a, b)  { return a - b };
    multiply(a, b)  { return a * b };
    divide(a, b)    { return a / b };
}

const appController = new AppController;

module.exports = appController;