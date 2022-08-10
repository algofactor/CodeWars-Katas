//return price without vat
function excludingVatPrice(price){
    const res = (price/1.15).toFixed(2);
    return price != null ? Number(res) : -1;
}