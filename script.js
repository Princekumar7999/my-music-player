const music=document.querySelector("audio");
const img= document.querySelector("img");
const play= document.getElementById("play");
const artist= document.getElementById("artist");
const title= document.getElementById("title");
const prev= document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
        name: "thapa-1",
        title: "Despacito",
        artist: "FT. DADDY YANKEE",
    },
    {
        name: "thapa-2",
        title: "Perfect",
        artist: "ED Sheeran",
    }
]
let isPlaying=false;

//for play function
const playMusic = () => {
    isPlaying=true;
    music.play();
   
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
}

//for pause function
const pauseMusic=() => {
    isPlaying=false;
    music.play();
   
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
}

play?.addEventListener("click",()=> {
   
    isPlaying ? pauseMusic() : playMusic();
})

//changing the music data
const loadSong=(songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src="music/"+songs.name+".mp3";
    img.src="images/"+songs.name+".jpg";
};
songIndex=0;
//loadSong(songs[1]);
const nextSong = () =>{
    songIndex=(songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
}

const prevSong = () =>{
    songIndex=(songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
}
next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);
