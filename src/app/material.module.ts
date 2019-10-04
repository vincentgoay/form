import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMomentDateModule } from '@angular/material-moment-adapter'
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

//*Insert all the used material modules in the array
const MODULE = [
    MatToolbarModule, MatButtonModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatMomentDateModule,
    MatSliderModule, MatRadioModule, MatCheckboxModule,
    FlexLayoutModule
];

@NgModule({
    imports: MODULE,
    exports: MODULE
})
export class MaterialModule { }