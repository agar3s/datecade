//1- una cancion se selecciona de manera aleatoria
var indexSongs = []
for(var i=0;i<songs.length;i++){
  indexSongs.push(i)
  songs[i].index = i
  songs[i].decade = Math.floor(songs[i].released/10)*10
}
var index = ~~(Math.random()*indexSongs.length)
var song = songs[indexSongs.splice(index, 1)[0]]

// generar distractores
// 1 canciones del mismo artista
// 2 canciones de la misma decada
// 3 canciones del mismo genero
// 4 canciones del mismo anio

// index the songs list
// sample of a song:
/*
{ 
    id: 'WGU_4-5RaxU',
    artist: [ 'Blondie' ],
    name: 'Heart Of Glass',
    second: 0,
    released: 1979,
    genre: [ 'Disco', 'new wave' ]
}
*/
// artist list with songs
var artists = {}
var genres = {}
var years = {}
var decades = {'1900':[],'1910':[],'1920':[],'1930':[],'1940':[],'1950':[],'1960':[],'1970':[],'1980':[],'1990':[], '2000':[]}
songs.forEach(function(song, index){
  song.artist.forEach(function(artist){
    if(!artists[artist]) artists[artist] =[]
    artists[artist].push(index)
  })

  song.genre.forEach(function(genre){
    if(!genres[genre]) genres[genre] =[]
    genres[genre].push(index)
  })


  if(!years[song.released]) years[song.released] =[]
  years[song.released].push(index)

  decades[song.decade].push(index)
})


//query the songs list.
function getSongsBySongArtist(song){
  var songs = []
  song.artist.forEach(function(artist){
    songs = songs.concat(artists[artist])
  })
  return songs
}

function getSongsBySongGenre(song){
  var songs = []
  song.genre.forEach(function(genre){
    songs = songs.concat(genres[genre])
  })
  return songs
}

function getSongsByDecade(decade){
  return decades[decade]
}

function getSongsByYear(year){
  return years[year]
}



function getSimilarSongs(song){
  var songs = [song.index]
  songs = songs.concat(getSongsBySongArtist(song))
  songs = songs.concat(getSongsBySongGenre(song))
  songs = songs.concat(getSongsByDecade(song.decade))
  songs = songs.concat(getSongsByYear(song.released))
  songs = songs.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
  })
  
  songs.splice(songs.indexOf(song.index), 1)
  var returned = [song.index]
  for(var i =0;i<3;i++){
    var index = Math.floor(Math.random()*songs.length)
    returned.push(songs.splice(index, 1)[0])
  }
  return returned
}

function shuffle(songs){
  return songs.sort(function() {
    return .5 - Math.random();
  })
}

function arrayToSongs(songIndexes){
  return songIndexes.map(function(index){
    return songs[index]
  })
}
/*
function getAnswer(type, song){
  type = 'a0'
  var answers = question[type].variations
  var index = Math.floor(Math.random()*answers.length)
  var answer = answers[index]
  return {
    sentence:answer.sentence.replace('{XXX}', song.name),
    reaction: answer.reaction
  }
}
*/
  
function getNextSong(){
  var index = ~~(Math.random()*indexSongs.length)
  var song = songs[indexSongs.splice(index, 1)[0]]
  return song
}

