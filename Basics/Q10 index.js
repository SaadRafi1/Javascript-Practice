var mul;
document.getElementById("multiply").onclick = function () {
  mul =
    document.getElementById("first").value *
    document.getElementById("second").value;
  document.getElementById(
    "multip"
  ).textContent = `Multiplication Answer is  ${mul}`;
};

var divi;
document.getElementById("divide").onclick = function () {
  divi =
    document.getElementById("first").value /
    document.getElementById("second").value;
  document.getElementById(
    "division"
  ).textContent = `Division Answer is  ${divi}`;
};
