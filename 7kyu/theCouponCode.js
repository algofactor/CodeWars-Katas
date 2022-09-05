function checkCoupon(eCode, cCode, cDate, exDate){
    console.log(eCode, cCode, cDate, exDate);
    return eCode === cCode && Date.parse(cDate) <= Date.parse(exDate);
}