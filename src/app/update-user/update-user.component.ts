import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent implements OnInit{
  user: User = { id: 0, name: '', email: '' }; // Initialize with default values
  id: number=0;

  constructor(
    private service: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.service.getAllUsers().subscribe(users => {
      this.user = users.find(u => u.id === this.id)!;
    });
  }
  updateUser(): void {
    this.service.updateUser(this.id, this.user).subscribe({
      next: () => {
        this.router.navigate(['/users']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  

}
