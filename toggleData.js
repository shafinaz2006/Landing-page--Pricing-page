

const annualData = [

	{	type: 'Basic', price: '$199.99', storage: '500 GB Storage',	user: '2 Users Allowed',send: 'Send up to 3 GB'
	},
	{
		type: 'Professional', price: '$249.99',storage: '1 TB Storage', user: '5 Users Allowed',
		send: 'Send up to 10 GB'
	},
	{
		type: 'Master',	price: '$399.99', storage: '2 TB Storage', user: '10 Users Allowed', send: 'Send up to 20 GB'
	}

]
const monthlyData = [

	{
		type: 'Basic',price: '$19.99', storage: '500 GB Storage', user: '2 Users Allowed', send: 'Send up to 3 GB'
	},
	{
		type: 'Professional',price: '$24.99', storage: '1 TB Storage', user: '5 Users Allowed',
		send: 'Send up to 10 GB'
	},
	{
		type: 'Master',	price: '$39.99', storage: '2 TB Storage',user: '10 Users Allowed', send: 'Send up to 20 GB'
	}

]

let data = '';

data = monthlyData;

const toggle = document.querySelector('#checkbox');

const type = document.querySelectorAll('.type');

const price = document.querySelectorAll('.price');

const storage = document.querySelectorAll('.storage');

const user = document.querySelectorAll('.user');

const send = document.querySelectorAll('.send');

for (let i = 0; i < 3; i++){
	
	type[i].textContent = data[i].type;

	price[i].textContent = data[i].price;

	storage[i].textContent = data[i].storage;

	user[i].textContent = data[i].user;

	send[i].textContent = data[i].send;
	
}

toggle.addEventListener('change', function() {

	if(this.checked) {

		data = annualData;

	 } else {

		data = monthlyData;
	 }

	for(let i = 0; i<3; i++){
		
		type[i].textContent = data[i].type;

		price[i].textContent = data[i].price;
		
		storage[i].textContent = data[i].storage;
		
		user[i].textContent = data[i].user;
		
		send[i].textContent = data[i].send;

	}

})


