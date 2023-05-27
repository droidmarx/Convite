const form = document.querySelector("form");
const loginBtn = document.querySelector("#login-btn");

const users = [
  { password: "Tayna" },
  { password: "420919703" },
  { password: "Santos" },
  { password: "20671280" },
  { password: "130612121" },
  { password: "234989294" },
  { password: "194152649" },
  { password: "142790138" },
  { password: "201188661" },
  { password: "578929624" },
  { password: "578929624" },
  { password: "400681274" },
  { password: "629329242" },
  { password: "488871463" },
  { password: "95710474" },
  { password: "410711536" },
  { password: "369571952" },
  { password: "244567992" },
  { password: "222724729" },
  { password: "532525036" },
  { password: "47914641x" },
  { password: "421378086" },
  { password: "488956602" },
  { password: "16573526" },
  { password: "30030379865" },
  { password: "31069139831" },
  { password: "343791778" },
  { password: "596715687" },
  { password: "596716072" },
  { password: "630321152" },
  { password: "285468856" },
  { password: "654441339" },
  { password: "279498093" },
  { password: "689168603" },
  { password: "592281450" },
  { password: "349950179" },
  { password: "276292170" },
  { password: "59542176" },
  { password: "44539090801" },

  // adicionar mais usuarios
];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const password = form.password.value.trim();

  let authenticated = false;
  for (let user of users) {
    if (user.password === password) {
      authenticated = true;
      break;
    }
  }

  if (authenticated) {
    document.body.classList.add("blur");
    setTimeout(function () {
      window.location.href = "./portal.html";
    }, 500);

    let mathRandom = Math.random().toString(16).substr(2);
    let token = mathRandom + mathRandom;

    localStorage.setItem("token", token);
  } else if (username === "" || password === "") {
    alert("Por favor, insira um nome de usuário e senha");
  } else {
    alert("Usuário ou senha incorretos");
    form.reset();
  }
});
