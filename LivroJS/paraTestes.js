let o = { x: 1, y: 2 }; 

for(const [name, value] of Object.entries(o)) {
    console.log(name, value);  // Imprime "x 1" e "y 2" 

}