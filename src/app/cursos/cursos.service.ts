import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCurso(id: Number) {
    let cursos = this.getCursos();

    for (let i = 0; i < cursos.length; i++) {
      const curso = cursos[i];
      if (curso.id === Number(id) ) {
        return curso;
      }
    }
    return null;
  }
  getCursos() {
    return [
      {id: 1, nome: 'Angular2'},
      {id: 2, nome: 'Java'},
    ];
  }
}
