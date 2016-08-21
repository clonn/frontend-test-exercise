function add(num1, num2) {
    num1 = (typeof num1 !== 'number') ? 0 : parseInt(num1, 10);
    num2 = (typeof num2 !== 'number') ? 0 : parseInt(num2, 10);
    return num1 + num2;
}