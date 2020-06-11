const validateFields= value => {
    return (!!(((value !== '') && (!/^\s+$/.test(value)))));
}

const isObjNotEmpty = obj => {
    return Object.keys(obj).length;
};

export { isObjNotEmpty, validateFields };