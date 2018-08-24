import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';

// import { routing } from './app.routing';
// import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CursosRoutingModule } from './cursos/cursos.routing.module';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
// import { CursosService } from './cursos/cursos.service';
// import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CabecalhoComponent,
    // CursosComponent,
    // CursoDetalheComponent,
    // CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    // routing,
    FormsModule,
    // AppRoutingModule,
    CursosRoutingModule,
    CursosModule
  ],
  // providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
