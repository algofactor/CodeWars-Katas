function charFreq(m) {
    let obj = {};
    for(let i = 0; i < m.length; i++){
      let spl = m.split('').sort();
      let filt = spl.filter(e => e == m[i]);
      obj[m[i]] = filt.length;
    }
    return obj;
}