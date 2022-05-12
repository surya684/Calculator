
function insert(num)   
{  
document.getElementById('ans').value =document.getElementById('ans').value+num;
} 
function equal()  
{  
var exp = document.getElementById('ans').value;  
if(exp)  
{  
document.getElementById('ans').value = eval(exp);  
} 
else
{
document.getElementById('ans').value ='';	
} 
}  
function backspace()  
{  
var exp = document.getElementById('ans').value;  
document.getElementById('ans').value = exp.substring(0, exp.length - 1); 
}  


