class Player {
    arr = [{ path: './assets/music/song1.mp3', artist: 'Mosquito Song', song: 'Queens Of The Stone Age' },
    { path: './assets/music/song2.mp3', artist: 'Artist2', song: 'SONG_2' },
    { path: './assets/music/song3.mp3', artist: 'Artist3', song: 'SONG_3' }];


    bindActoin() {
        const play = document.querySelector('.play');
        const previous = document.querySelector('.previous')
        const next = document.querySelector('.next')
        const audio = document.querySelector('audio');
        const artist = document.querySelector('h1');
        const song = document.querySelector('h2');
        let flag = false;

        let current_index_song = 0

        play.addEventListener('click', () => {
            if (!flag) {
                audio.play();
                flag = true;
                play.style = ' background-image: url(./assets/pause.svg);'
            } else {
                audio.pause()
                flag = false;
                play.style = ' background-image: url(./assets/playBtn.svg);'
            }
        });
        previous.addEventListener('click', () => {
            if (current_index_song === 0) return;
            current_index_song--
            audio.src = this.arr[current_index_song].path;
            artist.textContent = this.arr[current_index_song].artist;
            song.textContent = this.arr[current_index_song].song;
            flag = true;
            audio.play();
            play.style = ' background-image: url(./assets/pause.svg);';

        });

        next.addEventListener('click', () => {
            if (current_index_song === this.arr.length - 1) return;
            current_index_song++
            audio.src = this.arr[current_index_song].path;
            artist.textContent = this.arr[current_index_song].artist;
            song.textContent = this.arr[current_index_song].song;
            flag = true;
            audio.play();
            play.style = ' background-image: url(./assets/pause.svg);';


        })
    }
}
const player = new Player();
player.bindActoin();