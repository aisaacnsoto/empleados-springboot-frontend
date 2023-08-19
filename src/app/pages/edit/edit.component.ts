import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  empleado: Empleado;
  id: string;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private _crudService: CrudService) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._crudService.getEmpleado(this.id).subscribe(data => {
      this.empleado = data;
    });
  }

  onSubmit(empleado:Empleado) {
    this._crudService.updateEmpleado(this.id, empleado).subscribe({
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
