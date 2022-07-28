import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Ariel Carro'
  alumnos = [
    {
      nombres: 'Ariel',
      apellido: 'Carro',
      notaFinal:6,
    },
    {
      nombres: 'Juan Gabriel',
      apellido: 'Perez',
      notaFinal:8,
    },
      {
        nombres: 'Lisandro Tomas',
        apellido: 'Gonzales',
        notaFinal:5,
      },
      {
        nombres: 'Franco',
        apellido: 'Firpo',
        notaFinal:3,
      },
      {
        nombres: 'Mariana',
        apellido: 'Casas',
        notaFinal:7,
      },
  ]
}
