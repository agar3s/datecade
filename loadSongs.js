var fs = require('fs')
var buffer = fs.readFileSync('songs.tsv', 'utf-8')
var songs = buffer.split('\n').map(function(song){
  song = song.split('\t')
  return {
    id: song[0],
    artist: song[1].split(',').map(function(data){return data.trim()}),
    name: song[2],
    second: parseInt(song[3]),
    released: parseInt(song[4]),
    genre: song[5].split(',').map(function(data){return data.trim()})
  }
})

console.log("songs = "+songs)