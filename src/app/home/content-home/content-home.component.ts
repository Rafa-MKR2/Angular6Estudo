import { Component, OnInit } from '@angular/core';
import { ContosService } from 'src/app/lista-contos/contosService';
import { Character } from 'src/app/models/cardaudio';

@Component({
  selector: 'app-content-home',
  templateUrl: './content-home.component.html',
  styleUrls: ['./content-home.component.css']
})


export class ContentHomeComponent implements OnInit {

  lista:Character[]=[];
  filter:string='';

  constructor(private service: ContosService) { }

  ngOnInit() {
    
    this.service.lista().subscribe(date=> this.lista = date.results)

  }

  searchInput(text: string){
   return this.filter = text;
  }
  


}
