import { Component, OnInit } from '@angular/core';
import { MesaService } from 'src/app/shared/services/mesa.service';
import { MesaDto } from 'src/app/shared/interfaces/mesa.dto';

@Component({
  selector: 'app-lista-mesa',
  templateUrl: './lista-mesa.component.html',
  styleUrls: ['./lista-mesa.component.css']
})
export class ListaMesaComponent implements OnInit {

  mesas: MesaDto[];

  constructor(private mesaService: MesaService) { }

  ngOnInit(): void {
    this.mesaService.listarMesas().subscribe(res => this.mesas = res);
  }

}
