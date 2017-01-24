var htmlGirl = document.getElementById('girl-image');
var containerGirl = document.getElementById('girl-container');

girl = {
  tolerance: 5,
  interest: 4
}

names = [
  'Amy',
  'Blondie',
  'Edith',
  'Janis',
  'Nancy',
  'Tammi'
]

MOODS = {
  ':)': 0,
  '¬¬': 1,
  ':@': 2,
  ':D': 3,
  ':#': 4,
  ':O': 5
}

function setupGirl(){
  var index = Math.floor(Math.random()*names.length)
  girl.name = names[index]
  girl.genres = []
  girl.decades = []
  girl.artists = []
  htmlGirl.onload = function(){
    girl.frameWidth = htmlGirl.width/6;
    containerGirl.style = 'width: '+girl.frameWidth*90/htmlGirl.height+'vh;';
    changeMood(0)
    console.log('loaded')
  }
  htmlGirl.src='imgs/'+girl.name+'.png'
}

function changeMood(index){
  htmlGirl.style = 'object-position: '+Math.round(girl.frameWidth*(-index))+'px 3px';
}