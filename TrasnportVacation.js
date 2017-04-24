function rentalCarCost(d) {
  var sum = 0; 
for (i = 1; i <= d; i++) {
    sum += 40;
}
if (d >= 7) {
sum = sum - 50;
}
else if (d >= 3) {
sum = sum - 20;
}

return sum;
}
