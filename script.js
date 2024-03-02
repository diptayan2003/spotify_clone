console.log("welcome to musizo");
//initialize the variable
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let MyProgressBar=document.getElementById('MyProgressBar');
let gif=document.getElementById('gif');

let songsItems=Array.from(document.getElementsByClassName('songitem'));
//name of the song file path coverpath is cover the img
let songs=[
    {songName: "Mortals",filepath: "1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Huma-Huma",filepath: "2.mp3",coverPath:"covers/2.jpg"},
    {songName: "Different Heaven ",filepath:"3.mp3",coverPath:"covers/3.jpg"},
    {songName: "Tonight-feat ",filepath: "4.mp3",coverPath:"covers/4.jpg"},
    {songName: "Rabba ",filepath: "5.mp3",coverPath:"covers/5.jpg"},
    {songName: "Bhula Dena ",filepath: "6.mp3",coverPath:"covers/6.jpg"},
]
//event listerner
songsItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})
// audioElement.play();
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
    }

)
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');

progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
// console.log(progress);
MyProgressBar.value=progress;
})
MyProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = MyProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
