///<reference path="./../typings/globals/core-js/index.d.ts"/>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppComponent } from './app';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TodosComponent } from './todos';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers:[],
    declarations: [TodosComponent],
    bootstrap: [TodosComponent]
})
export class AppModule { }