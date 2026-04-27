let pass,count=0
let p = 2006
document.querySelector("button").onclick = function () {
    pass = document.querySelector("input").value
//   console.log(pass); 
  if(pass==p){
    console.log("correct");
    count = 0; 
    
    
  }
  
  else{
    count++
    console.log(`Incorrect attempt ${count}`);
    
  }
};
