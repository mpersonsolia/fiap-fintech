/***************************************** FREE FLOW LIST *****************************************/
const transactionsList = [
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Cartão VISA',
		description: 'Padaria Pão Primavera',
		amount: 'R$ 5,90',
	},
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Cartão VISA',
		description: 'Padaria Pão Primavera',
		amount: 'R$ 5,90',
	},
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Cartão VISA',
		description: 'Padaria Pão Primavera',
		amount: 'R$ 5,90',
	},
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Cartão VISA',
		description: 'Padaria Pão Primavera',
		amount: 'R$ 5,90',
	},
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Cartão VISA',
		description: 'Padaria Pão Primavera',
		amount: 'R$ 5,90',
	},
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Cartão VISA',
		description: 'Padaria Pão Primavera',
		amount: 'R$ 5,90',
	},
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Cartão VISA',
		description: 'Padaria Pão Primavera',
		amount: 'R$ 5,90',
	},
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Cartão VISA',
		description: 'Padaria Pão Primavera',
		amount: 'R$ 5,90',
	},
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Cartão VISA',
		description: 'Padaria Pão Primavera',
		amount: 'R$ 5,90',
	},
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Cartão VISA',
		description: 'Padaria Pão Primavera',
		amount: 'R$ 5,90',
	},
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Cartão VISA',
		description: 'Padaria Pão Primavera',
		amount: 'R$ 5,90',
	},
	{
		date: '02/03/24',
		time: '13:55:03',
		type: 'Cartão VISA',
		description: 'Padaria Pão Primavera',
		amount: 'R$ 5,90',
	},
];

transactionsList.forEach((list) => {
	const tr = document.createElement('tr');

	const trContent = `
						<td>${list.date}</td>
						<td>${list.time}</td>
						<td>${list.type}</td>
						<td>${list.description}</td>
						<td>${list.amount}</td>
                        `;

	tr.innerHTML = trContent;
	document.querySelector('table tbody').appendChild(tr);
});
