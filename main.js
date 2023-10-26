const keySongs = [
    {
        key: 1,
        song: 'ppp',
        down: false
    },
    {
        key: 2,
        song: 'mmm',
        down: false
    },
    {
        key: 3,
        song: 'kkk',
        down: false
    },
    {
        key: 4,
        song: 'bbb',
        down: false
    },
    {
        key: 5,
        song: 'boto',
        down: false
    },
    {
        key: 6,
        song: 'toim',
        down: false
    },
    {
        key: 7,
        song: 'psh',
        down: false
    },
    {
        key: 8,
        song: 'tic',
        down: false
    },
    {
        key: 9,
        song: 'tom',
        down: false
    }
]

function tocaSom(audioElement) {
    audioElement.currentTime = 0
    audioElement.play()
}

keySongs.forEach(song => {
    let keyElement = document.querySelector(`.tecla_${song.song}`)

    song.keyElement = keyElement
    song.audioElement = document.getElementById(`som_tecla_${song.song}`)

    keyElement.addEventListener('click', () => {
        tocaSom(song.audioElement)
    })   

})

document.onkeydown = (event) => {
    const key = event.key
    const keySong =  keySongs.find(keySong => keySong.key == key)
    
    if(keySong) {

        keySong.keyElement.classList.add('ativa')

        if(!keySong.down) {
            tocaSom(keySong.audioElement)
        }
    
        keySong.down = true

    }

}

document.onkeyup = (event) => {
    const key = event.key
    const keySong =  keySongs.find(keySong => keySong.key == key)
    
    if(keySong) {
    
        keySong.keyElement.classList.remove('ativa')
        keySong.down = false

    }

}
