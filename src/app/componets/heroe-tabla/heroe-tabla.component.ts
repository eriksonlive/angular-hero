import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroe-tabla',
  templateUrl: './heroe-tabla.component.html',
  styleUrls: ['./heroe-tabla.component.css']
})
export class HeroeTablaComponent implements OnInit {

  //@Input() heroTable : any  = {};
  @Input() heroTable: any[] = [];
  @Input() indexTable: number = 0;

  constructor() { }

  ngOnInit() { }

  abrirModal(item: any) {
    Swal.fire({
      title: item.nombre,
      text: item.descripcion,
      imageUrl: item.img,
      // imageWidth: 400,
      imageHeight: 300,
      imageAlt: 'Custom image',
    });
  }

  delete(id: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Seguro que desea eliminar este HERO?',
      text: "Si aceptas no Puedes Darle marcha atras",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, bórralo!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.heroTable = this.heroTable.filter(function (hero) {
          return hero.idx !== id;
        })
        swalWithBootstrapButtons.fire(
          'Eliminado!',
          'Dato eliminado con exito',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Has cancelado, dato salvado :)',
          'error'
        )
      }
    })

  }

}
