function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
 
    if(username=="Admin-Charith","Aashrith" && password=="admin"){
        alert("Login Succesful");
        return false;
        
         
    }
    else{
        alert("Login Failure")
    }

    //if  (username=="Aashrith"&& password=="user") {
        
           // alert("Login Succesfful");
    
         //   return false;
        
   // } 
   // else {
      //  alert("Login Failure")
   // }   
   
} 
