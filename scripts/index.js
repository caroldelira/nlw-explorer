
function criarCard(data, dia, jogos) {
    return `
    <div class="card">
        <h2>${data} <span>${dia}</span></h2>
        <ul>
            ${jogos}
        </ul>
    </div>
    `
  };

function criarJogos(time1, time2, hora) {
    return `
    <li>
        <img src="./assets/logo-${time1}.svg" alt="">
        <span class="time">${time1}</span>
        <strong>${hora}</strong>
        <img src="./assets/logo-${time2}.svg" alt="">
        <span class="time">${time2}</span>
    </li>
    `
  };

var corpo = document.getElementById("corpo")

function mudarVerde(valor){
    
    valor = document.getElementById("btnCorVerde").value
    corpo.classList.remove("azul", "amarelo")
    corpo.classList.add(valor)
}
function mudarAmarelo(valor){
    
    valor = document.getElementById("btnCorAmarelo").value
    corpo.classList.remove("azul", "verde")
    corpo.classList.add(valor)
}
function mudarAzul(valor){
    
    valor = document.getElementById("btnCorAzul").value
    corpo.classList.remove("amarelo", "verde")
    corpo.classList.add(valor)
}

document.querySelector('#cards').innerHTML = 
    criarCard ('22/11', 'terça',
        criarJogos ('argentina', 'arabia saudita', '07:00')) +
    criarCard ('23/11', 'quarta',
        criarJogos ('espanha', 'costa rica', '13:00')) +
    criarCard ('24/11', 'quinta',
        criarJogos ('uruguai', 'coreia do sul', '10:00') +
        criarJogos ('portugal', 'gana', '13:00') +
        criarJogos('brasil', 'servia', '16:00')
    ) +
    criarCard ('26/11', 'sábado', 
        criarJogos ('argentina', 'mexico', '16:00')) +
    criarCard ('27/11', 'domingo', 
        criarJogos ('espanha', 'alemanha', '16:00')) +
    criarCard('28/11', 'segunda', 
        criarJogos('coreia do sul', 'gana', '10:00') +
        criarJogos('brasil', 'suica', '13:00') +
        criarJogos('portugal', 'uruguai', '16:00')
    ) +
    criarCard ('30/11', 'quarta', 
        criarJogos ('polonia', 'argentina', '16:00')) +
    criarCard ('01/12', 'quinta', 
        criarJogos ('espanha', 'japao', '16:00')) +
    criarCard('02/12', 'sexta', 
        criarJogos('portugal', 'coreia do sul', '12:00') + 
        criarJogos('uruguai', 'gana', '12:00') + criarJogos('brasil', 'camaroes', '16:00')
    );


