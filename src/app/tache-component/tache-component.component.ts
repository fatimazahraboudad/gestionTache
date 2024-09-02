import { Component } from '@angular/core';
import { Task } from '../Model/Task';

@Component({
  selector: 'app-tache-component',
  templateUrl: './tache-component.component.html',
  styleUrls: ['./tache-component.component.css']
})
export class TacheComponentComponent {
 listTache:Task[] =[  
  {id:1, description:"tache 1", completed:false,date:new Date()},
  {id:2, description:"tache 2", completed:true,date:new Date()},
  {id:3, description:"tache 3", completed:false,date:new Date()},
  {id:4, description:"tache 4", completed:false,date:new Date()}
]

Onclick(id :number){
  let task = this.listTache.find(t => t.id === id);
  if(task)  
  {
    task.completed=!task.completed;
  }
}


newTaskDescription: string = '';
addTask() {
    const newTask: Task = {
      id: this.listTache.length + 1,
      description: this.newTaskDescription,
      completed: false,
      date:new Date()
    };
    this.listTache.push(newTask);
    this.newTaskDescription = '';
  
}








}
