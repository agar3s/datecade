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
        {sentence:'Si, es una de mis canciones favoritas.', trigger:'?'},
        {sentence:'Si, es una de mis canciones favoritas.', trigger:'?'}
      ],
      normal: [
        {sentence:'Si es una buena cancion, pero no mas que {XZX}.', trigger:'?'},
        {sentence:'Es un clasico. Como {XZX}.', trigger:'?'}
      ],
      bad: [
        {sentence:'No tienes mal gusto musical despues de todo.', trigger:'?'},
        {sentence:'Entonces si conoces algo de buena musica.', trigger:'?'}
      ]
    },
    bad: {
      nice: [
        {sentence:'Jajaja, esa no es {XXX} es {XYX}', trigger:'t1'},
        {sentence:'{XXX}? Jamas! es {XYX}, tendre que ensenarte algo de buena musica', trigger:'t1'}
      ],
      normal: [
        {sentence:'No seas tonto, esa no es {XXX} es {XYX}', trigger:'t1'},
        {sentence:'{XXX}? para nada es {XYX}', trigger:'t1'}
      ],
      bad: [
        {sentence:'que tonterias dices? esa no es {XXX}, pense que te gustaba la musica de...', trigger:'?'},
        {sentence:'Definitivamente no es {XXX}, esa cancion es de...', trigger:'?'}
      ]
    }
  },
  r1: {
    type:'talk',
    good: {
      nice: [
        {sentence:'Tu tambien a mi, un poco...', trigger:'t3'},
        {sentence:'Hablas en serio?', trigger:'t2'}
      ],
      normal: [
        {sentence:'Por favor... Me sonrojas', trigger:'question'},
        {sentence:'Jajajaja', trigger:'question'}
      ],
      bad: [
        {sentence:'...', trigger:'question'},
        {sentence:'Yo creo que te haces el pendejo.', trigger:'question'}
      ]
    }
  },
  r2: {
    type:'talk',
    good: {
      nice: [
        {sentence: 'no me crees?', trigger: 't0'}
      ],
      normal: [
        {sentence: 'estas diciendo que soy una mentirosa?', trigger: 't0'}
      ],
      bad: [
        {sentence: 'segun tu, yo no se nada de musica.', trigger: 't0'}
      ]
    }
  },
  r3: {
    type:'talk',
    good: {
      nice: [
        {sentence: 'Son copias de {ZZZ} :D', trigger: 'question'},
        {sentence: 'una que otra canción es similar pero no toda', trigger: 'question'}
      ],
      normal: [
        {sentence: 'para nada, la musica de los {DECADE}\'s es la mejor', trigger: 'question'}
      ]
    }
  },
  r4: {
    type:'debate',
    good: {
      nice: [
        {sentence: 'Claro {ZZZ} toca {XXX}, pero no. Esa no es la cancion que suena.', trigger: 'question'}
      ]
    },
    bad: {
      normal: [
        {sentence: 'Pues no conoces tanto de {ZZZ} para confundirlos con {ZXZ}.', trigger:'t4'}
      ],
      bad: [
        {sentence: 'De verdad confundes {ZZZ} con {ZXZ}? pense que sabias...', trigger:'t4'}
      ]
    }
  },
  r5: {
    type:'debate',
    good: {
      nice: [
        {sentence: 'estas confundido, si son {ZXZ} pero lo que suena es {XYX}.', trigger: 't5'}
      ]
    },
    bad: {
      normal: [
        {sentence: 'Pues no conoces tanto de {ZZZ} para confundirlos con {ZXZ}.', trigger:'t4'}
      ],
      bad: [
        {sentence: 'De verdad confundes {ZZZ} con {ZXZ}? pense que sabias...', trigger:'t4'}
      ]     
    }
  },
  r6:{
    type:'talk',
    good: {
      nice: [
        {sentence: 'es {XYX} :)', trigger:'question'}
      ],
      normal: [
        {sentence: 'cambias muy facil de parecer.', trigger: 'question'}
      ]
    }
  },
  r7: {
    type:'talk',
    good: {
      nice:[
        {sentence: 'claro que si, lo son.', trigger:'question'}
      ],
      normal:[
        {sentence: 'pense que si te gusba la musica de los {DECADE}\'s.', trigger:'question'}
      ],
      bad:[
        {sentence: '... :@', trigger:'question'}
      ]
    }
  },
  r8: {
    type:'talk',
    good: {
      nice:[
        {sentence: 'hazlo', trigger:'end'}
      ],
      normal:[
        {sentence: 'te daras cuenta que yo tengo la razon', trigger:'end'}
      ],
      bad:[
        {sentence: 'no aceptas que una chica conozca mas que tu?', trigger:'end'}
      ]
    }
  },
  r9: {
    type:'talk',
    good: {
      normal: [
        {sentence: 'la tengo', trigger:'question'}
      ],
      bad: [
        {sentence: 'por supuesto que la tengo', trigger:'question'}
      ]
    }
  },
  r10: {
    type:'talk',
    good: {
      nice:[
        {sentence: 'Jajaja, no te creo', trigger:'end'}
      ],
      normal:[
        {sentence: 'Claro que si... :)', trigger:'end'}
      ],
      bad:[
        {sentence: 'Ah si? Ya veremos que tanto sabes tu.', trigger:'end'}
      ]
    }
  },
  rshy: {
    type:'talk',
    good: {
      nice: [
        {sentence:':)', trigger:'question'},
        {sentence:'Por favor... Me haces sonrojar', trigger:'question'}
      ]
    }
  },
  rlaugh: {
    type:'talk',
    good: {
      nice: [
        {sentence: 'tonto :)', trigger:'question'},
        {sentence: 'Jajajaja :)', trigger:'question'}
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
      {sentence:'es que toda la musica de los {DECADE}\'s suena igual', reaction:'r3'}
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