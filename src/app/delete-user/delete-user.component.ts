import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.scss'
})
export class DeleteUserComponent {
  deletedData:any={}
  constructor(private service:UserService){}

  ngOnInit(){
     //GET: get all post
   this.service.deleteUser(1).subscribe((data)=>{
    this.deletedData=data
});
  }
}
