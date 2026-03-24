
function arraysIguais(a, b){
    b = a
    if(a === b) return true;
    if(a.length !== b.length) return false;

    for(let i=0; i < a.length; i++){ 
        if(a[i] !== b[i]) {
           
            return false;
        }
    }
    return true;
    
}

console.log(arraysIguais([1,2,3,"y"], []));
