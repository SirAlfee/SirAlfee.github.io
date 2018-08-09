var Song = document.getElementById('NewMusic_SongPlaying')
var Verify = 1
function playAlbum() {
  if (Song.paused) {
    Song.play();
    document.getElementById("Play_Pause_Song").setAttribute("src", "Images/Pause.png");
  } else {
    Song.pause();
    document.getElementById("Play_Pause_Song").setAttribute("src", "Images/play.png");
  }

}


function Nav_Bar_open() {
  console.log(Verify + 1);
  document.getElementById("Nav_Bar").innerHTML = '<img id="Nav_Bar_Button_IMG_CLOSE" onclick="Nav_Bar_close()" height="40px" src="Images/Nav_Bar_Button_Close_IMG.png"> <a href="#">Home</a> <a href="#">Store</a> <a href="#">Songs</a> <a href="#">About Us</a>'
  document.getElementById("Nav_Bar").style.width = 250
  document.getElementById("Nav_Bar").style.left = 0
  return Verify
}

function Nav_Bar_close() {
  console.log(Verify + 1);
  document.getElementById("Nav_Bar").innerHTML = ''
  document.getElementById("Nav_Bar").style.width = 0
  document.getElementById("Nav_Bar").style.left = 0
  return Verify
}
