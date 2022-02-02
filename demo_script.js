function update_clock() {
  const d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  let clock = h + ":" + m + ":" + s;
  document.getElementById("clock").innerHTML = clock;
  setTimeout(update_clock,1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
