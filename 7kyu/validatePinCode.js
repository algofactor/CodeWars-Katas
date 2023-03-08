function validatePIN(pin) {
  const isPin =
    pin.split('').every(e => isFinite(Number.parseInt(e))) &&
    (pin.length === 4 || pin.length === 6);
  return isPin;
}
