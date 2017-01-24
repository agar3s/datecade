var htmlSong = document.getElementById('song')
var discussion = document.querySelector('#discussion p')
var girl = {}

function notifySongStarted(){
  console.log('started!')
  htmlSong.innerHTML = 'Que cancion es esta?'
  document.getElementById('girl').innerHTML = '...'
}

function startPlaying(){
  setupGirl()
  nextSong({girl:girl})
}

function disableClicks(){
  for(var i = 0;i<4;i++){
    boton = document.getElementById('option'+i)
    boton.onclick = function(){}
    boton.innerHTML = ''
  }
}

function replaceContext(sentence, context){
  return sentence.replace('{XXX}', '<span class="song">'+context.selected.name+'</span>')
         .replace('{ZZZ}', '<span class="artist">'+context.selected.artist+'</span>')
         .replace('{XYX}', '<span class="song">'+context.playing.name+'</span>')
         .replace('{ZXZ}', '<span class="artist">'+context.playing.artist+'</span>')
         .replace('{XCX}', '<span class="song">'+context.relatedA.name+'</span>')
         .replace('{XDX}', '<span class="song">'+context.relatedB.name+'</span>')
         .replace('{DECADE}', '<span class="decade">'+context.playing.decade+'\'s</span>')
         .replace('{XZX}', '<span class="song">'+context.relatedC.name+'</span>')
         .replace('{XAX}', '<span class="song">'+context.relatedD.name+'</span>')
         .replace('{XBX}', '<span class="song">'+context.relatedE.name+'</span>')
}

function updateSelectedSong(context, song){
  context.selected = song
  // other song by artist
  context.relatedA = songs[shuffle(getSongsBySongArtist(song))[0]]
  // any other song by decade
  context.relatedC = songs[shuffle(getSongsByDecade(song.decade))[0]]
  // any other song by genre
  context.relatedD = songs[shuffle(getSongsBySongGenre(song))[0]]
  // any other song by year
  context.relatedE = songs[shuffle(getSongsByYear(song.released))[0]]
}

function renderInBox(person, text, callback){
  discussion.innerHTML = person+': '+text;
  setTimeout(function(){
    callback()
  }, 5000)
}

function renderAnswer(question, context, callback){
  console.log(question)
  var index = Math.floor(Math.random()*question.variations.length)
  console.log(index)
  var sentence = question.variations[index]
  console.log(sentence)
  htmlSong.innerHTML = replaceContext(sentence, context)
  renderInBox('Yo', replaceContext(sentence, context), callback)
}

// options are array of sentences.
function renderTalkOptions(options, context){
  options.forEach(function(value, index){
    var button = document.getElementById('option'+index)
    var answer = replaceContext(value.sentence, context)
    button.innerHTML = answer
    button.onclick = function(){
      disableClicks()
      htmlSong.innerHTML = answer
      setTimeout(function(){
        handleReaction(reactions[value.reaction], context)
      }, 1000)
    }
  })
}

// options are an array of songs
function renderQuestionOptions(question, options, context){
  var reaction = reactions[question.reaction]
  options.forEach(function(value, index){
    var button = document.getElementById('option'+index)
    var answer = value.name
    button.innerHTML = answer
    button.onclick = function(){
      disableClicks()
      console.log(context)
      updateSelectedSong(context, value)
      console.log(context)
      renderAnswer(question, context, function(){
        handleReaction(reaction, context, context.selected.index == context.playing.index)
      })
    }
  })
}

// a reaction object, context object, and good or bad answer
function handleReaction(reaction, context, good){
  var key = 'good'
  if(reaction.type=='debate'){
    // up or down votes depending on good
    key = good?'good':'bad'
  }
  var dialogues = reaction[key]
  var moods = Object.keys(dialogues)
  var indexMood = Math.floor(Math.random()*moods.length)
  var mood = dialogues[moods[indexMood]]

  var indexAnswer = Math.floor(Math.random()*mood.length)
  var answer = mood[indexAnswer]
  // render girl answer
  //document.getElementById('girl').innerHTML = replaceContext(answer.sentence, context)
  changeMood(MOODS[answer.mood])
  renderInBox(girl.name, replaceContext(answer.sentence, context), function(){
    handleTrigger(answer.trigger, context)
  })
}


function handleTrigger(triggerKey, context){
  if(triggerKey=='question'){
    // nextsong va a tener que setear el contexto
    nextSong(context)
    return
  }
  if(triggerKey[0]=='t'){
    //lets talk 
    var options = talk[triggerKey].options
    renderTalkOptions(options, context)
    return
  }
  if(triggerKey[0]=='?'){
    nextSong(context)
    return
  }
}

