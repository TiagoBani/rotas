import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';

@Injectable()
export class AlunosDeactivedGuard implements CanDeactivate<AlunoFormComponent> {
        constructor() {}
        canDeactivate(
            component: AlunoFormComponent,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            console.log('Passou guarda desativação');
            // return !component.formMudou;
            return component.podeMudarRota();
    }
}
