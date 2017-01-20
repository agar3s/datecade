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

function setupGirl(){
  var index = Math.floor(Math.random()*names.length)
  girl.name = names[index]
  girl.genres = []
  girl.decades = []
  girl.artists = []
}