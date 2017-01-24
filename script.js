question = {
  a0: {
    type: 'name',
    description: 'name of the song by music',
    variations: [
      'Empezamos bien, {XXX} que buena canción!',
      'Uff {XXX}!',
      'Hace mucho que no escuchaba {XXX}.'
    ],
    reaction: 'r0'
  }
}

reactions = {
  r0: {
    type:'debate',
    good: {
      nice: [
        {sentence:'Si, es una de mis canciones favoritas.', trigger:'?', mood:':D'},
        {sentence:'Si, es una de mis canciones favoritas.', trigger:'?', mood:':D'}
      ],
      normal: [
        {sentence:'Si es una buena cancion, pero no mas que {XZX}.', trigger:'?', mood:':)'},
        {sentence:'Es un clasico. Como {XZX}.', trigger:'?', mood:':)'}
      ],
      bad: [
        {sentence:'No tienes mal gusto musical despues de todo.', trigger:'?', mood:'¬¬'},
        {sentence:'Entonces si conoces algo de buena musica.', trigger:'?', mood:'¬¬'}
      ]
    },
    bad: {
      nice: [
        {sentence:'Jajaja, esa no es {XXX} es {XYX}', trigger:'t1',mood:':D'},
        {sentence:'{XXX}? Jamas! es {XYX}, tendre que ensenarte algo de buena musica', trigger:'t1',mood:':D'}
      ],
      normal: [
        {sentence:'No seas tonto, esa no es {XXX} es {XYX}', trigger:'t1',mood:':)'},
        {sentence:'{XXX}? para nada es {XYX}', trigger:'t1',mood:':)'}
      ],
      bad: [
        {sentence:'que tonterias dices? esa no es {XXX}, pense que te gustaba la musica de...', trigger:'?',mood:':O'},
        {sentence:'Definitivamente no es {XXX}, esa cancion es de...', trigger:'?',mood:':O'}
      ]
    }
  },
  r1: {
    type:'talk',
    good: {
      nice: [
        {sentence:'Tu tambien a mi, un poco...', trigger:'t3',mood:':#'},
        {sentence:'Hablas en serio?', trigger:'t2',mood:':#'}
      ],
      normal: [
        {sentence:'Por favor... Me sonrojas', trigger:'question',mood:':#'},
        {sentence:'Jajajaja', trigger:'question',mood:':#'}
      ],
      bad: [
        {sentence:'...', trigger:'question',mood:'¬¬'},
        {sentence:'Yo creo que te haces el pendejo.', trigger:'question', mood:'¬¬'}
      ]
    }
  },
  r2: {
    type:'talk',
    good: {
      nice: [
        {sentence: 'no me crees?', trigger: 't0',mood:':O'}
      ],
      normal: [
        {sentence: 'estas diciendo que soy una mentirosa?', trigger: 't0',mood:'¬¬'}
      ],
      bad: [
        {sentence: 'segun tu, yo no se nada de musica.', trigger: 't0',mood:':@'}
      ]
    }
  },
  r3: {
    type:'talk',
    good: {
      nice: [
        {sentence: 'Son copias de {ZZZ}.', trigger: 'question',mood:':D'},
        {sentence: 'una que otra canción es similar pero no toda.', trigger: 'question',mood:':)'}
      ],
      normal: [
        {sentence: 'para nada, la musica de los {DECADE} es la mejor', trigger: 'question',mood:':O'}
      ]
    }
  },
  r4: {
    type:'debate',
    good: {
      nice: [
        {sentence: 'Claro {ZZZ} toca {XXX}, pero no. Esa no es la cancion que suena.', trigger: 'question',mood:':D'}
      ]
    },
    bad: {
      normal: [
        {sentence: 'Pues no conoces tanto de {ZZZ} para confundirlos con {ZXZ}.', trigger:'t4',mood:'¬¬'}
      ],
      bad: [
        {sentence: 'De verdad confundes {ZZZ} con {ZXZ}? pense que sabias...', trigger:'t4',mood:':@'}
      ]
    }
  },
  r5: {
    type:'debate',
    good: {
      nice: [
        {sentence: 'estas confundido, si son {ZXZ} pero lo que suena es {XYX}.', trigger: 't5',mood:':D'}
      ]
    },
    bad: {
      normal: [
        {sentence: 'Pues no conoces tanto de {ZZZ} para confundirlos con {ZXZ}.', trigger:'t4', mood:'¬¬'}
      ],
      bad: [
        {sentence: 'De verdad confundes {ZZZ} con {ZXZ}? pense que sabias...', trigger:'t4',mood:':@'}
      ]     
    }
  },
  r6:{
    type:'talk',
    good: {
      nice: [
        {sentence: 'es {XYX} :)', trigger:'question', mood:':D'}
      ],
      normal: [
        {sentence: 'cambias muy facil de parecer.', trigger: 'question',mood:':)'}
      ]
    }
  },
  r7: {
    type:'talk',
    good: {
      nice:[
        {sentence: 'claro que si, lo son.', trigger:'question', mood:':)'}
      ],
      normal:[
        {sentence: 'pense que si te gusba la musica de los {DECADE}.', trigger:'question',mood:'¬¬'}
      ],
      bad:[
        {sentence: '...', trigger:'question',mood:':@'}
      ]
    }
  },
  r8: {
    type:'talk',
    good: {
      nice:[
        {sentence: 'hazlo', trigger:'end',mood:':)'}
      ],
      normal:[
        {sentence: 'te daras cuenta que yo tengo la razon', trigger:'end',mood:'¬¬'}
      ],
      bad:[
        {sentence: 'no aceptas que una chica conozca mas que tu?', trigger:'end',mood:':@'}
      ]
    }
  },
  r9: {
    type:'talk',
    good: {
      normal: [
        {sentence: 'la tengo', trigger:'question',mood:'¬¬'}
      ],
      bad: [
        {sentence: 'por supuesto que la tengo', trigger:'question',mood:'¬¬'}
      ]
    }
  },
  r10: {
    type:'talk',
    good: {
      nice:[
        {sentence: 'Jajaja, no te creo', trigger:'end',mood:':#'}
      ],
      normal:[
        {sentence: 'Claro que si...', trigger:'end',mood:':)'}
      ],
      bad:[
        {sentence: 'Ah si? Ya veremos que tanto sabes tu.', trigger:'end',mood:':O'}
      ]
    }
  },
  rshy: {
    type:'talk',
    good: {
      nice: [
        {sentence:':)', trigger:'question',mood:':#'},
        {sentence:'Por favor... Me haces sonrojar', trigger:'question',mood:':#'}
      ]
    }
  },
  rlaugh: {
    type:'talk',
    good: {
      nice: [
        {sentence: 'tonto :)', trigger:'question',mood:':D'},
        {sentence: 'Jajajaja :)', trigger:'question',mood:':D'}
      ]
    }
  }
}

talk = {
  t0: {
    options: [
      {sentence:'Conozco mucho de {ZZZ} y seguro que es {XXX}.', reaction:'r4'},
      {sentence:'Conozco mucho de {ZXZ} y esa cancion es {XXX}.', reaction:'r5'},
      {sentence:'Me has hecho dudar... ahora ya no estoy tan convencido.', reaction:'r6'}
    ]
  },
  t1: {
    options: [
      {sentence:'la verdad es que tu me desconcentras...', reaction:'r1'},
      {sentence:'de verdad? estoy seguro que es {XXX}', reaction:'r2'},
      {sentence:'es que toda la musica de los {DECADE} suena igual', reaction:'r3'}
    ]
  },
  t2: {
    options: [
      {sentence:'Solo bromeo ;-)', reaction:'rshy'},
      {sentence:'Muy en serio', reaction:'rshy'},
      {sentence:'No, solo lo digo para que creas que en realidad sabia de que cancion hablaba :P', trigger:'rlaugh'}
    ]
  },
  t3: {
    options: [
      {sentence:'Solo bromeo ;-)', reaction:'rshy'},
      {sentence:'Muy en serio', reaction:'rshy'},
      {sentence:'No, solo lo digo para que creas que en realidad sabia de que cancion hablaba :P', trigger:'rlaugh'}
    ]
  },
  t4: {
    options: [
      {sentence:'Esos no son {ZXZ}', reaction:'r7'}
    ]
  },
  t5: {
    options: [
      {sentence:'dejame confirmar con mi telefono', reaction:'r8'},
      {sentence:'bueno ahora que lo dices... creo que tienes razón', reaction:'r9'},
      {sentence:'yaaa, estaba bromeando, estaba poniendo a prueba tu conocimiento.', reaction:'r10'}
    ]
  }
}