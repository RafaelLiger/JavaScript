// Array com dois pontos
let points = [
  {x: 1, y: 1},
  {x: 4, y: 5}
];

// Criando um método chamado dist
points.dist = function() {

  let p1 = this[0]; // primeiro ponto
  let p2 = this[1]; // segundo ponto

  let a = p2.x - p1.x; // diferença em x
  let b = p2.y - p1.y; // diferença em y

  return Math.sqrt(a*a + b*b); // cálculo da distância(Pitágoras)
};

// chamando o método
console.log(points.dist());

// quando uma função está dentro de um array ou um objeto elá e chamada de "método"