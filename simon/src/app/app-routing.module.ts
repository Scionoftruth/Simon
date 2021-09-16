import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HeadingComponent } from './heading/heading.component';
import { GameoverComponent } from './gameover/gameover.component';

const routes: Routes = [
  { path:'', redirectTo:'/game', pathMatch:'full'},
  { path: 'game', component: GameComponent},
  { path: 'gameover', component: GameoverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
