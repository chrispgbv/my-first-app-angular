import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from 'src/app/todo/compnents/todos/todos.component';
import { HeaderComponent } from 'src/app/todo/compnents/header/header.component';
import { TodosService } from './services/todos.service';
import { MainComponent } from 'src/app/todo/compnents/main/main.component';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './compnents/todo/todo.component';
import { FooterComponent } from './compnents/footer/footer.component';
const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [CommonModule,RouterModule.forChild(routes)],
  providers: [TodosService],
})

 

export class ModuleTodo{}
