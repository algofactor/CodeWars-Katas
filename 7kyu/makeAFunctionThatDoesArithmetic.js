function arithmetic(a, b, op) {
  return op === "add"
    ? a + b
    : op === "subtract"
    ? a - b
    : op === "multiply"
    ? a * b
    : a / b;
}
