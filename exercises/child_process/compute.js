function longComputation() {
  let sum = 0;
  for (let i = 0; i < 1e10; i++) {
    sum += i;
  }
  return sum;
}

process.on("message", (req, res) => {
  const suma = longComputation();
  console.log("realizo la suma! ", suma);
  res.end(suma);
});
