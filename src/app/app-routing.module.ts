import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './pages/show/show.component';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  { path: '', component: ShowComponent, title: 'Empleados' },
  { path: 'create', component: CreateComponent, title: 'Crear empleado' },
  { path: 'update/:id', component: EditComponent, title: 'Actualizar empleado' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
