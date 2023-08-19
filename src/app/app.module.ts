import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { ShowComponent } from './pages/show/show.component';
import { GenericFormComponent } from './components/generic-form/generic-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';

import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    ShowComponent,
    GenericFormComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
