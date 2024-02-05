class Player {
    arr = [{
        path: './assets/music/Forestella__Despacito.mp3',
        artist: 'Forestella',
        song: 'Despacito'
    },

    {
        path: './assets/music/Forestella__Bad_Romance.mp3',
        artist: 'Forestella',
        song: 'Bad_Romance'
    },
    {
        path: './assets/music/Forestella__Shape_of_you.mp3',
        artist: 'Forestella',
        song: 'Shape_of_you'
    }];


    bindActoin() {
        const play = document.querySelector('.play');
        const previous = document.querySelector('.previous')
        const next = document.querySelector('.next')
        const audio = document.querySelector('audio');
        const artist = document.querySelector('h1');
        const song = document.querySelector('h2');
        const like = document.querySelector('.like');
        // const progressBar = document.querySelector('.progress_bar');
        // const progress = document.querySelectorK('.progress');
        // const time = document. querySelector('time');

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
            play.style = ' background-image: url(./assets/pause.svg)';
        });

        next.addEventListener('click', () => {
            if (current_index_song === this.arr.length - 1) return;
            current_index_song++
            audio.src = this.arr[current_index_song].path;
            artist.textContent = this.arr[current_index_song].artist;
            song.textContent = this.arr[current_index_song].song;
            flag = true;
            audio.play();
            play.style = ' background-image: url(./assets/pause.svg)';


        })
        like.addEventListener('click', () => {
            if (!flag) {
                like.style = 'background-image: url(./assets/favBtn.svg)';
                flag = true;
            } else {
                like.style = 'background-image: url(./assets/Icon.svg)';
                flag = false;
            }
        })

    }
}
const player = new Player();
player.bindActoin();