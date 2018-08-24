import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  proximaPagina() {
    // this.pagina++;
    this.router.navigate(['/cursos'],
    { queryParams: { pagina: ++this.pagina } });
  }
  voltarPagina() {
    // this.pagina--;
    this.router.navigate(['/cursos'],
    { queryParams: { pagina: --this.pagina } });
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
