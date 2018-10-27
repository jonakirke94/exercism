export const transform = value => {
    let result = {};
    Object.keys(value)
        .forEach(el => {
        [...value[el]]
            .forEach(val => result[val.toLowerCase()] = Number(el))
    });

    return result;
}