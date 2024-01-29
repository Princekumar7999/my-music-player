const music=document.querySelector("audio");
const img= document.querySelector("img");
const play= document.getElementById("play");
const artist= document.getElementById("artist");
const title= document.getElementById("title");
const prev= document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
        name: "Despacito",
        title: "Despacito",
        artist: "FT. DADDY YANKEE",
    },
    {
        name: "perfect",
        title: "Perfect",
        artist: "ED Sheeran",
    },
    {
        name: "Banni",
        title: "Banni",
        artist: "Kapil Jangir",
    },
    {
        name: "laagi-lagan",
        title: "laagi-lagan",
        artist: "Hansraj Raghuvanshi",
    },
    {
        name: "Love-Me-Like-You-Do",
        title: "Love-Me-Like-You-Do",
        artist: "Ellie Goulding",
    },
    {
        name: "Ranjha",
        title: "Ranjha",
        artist: "Jasleen Royal",
    },
    {
        name: "Shape-of-You",
        title: "Shape-of-You",
        artist: "Ed Sheeran",
    },
    {
        name: "until-i-found-you",
        title: "until-i-found-you",
        artist: "Stephen Sanchez",
    },
    {
        name: "Emotional_Atyachaar",
        title: "Emotional_Atyachaar",
        artist: "Band Master Rangeela",
    },
    {
        name: "Immigrant",
        title: "Immigrant",
        artist: "Led Zeppelin",
    },
    {
        name: "mera_mann_kehne_laga",
        title: "mera_mann_kehne_laga",
        artist: "Rashid Khan",
    },
    {
        name: "Numb-Little-Bug",
        title: "Numb-Little-Bug",
        artist: " Em Beihold",
    },
    {
        name: "Thousand_Years",
        title: "Thousand_Years",
        artist: "Christina Perri",
    },
    {
        name: "until-i-found-you",
        title: "until-i-found-you",
        artist: "Stephen Sanchez",
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
    img.src="images/"+songs.name+".jpeg";
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
