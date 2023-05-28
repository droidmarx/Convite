const form = document.querySelector("form");
const loginBtn = document.querySelector("#login-btn");

const users = [
  { username: "Patricia", password: "458328789" },
  { username: "Diego", password: "420919703" },
  { username: "Marcos", password: "20671280" },
  { username: "Petrolina", password: "130612121" },
  { username: "Redivaldo", password: "234989294" },
  { username: "Maria", password: "194152649" },
  { username: "Valdeci", password: "142790138" },
  { username: "Armilda", password: "201188661" },
  { username: "Ana", password: "578929624" },
  { username: "Erica", password: "400681274" },
  { username: "Emerson", password: "629329242" },
  { username: "Ana", password: "488871463" },
  { username: "Cleide", password: "95710474" },
  { username: "Yasmin", password: "410711536" },
  { username: "Guilherme", password: "369571952" },
  { username: "Silvia", password: "244567992" },
  { username: "Ana", password: "532525036" },
  { username: "Lucas", password: "47914641x" },
  { username: "Gabriela", password: "421378086" },
  { username: "Fabio", password: "488956602" },
  { username: "Doralene", password: "16573526" },
  { username: "Wilian", password: "30030379865" },
  { username: "Regina", password: "31069139831" },
  { username: "Fabiana", password: "343791778" },
  { username: "Pedro", password: "596715687" },
  { username: "João", password: "596716072" },
  { username: "Joana", password: "630321152" },
  { username: "Suzana", password: "285468856" },
  { username: "Caio", password: "654441339" },
  { username: "Claudio", password: "279498093" },
  { username: "Raphaela", password: "689168603" },
  { username: "Camila", password: "592281450" },
  { username: "Fabíola", password: "349950179" },
  { username: "Jaciara", password: "276292170" },
  { username: "Cícero", password: "59542176" },
  { username: "Manuella", password: "Manuella" },

  // adicionar mais usuarios
];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = form.username.value.trim();
  const password = form.password.value.trim();

  let authenticated = false;
  for (let user of users) {
    if (user.username === username && user.password === password) {
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

/* ========== typed js  ==========*/

const typed = new Typed(".multiple-text", {
  strings: [
    "Seu Facebook",
    "Seu Twitter",
    "Seu LinkedIn",
    "Seu YouTube",
    "Entre outras midias",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
