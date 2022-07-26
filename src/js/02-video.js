import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function saveCurrentTime (e) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(e.seconds))
    console.log(e.seconds)
}

player.on('timeupdate', throttle(saveCurrentTime, 1000));
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))