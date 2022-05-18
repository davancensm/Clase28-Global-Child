//lo pongo a escuchar un evento
//el evento message me va a permitir escuchar cualquier comunicacion EXTERNA
//RECIBE UN CALLBACK, QUE VA A RECIBIR EL MENSAJE POR ESO LE VOY A PONR PARENTMESSAGE





let randomFunction = () => {
  let obj = {};
  let randomNumber;
  process.on('message', (parentMsg) => {

    for (let i = 0; i < parentMsg; i++) {
      randomNumber = Math.floor(Math.random() * 1000)
      if (obj[randomNumber]) {
        obj[randomNumber]++

      } else {
        obj[randomNumber] = 1

      }
    }

    process.send(obj)
  })
}

randomFunction()