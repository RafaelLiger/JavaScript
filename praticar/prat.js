function finalizar(){
      console.log("Tarefas concluidas!")
  }
  function fazerTarefa(callback,tempo){
    setTimeout(callback, Number(tempo))
    
  }
  let acordar = () => {
    console.log("Acordei!!!")
  }
  let dentes = function(){
    console.log("Escovando dentes...")
  }
  function arrumar(){
    console.log("Colocando roupa...")
  }
console.log("Executando tarefas...")   
fazerTarefa(finalizar, 5000)
fazerTarefa(arrumar, 4000)
fazerTarefa(dentes, 3000)
fazerTarefa(acordar, 2000)


