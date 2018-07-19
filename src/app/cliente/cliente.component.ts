import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
    selector: 'tutoriales',
    templateUrl: './cliente.component.html',
    styleUrls: ['./cliente.component.css']
})

export class ClienteComponent { 

    color_seleccionado : string = '#ccc';
    color : string ="blue";
    public lista_usuarios : Array<Cliente>;
    public cliente : Cliente;

    constructor() {
        this.cliente = new Cliente("omar", 29);
        this.lista_usuarios = [
            new Cliente("adrianito", 8),
            new Cliente("monica", 30),
            new Cliente("carmen", 65),
        ];
    }

    ngOnInit() {

    }
}