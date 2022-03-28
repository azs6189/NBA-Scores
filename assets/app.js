const warriorsGames = [
	{
		awayTeam: {
			team: "Golden State",
			points: 119,
			isWinner: true,
		},
		homeTeam: {
			team: "Houston",
			points: 106,
			isWinner: false,
		},
	},
	{
		awayTeam: {
			team: "Golden State",
			points: 105,
			isWinner: false,
		},
		homeTeam: {
			team: "Houston",
			points: 127,
			isWinner: true,
		},
	},
	{
		homeTeam: {
			team: "Golden State",
			points: 126,
			isWinner: true,
		},
		awayTeam: {
			team: "Houston",
			points: 85,
			isWinner: false,
		},
	},
	{
		homeTeam: {
			team: "Golden State",
			points: 92,
			isWinner: false,
		},
		awayTeam: {
			team: "Houston",
			points: 95,
			isWinner: true,
		},
	},
	{
		awayTeam: {
			team: "Golden State",
			points: 94,
			isWinner: false,
		},
		homeTeam: {
			team: "Houston",
			points: 98,
			isWinner: true,
		},
	},
	{
		homeTeam: {
			team: "Golden State",
			points: 115,
			isWinner: true,
		},
		awayTeam: {
			team: "Houston",
			points: 86,
			isWinner: false,
		},
	},
	{
		awayTeam: {
			team: "Golden State",
			points: 101,
			isWinner: true,
		},
		homeTeam: {
			team: "Houston",
			points: 92,
			isWinner: false,
		},
	},
];

// Create 'ul'
const ulParent = document.createElement("ul");

// Loop over each object within warriorsGames array
for (let game of warriorsGames) {
	// Destructure object
	const { homeTeam, awayTeam } = game;

	// Create 'li'
	const gameLi = document.createElement("li");
	const teamNames = `${awayTeam.team} @ ${homeTeam.team}`;
	const scoreLine = `${awayTeam.points} - ${homeTeam.points}`;

	gameLi.innerText = `${teamNames} ${scoreLine}`;
	console.log(scoreLine);

	ulParent.appendChild(gameLi);
}

document.body.prepend(ulParent);
