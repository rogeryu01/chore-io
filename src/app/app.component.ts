import { Component } from '@angular/core';

interface Chore {
  name: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newChoreName = '';
  newChoreDescription = '';
  newChorePerson ='';
  chores: Chore[] = [];

  onSubmit() {
    const newChore: Chore = {
      name: this.newChoreName,
      description: this.newChoreDescription,
  
    };

    this.chores.push(newChore);
    this.newChoreName = '';
    this.newChoreDescription = '';
    this.newChorePerson = '';
  }

  deleteChore(chore: Chore) {
    const index = this.chores.indexOf(chore);
    this.chores.splice(index, 1);
  }
}
