function makeid(l) {
  // write your code here
	var res="";
	var var_list="ABCDEFGHIJKLMNOPQRSTVUWYZ0987654321qwertyuioplkjhgfdsazxcvbnm";
	for(let i=0; i<l; i++){
		res+=var_list.charAt(
			Math.floor(
				Math.random()*var_list.length
			)
		)
		
	}
	return res;
}

// Do not change the code belo
const l = prompt("Enter a number.");
alert(makeid(l));
