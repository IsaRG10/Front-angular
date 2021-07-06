import { Producto } from './../../models/producto';
import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Array<Producto> = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.getListaProductos();
  }

  getListaProductos(){
    this.productoService.getLista().subscribe(res =>{
      this.productos = res;
      console.log(res);
    })
  }

}
