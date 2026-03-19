class Point { //classe (molde para criar o)
   constructor (x, y) { //funcao que inicializa a instancia
        this.x = x
        this.y = y
   } 
   distance() {// metodo(calcula a distancia entre dois pontos)
        return Math.sqrt( // Pitágoras
            this.x * this.x + this.y * this.y
        )
   }
}
let p = new Point(6, 5)// cria a instancia
console.log(p.distance()) // chama o metodo para calcular a distancia e mostra no console a distancia