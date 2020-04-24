var phrase = [
	"Comigo na comissão, vocês vão sentir falta do Feliciano. Ele ainda se importava com a opinião das pessoas, eu, não.",
	"Deveriam ter sido fuzilados uns 30 mil corruptos, a começar pelo presidente Fernando Henrique Cardoso.",
	"O filho começa a ficar assim meio gayzinho, leva um coro, ele muda o comportamento dele. Olha, eu vejo muita gente por aí dizendo: ainda bem que eu levei umas palmadas, meu pai me ensinou a ser homem.",
	"A grande maioria dos imigrantes em potencial não tem boas intenções nem quer o melhor ou fazer bem ao povo americano. Eu gostaria muito que os EUA levassem adiante a atual política de imigração, porque em larga medida nós devemos a nossa democracia no Hemisfério Sul aos Estados Unidos.",
	"Dá que eu te dou outra.",
	"Acabaram com nossa alegria de viver, não pode fazer uma brincadeira, uma piada, tudo não pode, é preconceito. Tá aí as feministas, tá aí o LGBT, as minorias. Uma desgraça no Brasil.",
	"Decisões têm consequências. Indecisões, mais ainda.",
	"O único erro foi torturar e não matar.",
	"Estou sofrendo preconceito heterossexual.",
	"Voltem para o zoológico.",
	"Já vai tarde.",
	"A política é sobre as pessoas."
];

function createBiroliro(p) {

	let text = '';

	for (let i = 0; i < p; i++) {

		let paragraph = '';
		while (paragraph.length < 140) {
			let random = Math.floor(Math.random() * phrase.length);
			paragraph += phrase[random] + " "; 
		}

		text += paragraph + "\n\n"; 
	}

	
	document.getElementById("output").innerHTML = text;
}


