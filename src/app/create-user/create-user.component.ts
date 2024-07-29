import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'] // Corrected
})
export class CreateUserComponent {
constructor(private service:UserService,private router:Router){}

  newUser={
    name:'',
    email:''
  }

  createUser(): void {
    console.log(this.newUser.name)
    this.service.createUser(this.newUser).subscribe({
      next:(data) => {
        this.router.navigate(["/users"])
      },
      error:(err) => {
        console.log(err);
      }
    })
        

  }

}
