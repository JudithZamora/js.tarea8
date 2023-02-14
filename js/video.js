function counter(time){
let minutes = Math.floor(time / 60);
let seconds = Math.floor(time % 60);

if (minutes < 10) minutes =  `0${minutes}`;
if (seconds < 10) seconds =  `0${seconds}`;

return `${minutes}:${seconds}`
}

const video= document.querySelector("video");
const play= document.getElementById("play");
const pausa= document.getElementById("pause");
const screen= document.getElementById("max");
const vol= document.getElementById("vol");
const time= document.getElementById("timer");
const pick= document.getElementById("small");
const mute= document.getElementById("mute");
const current= document.getElementById("current");
const duracion= document.getElementById("duracion");

duracion.textContent = counter(video.duration); 
console.log(video.duration);

video.addEventListener('loadedmetadata', e => {
    duracion.textContent = counter(video.duration);
});


play.addEventListener('click', e =>{
    video.play();
      /*  video.currentTime= 0;*/
    });

pausa.addEventListener('click', e =>{
    video.pause();
});

max.addEventListener('click', e =>{
    video.requestFullscreen();
});

vol.addEventListener('change', e => {
    video.volume= vol.value / 100;
});

video.addEventListener('timeupdate', e => {
    time.value = Math.floor(video.currentTime * 100 / video.duration);
    current.textContent = 
    counter(video.currentTime);
});

time.addEventListener('input', e => {
    video.currentTime = time.value * video.duration / 100
});

pick.addEventListener('click', e => {
    video.requestPictureInPicture();
    video.style.display= 'none';
});
 
video.addEventListener('leavepictureinpicture', e => {
    video.style.display= 'block';
});

mute.addEventListener('click', e => {
    video.muted = !video.muted;
    mute.textContent = video.muted ? 'Unmute' : 'Mute';
});
