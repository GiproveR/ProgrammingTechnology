const date_now = new Date();
console.log(date_now);
console.log(date_now.getFullYear()+1);
const date_NEWYEAR = new Date(date_now.getFullYear()+1, 0, 1);
console.log(date_NEWYEAR);

console.log((date_NEWYEAR-date_now) / (1000 * 60 * 60 * 24));