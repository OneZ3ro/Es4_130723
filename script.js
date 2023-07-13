const tabella = document.getElementById("tabella");

const addCell_and_btn = () => {
  const bottone = document.createElement("button");
  bottone.innerText = "Tenta la fortuna!";
  for (let i = 0; i < 76; i++) {
    const cella = document.createElement("div");
    cella.innerText = i + 1;
    cella.style.display = "inline-block";
    cella.className = "cella";
    tabella.appendChild(cella);
  }

  tabella.appendChild(bottone);
};
addCell_and_btn();
