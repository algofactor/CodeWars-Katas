function createPhoneNumber(numbers){
  const first = numbers.slice(0,3).join('');
  const second = numbers.slice(3,6).join('');
  const third = numbers.slice(6).join('');
  
  return `(${first}) ${second}-${third}`
}