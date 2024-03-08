//capitura toda infomrção do fronte
const title = document.querySelector('.title');
const prev = document.querySelector('.prev');
const playPause = document.querySelector('.playPause');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');
const imagem = document.getElementById('img');
const maximo = document.getElementById('progress');//capitura o valor maxio
console.log(maximo);

//craia o objeto que vai ficra com a lista das musicas e tambem com a pasta
const songListe = [
    {
        path: "/music/Benson Boone - Beautiful Things (Official Music Video)(M4A_128K).mp3",
        songName: "Beautiful Things",
        img: "https://i.gifer.com/origin/46/464c286080ca94f58d2edea0792f7e68.gif"
    }
];
/*------- parte para fazer a nome da musica biscas---------- */
function pisca(i){
    caio.innerHTML=`
  <style type="text/css">
   #a${i}{
    color:#F15;
    animation: piscada 2.5s infinite;
   }
   </style>
    `
   
   
}
let song_Playing = false;
//play da musica
function playSong() {
    song_Playing = true;
    audio.play();
    playPause.classList.add('active');//adiciona o efeito de  de tocar 
    imagem.classList.add('roda');
    playPause.innerHTML = '<ion-icon style="background: #fff;" name="pause-outline">||</ion-icon>';//muda o icone de estado da musica 
}

//pause da musica
function pauseSong() {
    song_Playing = false;
    audio.pause();
    
    playPause.classList.remove('active');// remove o efeito de ta tocando
    imagem.classList.remove('roda');
    playPause.innerHTML = '<ion-icon style="background: #fff;" name="play-outline">|></ion-icon>';//muda o icone de estado da musica 
}

//coloca o evento de pausa e dar play na musica 
playPause.addEventListener("click", () => (song_Playing ? pauseSong() : playSong()));

//adicona os eventos do js na html ou seja  imagem e os uadio e o nome da mussica
function lodSong(songListe) {
    title.textContent = songListe.songName;
    audio.src = songListe.path;
    imagem.src = songListe.img; 
  
   
}
let i = 0;

lodSong(songListe[0])
pisca(0)
//esta função que faz a musica ir pra tras no objeto
function prevSong() {
    i--;
    if (i < 0) {
        i = songListe.length - 1;
    }
    lodSong(songListe[i]);//seta musica n apossição desejada
    pisca(i)
    playSong();//fza a musica roda depois do que ela e passada pra fente 
}


//esta função que faz a musica ir pra FRENTE no objeto
function nextSong() {
    i++;
    if (i > songListe.length - 1) {
        i = 0;
    }
    lodSong(songListe[i]);//seta musica n apossição desejada
  
    playSong();//fza a musica roda depois do que ela e passada pra fente   
    pisca(i)
}
prev.addEventListener("click", prevSong);
next.addEventListener("click", nextSong);
console.log(obj.currentTime)
///--------responsalve por capiturar o tempo da apliação das musicas----------------------------------- 
function ca() {
    var obj = document.getElementById("audio1");
    progresss.innerHTML = ` <div class="progress-bar" role="progressbar" style="width:${(obj.currentTime * 100) / obj.duration}%"aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>`;


    // resposavel por comverter  tudo o padrão normal de horas
    function SecToSr(sec) {
        sec = Math.floor(sec);
        let horas = Math.floor(sec / 3600);
        let minutos = Math.floor((sec - (horas * 3600)) / 60);
        let segundos = sec - (horas * 3600) - (minutos * 60);

        if (horas < 10) horas = "0" + horas;
        if (minutos < 10) minutos = "0" + minutos;
        if (segundos < 10) segundos = "0" + segundos;

        let tempo = horas + ':' + minutos + ':' + segundos;
        return tempo;

    }
    if (SecToSr(obj.currentTime) === SecToSr(obj.duration)) {
        //reomoveo efeito de roda do sistema
        imagem.classList.remove('roda');
        //faza a musica ir pra frente de forma automatica 
        nextSong()

    }

    // colocra o tempo da muisca nos P de baixo da parra de peogresso 

    atual.innerHTML = `${SecToSr(obj.currentTime)}`;
    console.log(SecToSr(obj.currentTime));
    totalT.innerHTML = `${SecToSr(obj.duration)}`;
};
//----------------------------------isso aqui o teste  de musica-----------------------------
function songName(songListe) {
    return ` <img  id="img" class="" src="${songListe.img}" >` + songListe.songName;
}

var here = 0;

/*function geradorDiv(i) {

    let html = `<ul class="nome"id="nome"> `
    for (let cont = 0; cont < i; cont++) {
        here += 1;
        html += `<li id="a${cont}" onclick="lodSong(songListe[${cont}]),playSong(),pisca(${cont})" class="a${cont}">${songName(songListe[cont])}</li>`
    }

    html += "</ul>"
    return html;

}*/
console.log(here);

here = songListe.lengt * 4;
play.style.height = "65" + here + "ch";
nomeMu.innerHTML = geradorDiv(songListe.length)


 setInterval(ca, 1000);