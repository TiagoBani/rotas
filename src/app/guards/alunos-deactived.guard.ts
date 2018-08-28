import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

// import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { IFormCanDeactivated } from './ifrom-candeactivated';

@Injectable()
export class AlunosDeactivedGuard implements CanDeactivate<IFormCanDeactivated> {
        constructor() {}
        canDeactivate(
            component: IFormCanDeactivated,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            console.log('Passou guarda desativação');
            // return !component.formMudou;
            // return component.podeMudarRota();
                return component.podeDesativar();
    }
}
