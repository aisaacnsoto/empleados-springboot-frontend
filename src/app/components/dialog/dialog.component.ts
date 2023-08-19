import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Empleado } from 'src/app/models/empleado.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  empleadoForm: FormGroup;
  title = 'Nuevo';
  buttonTitle = 'Guardar'
  editMode = false;

  constructor(
    private _dialogReference: MatDialogRef<DialogComponent>,
    private _fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _crudService: CrudService,
    @Inject(MAT_DIALOG_DATA) private _data: Empleado
  ) { }

  ngOnInit(): void {
    this.empleadoForm = this._fb.group({
      nombre: ['', Validators.required ],
      apellido: ['', Validators.required ],
      dni: ['', Validators.required ],
      email: ['', Validators.required ],
    });

    if (this._data) {
      this.empleadoForm.patchValue(this._data);
      this.title = 'Edición';
      this.buttonTitle = 'Editar'
      this.editMode = true;
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });
  }

  onActionClick() {
    if (this.empleadoForm.valid) {
      this.editMode ? this.updateProduct() : this.saveProduct();
    }
  }

  saveProduct() {
    this._crudService.createEmpleado(this.empleadoForm.value).subscribe({
      next: (data) => this.handleResponse('Registrado correctamente!', 'OK', 'creado'),
      error: (err) => this.handleError(err)
    });
  }

  updateProduct() {
    this._crudService.updateEmpleado(this._data.id, this.empleadoForm.value).subscribe({
      next: (data) => this.handleResponse('¡Editado correctamente!', 'OK', 'editado'),
      error: (err) => this.handleError(err)
    });
  }

  handleResponse(message: string, buttonTitle: string, tag: string) {
    this.openSnackBar(message, buttonTitle);
    this._dialogReference.close(tag);
  }

  handleError(err) {
    console.log(err);
    this.openSnackBar(`No se pudo ${this.buttonTitle.toLowerCase()}`, 'OK');
  }

}
