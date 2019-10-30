var obj = {
	nome: "Jon",
	sobrenome: "Snow",
	idade: 16,
	groselha: abacaxi
};

function abacaxi(){
	console.log("Olá, eu sou " + this.nome + " " + this.sobrenome + " e tenho " + this.idade + " anos.");
}

console.log(obj.sobrenome);

obj.groselha();