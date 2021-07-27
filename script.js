document.getElementById("simp-calculate").addEventListener("click", () => {
  document.getElementById("simp").textContent =
    (document.getElementById("simp-principal").value *
      document.getElementById("simp-rate").value *
      document.getElementById("simp-time").value) /
    100;
});

document.getElementById("comp-calculate").addEventListener("click", () => {
  const p = +document.getElementById("comp-principal").value;
  const r = +document.getElementById("comp-rate").value;
  const t = +document.getElementById("comp-time").value;
  const n = +document.getElementById("comp-no").value;

  document.getElementById("comp").textContent =
    p * (1 + r / (n * 100)) ** (n * t) - p;
});
