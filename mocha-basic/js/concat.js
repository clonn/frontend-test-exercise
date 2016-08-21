function concat (arg1, arg2) {
    var result = [String(arg1), String(arg2)];
    return result.join('');
}

var module = module || {};
if (module && module.exports)
    module.exports = concat;