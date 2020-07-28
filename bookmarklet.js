# raw js

const playButton = document.querySelector(".modal-content .glyphicon-play");
const audioURL = location.protocol + "//" + location.hostname + ":" + location.port + playButton.parentNode.getAttribute("href") + "?vcodec=none&acodec=mp3";
window.open(audioURL);

# bookmarklet js
javascript:void%20function(){const%20a=document.querySelector(%22.modal-content%20.glyphicon-play%22),b=location.protocol+%22//%22+location.hostname+%22:%22+location.port+a.parentNode.getAttribute(%22href%22)+%22%3Fvcodec=none%26acodec=mp3%22;window.open(b)}();
