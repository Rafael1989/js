function dizerOi(nome){
	console.log("Oi, " + nome);
}

dizerOi.call({},"Arya");

dizerOi.apply({},["Arya"]);