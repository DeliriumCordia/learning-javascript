var i;
var string1;
string1="";

for(i=1;i<101;i++){
	if((i%10)===0){
		string1=string1.concat(i);
		console.log(string1);
		string1="";
	}
	else{

	string1=string1.concat(i);
	string1=string1.concat(" ");
}
}
	