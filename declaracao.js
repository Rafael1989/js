function dizerOi(nome){
	console.log('Oi ' + nome);
}

var dizerOla = function(nome){
	console.log('oi ' + nome);
}

var dizerTchau = new Function("nome","console.log('Tchau ' + nome);");

