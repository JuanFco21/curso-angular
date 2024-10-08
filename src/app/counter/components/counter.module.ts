import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";

@NgModule({
    providers: [],
    exports: [
        CounterComponent
    ],
    imports: [
        CounterComponent
    ]
})
export class CounterModule{}