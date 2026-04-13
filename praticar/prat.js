function finalizar(){
      console.log("Tarefa concluida")
  }
  function fazerTarefa(callback){
      console.log("Executando tarefa")
      callback()
  }
  fazerTarefa(finalizar)