function load() {
  document.getElementById('list_archives').style.visibility = "hidden"
}


var Verify = 1


function Nav_Bar_open() {
  console.log(Verify + 1);
  document.getElementById("Nav_Open").src = ''
  document.getElementById("Nav_Close").src = 'Media/IMG/Nav_Bar_Button_Close_IMG.png'
  document.getElementById("Nav_Open").style.height = '0px'
  document.getElementById("Nav_Open").style.width = '0px'
  document.getElementById("Nav_Close").style.height = '40px'
  document.getElementById("Nav_Close").style.width = '40px'
  document.getElementById('list_archives').style.visibility = "visible"
  document.getElementById("list_archives").style.width = '30%'
  document.getElementById("list_archives").style.background = 'black'
  return Verify
}
function Nav_Bar_close() {
  console.log(Verify + 1);
  document.getElementById("Nav_Open").src = 'Media/IMG/Nav_Bar_Button_Open_IMG.png'
  document.getElementById("Nav_Close").src = ''
  document.getElementById("Nav_Open").style.height = '40px'
  document.getElementById("Nav_Open").style.width = '40px'
  document.getElementById("Nav_Close").style.height = '0px'
  document.getElementById("Nav_Close").style.width = '0px'
  document.getElementById("list_archives").style.visibility = "hidden"
  document.getElementById("list_archives").style.width = '0%'
  document.getElementById("list_archives").style.background = ''
  return Verify
}
