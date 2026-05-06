let name = document.querySelector("#name")
let pass = document.querySelector("#pass")

document.querySelector("submit").addEventListener("click",()=>{
    if(name === "indra" && pass>7 ){
        console.log("valid");
        
    }
    else{
        console.log("failed");
        
    }
})

console.log("hello");
