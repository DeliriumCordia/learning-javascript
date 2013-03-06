var i;
var z;
var string1;
string1="";

for(i=1;i<11;i++){
for(z=1;z<11;z++){
string1=string1.concat(i*z);
if(((i*z)%10)!==0){
if((i*z)<10)
string1=string1.concat(", ");
else 
string1=string1.concat(",");
}
console.log(string1);
string1="";
}	
}