document.querySelectorAll('[data-cabelo]').forEach(btn =>{
    btn.addEventListener('click', () => {
        let cabelos = btn.dataset.cabelo;
        let cabelo = document.querySelector('.cabelo') 
        let hide = document.querySelector('.hide')
        switch(cabelos){
            case "curto":
                cabelo.style.height = "55px"
                cabelo.style.display = "block"
                hide.style.display = ""  
                break;
            case "longo":
                cabelo.style.height = "220px"
                cabelo.style.display = "block"
                hide.style.display = "" 
                break;   
            case "careca":
                cabelo.style.height = "0px"
                cabelo.style.display = "block"
                hide.style.display = "none"
                
       
                break;  
        }
       
    })
})
document.querySelectorAll('[data-cor]').forEach(btn =>{
    btn.addEventListener('click', () => {
        let cores = btn.dataset.cor;
        let cor = document.querySelector('.cabelo')
        switch(cores){
            case "black":
                cor.style.background = "black"
                break;
            case "brown":
                cor.style.background = "saddlebrown"
                break;
            case "yellow":
                cor.style.background = "yellow"
                break; 
            
                
        
        }
    })
})
document.querySelectorAll('[data-humor]').forEach(btn =>{
    btn.addEventListener('click', () => {
        let humor = btn.dataset.humor;
        let h = document.querySelector('.humor')
        let rosto = document.querySelector('.rosto')
        switch(humor){
            case "feliz":
                h.style.borderRadius = "50%"
                h.style.transform = "rotate(0deg)"
                rosto.style.background = "#f2c9a0"
                break;
            case "triste":
                h.style.borderRadius = "50%"
                h.style.transform = "rotate(-178deg)"
                rosto.style.background = "saddlebrown"

                break;    
        
        }
    })
})

