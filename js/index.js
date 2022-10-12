console.log("Hello world");

document.getElementById("btn").addEventListener("click", () => {
  const val = document.getElementById("inputVal").value;
  console.log(val);
  document.getElementById("wypiszDane").innerText = val;
});
