var i;
var string1;
for(i=1;i<101;i++){
	if((i%10)===0){
		string1=i.concat(string1);
		console.log(string1);
		string1="";
	}
	else string1=i.concat(string1);
}
	