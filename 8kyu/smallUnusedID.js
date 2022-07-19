function nextId(ids){
    //this will be awesome!
    const sorted = ids.sort((a,z) => a-z);
    const noReps = [...new Set(sorted)];
    
    const n = noReps.find((e,i) => e != i);
    return n ? noReps.indexOf(n) : noReps.length;
}