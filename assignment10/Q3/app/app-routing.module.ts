import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: '', component: TechnologiesComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
