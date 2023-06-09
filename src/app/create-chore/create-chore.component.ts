import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Chore, ChoreService } from '../chore.service';
import { UserService, User } from '../user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-create-chore',
  templateUrl: './create-chore.component.html',
  styleUrls: ['./create-chore.component.css']
})
export class CreateChoreComponent {

  createChoreForm = this.formBuilder.group({
    chore_name: '',
    assigned_to: '',
    due_date: '',
    repeat_for: '',
    status: '',
    points: '',
    assignedDate: ''
  });

  public users$: Observable<User[]>;
  public userNames: String[] = [];
  public userIds: Number[] = [];

  constructor(private formBuilder: FormBuilder, private choreService: ChoreService, private userService: UserService) {
    this.users$ = this.userService.getAllUsers();
    this.users$.subscribe((x) => {
      let user: any
      for (user in x) {
        /*if (x[user].userName === assigned_to) {
          console.log(assigned_to)
          userId.push(x[user].userId);
          console.log(userId)
        }*/
        this.userNames.push(x[user].userName)
        this.userIds.push(x[user].userId)
      }
    });
    console.log(this.userNames)
    console.log(this.userIds)
  }


  onSubmit(): void {
    let chore_info = this.createChoreForm.value;
    let chore_name = chore_info.chore_name!;
    let assigned_to = chore_info.assigned_to!;

    // Retrieve userId given username
    let x: any
    let userIdKey = 0;
    for (x in this.userNames) {
      if (this.userNames[x] === assigned_to) {
        userIdKey = x;
      }
    }

    let userId = this.userIds[userIdKey];

    let due_date_str = chore_info.due_date!;
    let due_date = new Date(due_date_str);
    let repeat_for = chore_info.repeat_for!;
    let points = parseInt(chore_info.points ?? "0");

    let errors = [];

    if (chore_info.chore_name == "") {
      errors.push("A chore must have a name");
    }
    if (chore_info.assigned_to == "") {
      errors.push("A chore must be assigned to someone");
    }
    if (chore_info.due_date == "") {
      errors.push("A chore must have a due date");
    }
    if (chore_info.repeat_for == "") {
      errors.push("A chore must have a repeat for");
    }
    if (chore_info.points == "") {
      errors.push("A chore must have points");
    }


    if (errors.length > 0) {
      let errorString = "";
      for (let error of errors) {
        errorString += error + "\n";
      }
      alert(errorString);
      return;
    }

    let chore: Chore =
    {
      name: chore_name,
      createdBy: 'Jeff',
      assignedTo: this.userIds[userIdKey],
      completionStatus: "in progress",
      accepted: false,
      choreId: 123,
      assignedDate: new Date(),
      dueDate: due_date,
      repeatFor: repeat_for,
      points: points,
    }


    this.choreService.createChore(chore).subscribe(
      {
        next: () => this.onSuccess(),
        error: (err) => this.onError(err)
      }
    );
    console.log(chore)
  }

  private onSuccess() {
    this.createChoreForm.reset();
    alert("New Chore Created!");
  }

  private onError(err: any) {
    console.error(err);
    alert("Error occurred: " + err.message);
  }

}
