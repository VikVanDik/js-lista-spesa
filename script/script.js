
// 1. Creo una lista con le cose da comprare
const list = ['sigarette','gin','tonica','limone','ghiaccio']

// 2. Creo l'indice e la costante del messaggio
let i = 0
const message = document.getElementById('list')

// 3. Creo un ciclo while che stampi il messaggio
while (i < list.length) {
  message.innerHTML += `<li>${list[i]}</li>`
  console.log(list[i]);
  i++
}
