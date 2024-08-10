const add = (key: string, value: string) => {
    localStorage
        .setItem(key, value);
}

const get = (key: string) => {
    return localStorage
        .getItem(key);
}

const remove = (key: string) => {
    localStorage
        .removeItem(key);
}

export {
    add,
    get,
    remove
}
