# detect-language
Select a language and find all string occurred in webpage

<!DOCTYPE html> 
<html> 
  
<head> 
    <title> 
        count string occurrence in a string 
    </title> 
</head> 
  
<body style="text-align:center;"> 
  
    <h1 style="color:green;">  
        hello World
    </h1> 
    <h3> 
      count string occurrence in a string  
  </h3> 
  
    <button onClick="countstr()"> 
        count 
    </button> 
    <p id="rk"> 
  
    </p> 
  
    <!-- Script to count string  
         occurrence in a string  -->
    <script> 
        function countstr() { 
            var r = "hello World "; 
            document.getElementById("rk").innerHTML = 
              (r.match(/Geeks/g)).length; 
  
        } 
    </script> 
</body> 
  
</html> 
