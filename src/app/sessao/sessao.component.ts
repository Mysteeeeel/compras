import { Component } from '@angular/core';
import Swal from 'sweetalert2'
 
@Component({
  selector: 'app-sessao',
  templateUrl: './sessao.component.html',
  styleUrls: ['./sessao.component.scss']
})
export class SessaoComponent {

  comprar(){
    Swal.fire({
      title: "deseja comprar este produto?",
      showDenyButton: true,
      confirmButtonText: "sim",
      denyButtonText: `cancelar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Produto comprado com sucesso", "", "success");

      }
    });
  }

}