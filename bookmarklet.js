# raw js

const playButton = document.getElementsByClassName("glyphicon-play");
const audioURL = location.protocol + "//" + location.hostname + ":" + location.port + playButton[0].parentNode.getAttribute("href") + "?vcodec=none&acodec=mp3";
window.open(audioURL);

# bookmarklet js
javascript:(function()%7Bconst%20playButton%20%3D%20document.getElementsByClassName(%22glyphicon-play%22)%3Bconst%20audioURL%20%3D%20location.protocol%20%2B%20%22%2F%2F%22%20%2B%20location.hostname%20%2B%20%22%3A%22%20%2B%20location.port%20%2B%20playButton%5B0%5D.parentNode.getAttribute(%22href%22)%20%2B%20%22%3Fvcodec%3Dnone%26acodec%3Dmp3%22%3Bwindow.open(audioURL)%7D)()

