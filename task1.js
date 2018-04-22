feedbacks = [ 
{'id': 1023, 'user_id': 44393, 'msg': 'Comment 1', 'rate': 5 }, 
{'id': 1024, 'user_id': 22341, 'msg': 'Comment 2', 'rate': 4 },  
{'id': 1025, 'user_id': 22341, 'msg':'Comment 3', 'rate': 4 },  
{'id': 1026, 'user_id': 44393, 'msg': 'Comment 4', 'rate':2 },  
{'id': 1027, 'user_id': 22341, 'msg':'Comment 5', 'rate': 3 }, 
{'id': 1028, 'user_id':75874, 'msg':'Comment 6', 'rate': 5 },  
{'id': 1029, 'user_id': 11223, 'msg': 'Comment 7', 'rate':1 }, 
{'id': 1030, 'user_id':44421, 'msg':'Comment 8', 'rate': 4 },
{'id': 1024, 'user_id': 44393, 'msg': 'Comment 1', 'rate': 5 }
 ];

var occ = 0;
var id;

for(let feedback of feedbacks){
		var elOcc = feedbacks.filter(x => x.id === feedback.id).length;
	if( elOcc > occ){
		occ = elOcc;
		id = feedback.id;
	}
}

console.log(id);