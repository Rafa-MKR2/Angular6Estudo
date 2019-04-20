import { NgModule } from '@angular/core';
import {  Routes, RouterModule} from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ContentHomeComponent } from './home/content-home/content-home.component';


const routes: Routes =[
    {path:'', component: ContentHomeComponent},
    {path:'**', component: NotFoundComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}