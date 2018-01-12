'use strict';

var app = new Vue({
	el: '#app',
	data: {
		people: [
			{
				name: 'Mickey Mouse',
				email: 'mickeymouse@gmail.com'
			},
			{
				name: 'Donald Duck',
				email: 'quackD@gmail.com'
			},
			{
				name: 'Goofy',
				email: 'goofy_all_the_time@gmail.com'
			},
		],
		enteredName: [],
		enteredEmail: [], 
	},
	methods: {
		storeEmail: function (event) {
		console.log('IM WORKING');
		}
	  }	
})



