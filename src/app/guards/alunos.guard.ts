import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AlunosGuard implements CanActivateChild {
    constructor() {}

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        // console.log(route);
        // console.log(state);

        console.log('Passou pela guarda de Alunos');

        if (state.url.includes('editar')) {
        //    alert('Usuario sem acesso!');
        //    return false;
        }
        return true;
    }
}
