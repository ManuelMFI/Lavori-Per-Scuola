function genera() {
  // crea un array con 100 numeri casuali tra -100 e 100
  let numeri = [];
  for (let i = 0; i < 100; i++) {
    numeri.push(Math.floor(Math.random() * 201) - 100);
  }

  // calcola media, massimo e minimo
  let somma = 0;
  let max = numeri[0];
  let min = numeri[0];

  for (let i = 0; i < numeri.length; i++) {
    somma += numeri[i];
    if (numeri[i] > max) max = numeri[i];
    if (numeri[i] < min) min = numeri[i];
  }

  let media = somma / numeri.length;

  // trova i 50 numeri più grandi (modo semplice)
  let top50 = [];
  let copia = [...numeri]; // copio l'array per non rovinarlo

  for (let i = 0; i < 50; i++) {
    // trovo il numero più grande rimasto
    let massimo = copia[0];
    let posizione = 0;
    for (let j = 1; j < copia.length; j++) {
      if (copia[j] > massimo) {
        massimo = copia[j];
        posizione = j;
      }
    }
    top50.push(massimo);        // aggiungo il massimo trovato
    copia.splice(posizione, 1); // lo tolgo dall'array copia
  }

  // mostra risultati
  document.getElementById("risultati").innerHTML =
    "Media: " + media.toFixed(2) + "<br>" +
    "Massimo: " + max + "<br>" +
    "Minimo: " + min;

  for (let i = 0; i < numbers.length; i++) {
    const div = document.createElement('div');
    div.textContent = numeri[i];
    document.getElementById("tutti").appendChild(div);
}

for (let i = 0; i < numbers2.length; i++) {
    const div = document.createElement('div');
    div.textContent = top50[i];
      document.getElementById("top50").appendChild(div);
}
}