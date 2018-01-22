'use strict';



var app = new Vue({
	el: '#app',
	data: {
		enteredName: '',
		enteredEmail: '', 
		people: [
			{
				name: 'Mickey Mouse',
				email: 'mickeymouse@gmail.com',
				time: Date.now(),
				since: 0,
				photo: 'https://www.gravatar.com/avatar/?s=100&d=monsterid'
			},
			{
				name: 'Donald Duck',
				email: 'quackD@gmail.com',
				time: Date.now(),
				since: 0,
				photo: 'https://www.gravatar.com/avatar/?s=100&d=retro'
			},
			{
				name: 'Goofy',
				email: 'goofy_all_the_time@gmail.com',
				time: Date.now(),
				since: 0,
				photo: 'https://www.gravatar.com/avatar/?s=100%d=robohash'
			},
		],
	},
	created: function() {
		setInterval(this.updateTimeSinceValues, 3 * 1000)

		
	},
	methods: {
		updateTimeSinceValues: function() {
			console.log('updateTimeSinceValue!')

			this.people.forEach(person => {
				person.since = Math.round((Date.now() - person.time)/1000/60);
			});	
		},
		submitPerson: function (event) {
			if (!this.enteredName || !this.enteredEmail) return;
			console.log('IM WORKING');
			
			this.people.unshift({
				  name: this.enteredName,
				  email: this.enteredEmail,
				  time: Date.now(),
				  since: 0,
				  photo: 'https://www.gravatar.com/avatar/' + md5(this.enteredEmail) + '?s=100' + '&d=identicon',
			})

			if (this.people.length > 4) {
				this.people.pop();
			}

			this.enteredName = '';
			this.enteredEmail = '';
		}
	  }	
})



