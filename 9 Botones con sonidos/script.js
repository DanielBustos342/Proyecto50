const sounds = ['Opening1','Opening2','Opening3','Opening4','Opening5','Opening6','Opening7','Opening8','Opening9','Opening10','Opening11','Opening12','Opening13'];

sounds.forEach(sound => {
    const btn = document.createElement('button'); //se crea un elemento boton
    btn.classList.add('btn') //se agrega una clase CSS llamada btn

    btn.innerText = sound;//se establece el texto igual al nombre del sonido

    btn.addEventListener('click', () => { // se le agrega el evento click
        stopSongs();

        document.getElementById(sound).play();
    })
    document.getElementById('buttons').appendChild(btn)    
})
    function stopSongs() {
        sounds.forEach(sound => {
            const song = document.getElementById(sound)

            song.pause();
            song.currentTime = 0;
        })
    }