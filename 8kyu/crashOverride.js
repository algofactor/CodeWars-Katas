function aliasGen(a,b){
    // Code Here
  const fFN = a[0];
  const fSN = b[0];
  const hackerName = `${firstName[fFN.toUpperCase()]} ${surname[fSN.toUpperCase()]}`;
  
  return hackerName.includes('undefined') ? `Your name must start with a letter from A - Z.` : hackerName;
}