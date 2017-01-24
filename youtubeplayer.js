var youtubePlayer = undefined;

function nextSong(context){
  console.log(youtubePlayer)
  var song = getNextSong()
  context.playing = song
  context.relatedB = songs[shuffle(getSongsBySongArtist(song))[0]]

  youtubePlayer.loadVideoById(song.id, song.second)
  youtubePlayer.playVideo()
  var answers = getSimilarSongs(song)
  console.log(answers)
  answers = arrayToSongs(shuffle(answers))
  console.log(answers)
  renderQuestionOptions(question.a0, answers, context)
}


function onYouTubeIframeAPIReady(){
  var e = document.getElementById("youtube-audio");
  var t = document.createElement("img");
  t.setAttribute("id","youtube-icon");
  t.style.cssText="cursor:pointer;cursor:hand";
  e.appendChild(t);
  var a = document.createElement("div");
  a.setAttribute("id","youtube-player");
  e.appendChild(a);
  
  var done = false
  var volume = 100
  var points = 0
  youtubePlayer = new YT.Player("youtube-player", {
    height: "0",
    width: "0",
    videoId: "gzeOWnnSNjg",
    playerVars: {
      autoplay: e.dataset.autoplay,
      loop: e.dataset.loop
    }, 
    
    events: {
      onReady: function(e){
        startPlaying()
      },
      onStateChange: function(e){
        if(youtubePlayer.getPlayerState() == YT.PlayerState.PLAYING){
          notifySongStarted()
          return
        }else if(youtubePlayer.getPlayerState() == 0){
          nextSong({girl:girl})
        }
      }
    }
  })
}

setTimeout(function(){
  if(!youtubePlayer){
    onYouTubeIframeAPIReady()
  }
}, 5000)