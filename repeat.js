var repeat = function (str, amount) {
    var result = '';
    for (var i = 0; i < amount; i++) {
        result += str;
    }
    return result;
};
console.log(repeat('sometext', 2));
console.log(repeat('wo', 3));
