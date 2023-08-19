import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from 'src/app/models/empleado.model';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent implements OnInit {
  
  formGroup: FormGroup;

  @Input()
  modelEmpleado: Empleado;

  @Output()
  submit: EventEmitter<Empleado> = new EventEmitter<Empleado>();

  constructor(private _fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.formGroup = this._fb.group({
      nombre: ['', Validators.required ],
      apellido: ['', Validators.required ],
      dni: ['', Validators.required ],
      email: ['', Validators.required ],
    });

    if (this.modelEmpleado) {
      this.formGroup.patchValue(this.modelEmpleado);
    }
  }

  save() {
    this.submit.emit(this.formGroup.value);
  }
}
