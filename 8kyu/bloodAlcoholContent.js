function bloodAlcoholContent(d, w, s, t){
    const a = d.ounces * d.abv;
    const r = (s == 'male') ? 0.73 : 0.66;
    const bac = (a * 5.14/w * r) - (0.015 * t);
    return Number(bac.toFixed(4));
}