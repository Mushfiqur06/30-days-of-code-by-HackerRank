var q = [];
var dataArr = [];
q.push(root);
while(q.length > 0){
	var getdata = q.shift();
	dataArr.push(getdata.data)
	if(getdata.left){
		q.push(getdata.left)
	}
	if(getdata.right){
		q.push(getdata.right);
	}

}
console.log(dataArr.join(" "));