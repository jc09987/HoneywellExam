export function validateFields(value) {
    return (!!(((value !== '') && (!/^\s+$/.test(value)))));
}
