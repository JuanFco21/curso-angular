import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

@NgModule({
    declarations: [],
    exports: [
        HeroComponent,
        ListComponent,
    ],
    imports: [
        HeroComponent,
        ListComponent,
        CommonModule
    ],
})
export class HeroesModule{}