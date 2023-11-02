let a=parseInt(prompt("Enter the first number"))
let b=parseInt(prompt("Enter the second number"))
let c=parseInt(prompt("Enter the third number"))


Promise.all([a,b,c]).then((msg)=>{
    let prime=true
    for(y of msg){
        for(i=2;i<y;i++){
              
                    if(y%i==0){
                        prime=false
                       break
                    }
                    
                }
                if(prime==true){
                    console.log("The given number  "+y+" is a prime number")
					document.write("The given number  "+y+" is a prime number"+"<br>")
                    
                }
                else{
                    console.log("The given number  "+y+" is  not a prime number")
					document.write("The given number  "+y+" is  not a prime number"+"<br>")
                }
    
    }
})