function dealParams(options) {
    let query = ''
    for (const prop in options) {
        query += '&' + prop + '=' + options[prop]
    }
    return query
}
export function getData(url) {
    return function (opt) {
        return fetch(url + dealParams(opt)).then((data) => data.json())
    }
}

