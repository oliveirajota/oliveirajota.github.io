var phrase = [
	"O grande erro da ditadura foi não matar vagabundos e canalhas como Fernando Henrique.",
	"Estou sofrendo preconceito heterossexual.",
	"O objetivo da tortura é fazer o cara abrir a boca. O cara tem que ser arrebentado para abrir o bico.",
	"O que eu tenho contra a Preta Gil? Nada contra ela. Nunca gostei dela, é direito meu. Não vejo que ela tem credibilidade para falar em ética.",
	"Gastaram muito chumbo com o Lamarca. Ele devia ter sido morto a coronhadas.",
	"Eu acredito em Deus. Sou católico. Mas é coisa rara ir à Igreja. Eu já li a Bíblia inteirinha, com atenção. Levei uns sete anos para ler. Você tem bons exemplos ali. Está escrito: 'A árvore que não der frutos, deve ser cortada e lançada ao fogo'. Eu sou favorável à pena de morte.",
	"O erro da ditadura foi torturar e não matar!",
	"No primeiro ano, pedi desligamento (do exército). Não me adaptei. Mas meu pai não me deixou. Olhou pra minha cara, levantou o braço e disse: Vou te quebrar todinho!.",
	"Eu falei para Robson Tuma ficar na dele, senão o enchia de porrada.",
	"Se fuzilassem 30.000 corruptos, a começar pelo presidente Fernando Henrique Cardoso, o país estaria melhor.",
	"É um índio que está a solta aqui em Brasília, veio de avião, vai agora comer uma costelinha de porco, tomar um chope, provavelmente um uísque, e quem sabe telefonar para alguém para a noite sua ser mais agradável. Esse é o índio que vem falar aqui de reserva indígena. Ele devia ir comer um capim ali fora para manter as suas origens.",
	"Estou me lixando para esse pessoal aí, talkey?",
	"O próximo passo será a adoção de crianças por casais homossexuais e a legalização da pedofilia.",
	"Já que está difícil ter macho por aí, eu estou me apresentando como macho e ela aloprou. Não pode ver um heterossexual na frente. Ela deu azar duas vezes: uma que sou casado e outra que ela não me interessa. É muito ruim, não me interessa.",
	"Eu não teria orgulho de ter um filho gay.",
	"Minha relação com os negros sempre foi ótima. Não vou dizer que meus melhores amigos eram negros, mas tive bons amigos negros.",
	"Competência? É problema do deputado. Se quiser botar uma prostituta no meu gabinete, eu boto. Se quiser botar a minha mãe, eu boto. É problema meu.",
	"E teve o caso do negão Celso. Em 1978, tinha um exercício em que passávamos por uma corda em cima de um lago. Mas o sargento balançou a corda e o recruta Celso catapum dentro d'água! Agarrei o negão no fundo. Tirei ele pra fora, porque estava morrendo afogado.",
	"Pinochet devia ter matado mais gente.",
	"Para o crime que FHC está cometendo contra o país sua pena devia ser o fuzilamento.",
	"É só não estuprar, não matar, que não vai pra lá, porra!",
	"Eu não vou discutir promiscuidade com quem quer que seja. Eu não corro esse risco e meus filhos foram muito bem educados.",
	"Criaram agora a Frente Parlamentar de Combate à Homofobia, a frente gay. O que esse pessoal tem a oferecer para a sociedade? Casamento gay? Adoção de filhos? Dizer para vocês que são jovens que, no dia em que vocês tiverem um filho, se for gay, é legal e vai ser o uhuhu da família? Esse pessoal não tem nada a oferecer.",
	"Não vou estuprar você porque você não merece.",
	"O filho começa a ficar assim meio gayzinho, leva um coro, ele muda o comportamento dele. Olha, eu vejo muita gente por aí dizendo: ainda bem que eu levei umas palmadas, meu pai me ensinou a ser homem.",
	"Comigo na comissão, vocês vão sentir falta do Feliciano. Ele ainda se importava com a opinião das pessoas, eu, não.",
	"Dá que eu te dou outra."
];

function createBiroliro(p) {

	randomPicture();

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

function randomPicture()
{
	let random = Math.floor(Math.random() * 5) + 1;
	let file = "img/" + random + ".png";
	document.getElementById("biro-picture").src = file;
}