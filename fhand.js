var express=require('express');
var path=require('path');
var fs=require('fs');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser());

app.get(('/file'),function(req,res){
	console.log("entered");
	res.sendFile('imgform.html',{root:path.join(__dirname,'./heap')});
}
);

app.post('/submit',function(req,res){
const pass='sachin123';
if(req.body.password==pass){
	var type='';
	if(req.body.type=='image')
		 type='.jpg';
	else
		 type='.txt';
	try{
			if(fs.statSync(path.join(__dirname,'./heap',req.body.toview+type)).isFile()){
				res.sendFile(req.body.toview+type,{root:path.join(__dirname,'./heap')});
			}
		}catch(err){
			res.sendFile('error.html',{root:path.join(__dirname,'./heap')});
		}
	
}
else{
	res.writeHead(404,{'Content-Type':'text/html'});
		res.write('Password incorrect!!');
}		
		
	
}
);
app.listen(1337,function(){
console.log('Listening at port 1337');
}
);