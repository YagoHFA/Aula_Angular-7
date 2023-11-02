import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent {

  tarefa1:Tarefa = new Tarefa("Abrir a Janela");
  tarefa2:Tarefa = new Tarefa("Limpar a sala");
  tarefa3:Tarefa = new Tarefa("Fazer Compras");
  tarefa4:Tarefa = new Tarefa("Organizar a pasta projetos do computador");
  tarefa5:Tarefa = new Tarefa("Arrumar a torneira");


  tarefas:Array<Tarefa>= [this.tarefa1,this.tarefa2,this.tarefa3,this.tarefa4,this.tarefa5];

  mudaEstado(tafera:Tarefa){
    this.tarefas.push()
    tafera.concluida ? tafera.concluida = false: tafera.concluida = true


   }

  }

class Tarefa{
 descricao:string = ""
 concluida:boolean = false
 constructor(tarefa:string){
  this.descricao = tarefa
 }
}
