import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'pw';
	length = 0;
	includeLetters = false;
	includeSpecialCharacters = false;
	includeNumbers = false;
	value = '';
	password = '';

	letters = 'abcdefghijklmnopqrstuvwxyz';
	specialCarcters = '!@#$%^&*()';
	numbers = '0123456789';

	onBtnGeneratePassword() {
		console.log('Button Submitted');
		if (this.includeLetters) {
			this.value += this.letters;
		}
		if (this.includeSpecialCharacters) {
			this.value += this.specialCarcters;
		}
		if (this.includeNumbers) {
			this.value += this.numbers;
		}

		for (let i = 0; i < this.length; i++) {
			let v = Math.floor(Math.random() * this.value.length);
			this.password += this.value[v];
		}

		console.log(this.password);
	}

	onChangeLength(value: string) {
		if (!isNaN(parseInt(value))) {
			this.length = parseInt(value);
		}
	}

	onIncludeLetters() {
		this.includeLetters = !this.includeLetters;
	}

	onIncludeSpecialCharacters() {
		this.includeSpecialCharacters = !this.includeSpecialCharacters;
	}

	onIncludeNumbers() {
		this.includeNumbers = !this.includeNumbers;
	}
}
