import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent  {

//para no inicializar las variables podemos realizar una configuración en el archivo JSON
@Input() resultadoHijo: number;

}
