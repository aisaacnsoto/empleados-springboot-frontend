import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado.model';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(
    private _crudService: CrudService,
    private _router: Router,
  ) {
  }

  onSubmit(empleado:Empleado) {
    this._crudService.createEmpleado(empleado).subscribe({
      next: () => {
        this._router.navigateByUrl('/');
      },
      error: (err) => {
        console.log(err)
        this._router.navigateByUrl('/');
      }
    });
  }

}
