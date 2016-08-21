function concat (arg1, arg2) {
    console.log(String(arg1));
    console.log(typeof String(arg1));
    var result = [String(arg1), String(arg2)];
    return result.join('');
}