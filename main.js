//.......................Empieza ejercicio guiado 1
var l1=[1,2,3];
var l2=[2,3,4];
// output : [2,3]

function intersection (l1,l2){
	var l3=[];
	for (var i=0; i<l1.length; i++){
		for (var j=0; j<l2.length; j++){
			if(l1[i]==l2[j]){
			l3.push(l1[i]);
			}
		}
	}
	return l3;
}

console.log (intersection(l1,l2));

//............................................