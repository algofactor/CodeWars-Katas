const isReallyNaN = (val) => {
    return Number.isNaN(val);  // wasn't working as planned :-(
  //   return val === undefined ?  false : Number.isNaN(val);
};