function yearDays(year)
{
  if((year%400) && !(year%100)) return `${year} has 365 days`;
  else if(year%4) return `${year} has 365 days`;
  else return `${year} has 366 days`
}