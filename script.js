const tabella = document.getElementById("tabella");
const numeri_tombola = [];

const estrazione_num = () => {
  const ul = document.getElementById("lista-lucky-num");
  const span_num_random = document.createElement("span");
  const li = document.createElement("li");
  const random_num = Math.floor(Math.random() * numeri_tombola.length) + 1;

  li.innerText = "Numero fortunato: ";
  span_num_random.innerText = `${random_num}`;

  const span_num = parseInt(span_num_random.innerText);
  const div_num_uscito = document.getElementById(`cella${span_num}`);

  div_num_uscito.classList.add("background-cella");

  console.log(div_num_uscito);
  console.log(random_num);

  ul.appendChild(li);
  li.appendChild(span_num_random);
};

const add_celle_btn_numeriTombola = () => {
  const bottone = document.createElement("button");
  bottone.innerText = "Tenta la fortuna!";
  for (let i = 0; i < 76; i++) {
    const cella = document.createElement("div");
    numeri_tombola[i] = i + 1;

    cella.innerText = numeri_tombola[i];
    cella.className = "cella";
    cella.id = `cella${numeri_tombola[i]}`;
    tabella.appendChild(cella);
  }

  bottone.className = "bottone";
  bottone.onclick = estrazione_num;
  tabella.appendChild(bottone);
};
add_celle_btn_numeriTombola();

const prova = (event) => {
  console.log(event);
};
