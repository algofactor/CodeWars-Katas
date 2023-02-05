function bump(x) {
  return x.split("").filter((e) => e == "n").length <= 15
    ? "Woohoo!"
    : "Car Dead";
}
