const error = () => {
    throw new Error('left and right strands must be of equal length');
};

const compute = (s1, s2) => {
    if (s1.length !== s2.length) return error();
    return [...s1]
        .filter((x, idx) => x !== s2[idx])
        .length;
};

export default compute;