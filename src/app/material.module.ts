import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

//*Insert all the used material modules in the array
const MODULE = [MatToolbarModule, MatButtonModule, MatIconModule];

@NgModule({
    imports: MODULE,
    exports: MODULE
})
export class MaterialModule {}