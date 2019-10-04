import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FlexLayoutModule } from '@angular/flex-layout';

//*Insert all the used material modules in the array
const MODULE = [
    MatToolbarModule, MatButtonModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule,
    FlexLayoutModule
];

@NgModule({
    imports: MODULE,
    exports: MODULE
})
export class MaterialModule { }