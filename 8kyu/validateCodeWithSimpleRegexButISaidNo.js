function validateCode (c) {
    const str = String(c);
    return str[0] == 1 || str[0] == 2 || str[0] == 3;
}