import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

//*Insert all the used material modules in the array
const MODULE = [
    MatToolbarModule, MatButtonModule, MatIconModule,
    FlexLayoutModule
];

@NgModule({
    imports: MODULE,
    exports: MODULE
})
export class MaterialModule {}