import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditSkillComponent } from './components/hard-and-soft-skills/edit-skill.component';
import { NewSkillComponent } from './components/hard-and-soft-skills/new-skill.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"nuevaexp", component: NewExperienciaComponent},
  {path:"editexp/:id", component: EditExperienciaComponent},
  {path:"nuevaedu", component: NeweducacionComponent},
  {path:"editedu/:id", component: EditeducacionComponent},
  {path:"newskill", component: NewSkillComponent},
  {path:"editskill/:id", component: EditSkillComponent},
  {path:"newproyecto", component: NewProyectoComponent},
  {path:"editproyecto/:id", component: EditProyectoComponent},
  {path:"editacercade/:id", component: EditAcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
