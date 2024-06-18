import { Component, OnInit } from '@angular/core';
import { MunicipiosService } from '../municipios.service';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.css']
})
export class MunicipiosComponent implements OnInit {

  municipios: any;
  uf: string = 'SP';

  constructor(private municipiosService: MunicipiosService) { }

  ngOnInit(): void {
    this.getMunicipios();
  }

  getMunicipios(): void {
    this.municipiosService.getMunicipios(this.uf).subscribe(data => {
      this.municipios = data;
    });
  }
}
