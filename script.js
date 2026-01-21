AOS.init();

const btn = document.getElementById("darkModeBtn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const hamburguer = document.getElementById("hamburguer");
const menu = document.getElementById("menu");

hamburguer.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});

function copiarPix() {
  const chave = document.getElementById("pixKey").innerText;

  navigator.clipboard.writeText(chave).then(() => {
    alert("Chave Pix copiada com sucesso!");
  });
}

