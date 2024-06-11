
function countTrue(arr) {
	return arr.reduce((acc,curr) => acc+curr,0)
}

console.log(countTrue([false,true,false,false,true,true,false]));

