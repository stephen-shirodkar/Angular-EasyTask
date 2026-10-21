import { Component,computed,Input,Output,EventEmitter,output,input} from '@angular/core';

type UserType  = {
  id: string;
  avatar: string;
  name: string;
};

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required:true}) selected!: boolean;
  @Input({required: true})  user!:UserType;
  // @Input({required: true}) id !:string ;
  // @Input({required: true}) avatar !:string ;
  // @Input({required: true}) name !:string ;
  // @Output() Select = new EventEmitter<string>();
  
  Select = output<string>(); // Signal method for output
  // avatar = input.required<string>(); Signal method for input 
  // name = input.required<string>();

  //  imagepath = computed(() => '/user/' + this.avatar());
  get imagepath(){
    return '/user/' + this.user.avatar;
  }
  onSelectUser() {
    this.Select.emit(this.user.id);
    
  }
}
