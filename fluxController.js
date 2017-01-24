var htmlSong = document.getElementById('song')
var discussion = document.querySelector('#discussion p')
var girl = {}
var context = {girl:girl}

function notifySongStarted(){
  console.log('started!')
  var question = questions.a0
  var description = question.descriptions[Math.floor(Math.random()*question.descriptions.length)]
  renderInBox('Pensando', '<span class="thought">'+description+'</span>', function(){
    var answers = getSimilarSongs(context.playing)
    answers = arrayToSongs(shuffle(answers))
    renderQuestionOptions(question, answers, context)
  })
}

function startPlaying(){
  setupGirl()
  nextSong(context)
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

var renderText = false
var fullText = ''
function renderInBox(person, text, callback){
  discussion.innerHTML = person+': ';
  discussion.innerHTML = discussion.innerHTML+' '+text;
  setTimeout(function(){
    callback()
  }, 3000)
}

function loop(){
  if(renderText){

  }
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

function renderAnswer(question, context, callback){
  var index = Math.floor(Math.random()*question.variations.length)
  var sentence = question.variations[index]
  renderInBox('Yo', replaceContext(sentence, context), callback)
}

// options are array of sentences.
function renderTalkOptions(options, context){
  options.forEach(function(value, index){
    var button = document.getElementById('option'+index)
    var answer = replaceContext(value.sentence, context)
    button.innerHTML = (index+1)+") "+answer
    button.onclick = function(){
      disableClicks()
      renderInBox('Yo', answer, function(){
        handleReaction(reactions[value.reaction], context)
      })
    }
  })
}

// options are an array of songs
function renderQuestionOptions(question, options, context){
  var reaction = reactions[question.reaction]
  options.forEach(function(value, index){
    var button = document.getElementById('option'+index)
    var answer = value.name
    button.innerHTML = (index+1)+") "+answer
    button.onclick = function(){
      disableClicks()
      updateSelectedSong(context, value)
      renderAnswer(question, context, function(){
        handleReaction(reaction, context, context.selected.index == context.playing.index)
      })
    }
  })
}

// a reaction object, context object, and good or bad answer
function handleReaction(reaction, context, good){
  var key = 'good'
  console.log(reaction)
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

