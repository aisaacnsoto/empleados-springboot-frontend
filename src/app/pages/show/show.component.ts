import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { Empleado } from 'src/app/models/empleado.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit  {

  empleados: Empleado[] = [];

  displayedColumns: string[] = ['nombre', 'apellido', 'dni', 'email', 'actions'];
  dataSource: MatTableDataSource<Empleado>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _crudService: CrudService, private dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.listarEmpleados();
    
  }

  onCreateClick() {
    this.openDialog();
  }

  onEditClick(Empleado: Empleado) {
    this.openDialog(Empleado);
  }

  onDeleteClick(id: string, index: number) {
    this.deleteEmpleado(id, index);
  }

  listarEmpleados() {
    this._crudService.getEmpleados().subscribe(
      data => {
        this.empleados = data;
        this.dataSource = new MatTableDataSource<Empleado>(this.empleados);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(Empleado?: Empleado) {
    this.dialog.open(DialogComponent, {
      disableClose: true,
      width: '200px',
      data: Empleado
    }).afterClosed().subscribe(result => {
      if (result === 'editado' || result === 'creado') {
        this.listarEmpleados();
      }
    });
  }

  deleteEmpleado(id: string, index: number) {
    console.log(id,index);
    
    this._crudService.deleteEmpleado(id).subscribe(
      data => {
        this.listarEmpleados();
        this.empleados.splice(index, 1);
        this._snackBar.open('¡Eliminado correctamente!', 'OK', {
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
      }
    );
  }



}
