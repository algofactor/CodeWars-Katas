"use strict";

function wave(str) {
  // Code here
  const arr = Array(str.length).fill(str.toLowerCase());

  const result = [];
  for (const [i, word] of [...arr.entries()]) {
    let wave = word.split("");
    if (wave[i] === " ") continue;
    wave[i] = wave[i].toUpperCase();
    wave = wave.join("");
    result.push(wave);
  }

  console.log(result);
  return result;
}
