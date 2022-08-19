solution= (mm1, mm2, m1, m2, v, T) => {
    T += 273.15;
    const R = 0.082
    const pTotal = ((m1/mm1) + (m2/mm2)) * (R*T) * (1/v);
    
    return pTotal;
}