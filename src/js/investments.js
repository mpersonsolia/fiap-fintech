/***************************************** FREE FLOW LIST *****************************************/
const investmentsList = [
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Tesouro Direto',
		amount: 'R$ 500,00',
	},
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Tesouro Direto',
		amount: 'R$ 500,00',
	},
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Tesouro Direto',
		amount: 'R$ 500,00',
	},
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Tesouro Direto',
		amount: 'R$ 500,00',
	},
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Tesouro Direto',
		amount: 'R$ 500,00',
	},
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Tesouro Direto',
		amount: 'R$ 500,00',
	},
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Tesouro Direto',
		amount: 'R$ 500,00',
	},
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Tesouro Direto',
		amount: 'R$ 500,00',
	},
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Tesouro Direto',
		amount: 'R$ 500,00',
	},
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Tesouro Direto',
		amount: 'R$ 500,00',
	},
];

investmentsList.forEach((list) => {
	const tr = document.createElement('tr');

	const trContent = `
						<td>${list.date}</td>
						<td>${list.time}</td>
						<td>${list.type}</td>
						<td>${list.amount}</td>
                        `;

	tr.innerHTML = trContent;
	document.querySelector('table tbody').appendChild(tr);
});
