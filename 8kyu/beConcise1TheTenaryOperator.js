function describeAge(a) {
    return `You're a(n) ${a<=12 ? 'kid' : a<=17 ? 'teenager' : a<=64 ? 'adult' : 'elderly'}`
}