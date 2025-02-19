var getParams = function (query) {
    return query.split('&').reduce(function (params, param) {
        var _a = param.split('='), key = _a[0], value = _a[1];
        params[key] = value;
        return params;
    }, {});
};
console.log(getParams('per=10&page=5'));
console.log(getParams('name=hexlet&count=3&order=asc'));
