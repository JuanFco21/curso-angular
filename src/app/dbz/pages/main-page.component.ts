import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { ListComponent } from '../components/list/list.component';
import { AddCharacterComponent } from '../components/add-character/add-character.component';



@Component({
    standalone: true,
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
    imports: [
        ListComponent,
        AddCharacterComponent
    ]
})

export class MainPageComponent {
    constructor(public dbzService: DbzService) { }
}