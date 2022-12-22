function removeSmallest(nums) {
  const min = Math.min(...nums);
  const idx = nums.indexOf(min);
  
  return nums.filter( (el, i) => i !== idx );
}