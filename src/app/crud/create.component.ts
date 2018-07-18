import { Component } from '@angular/core';

@Component({
    selector: 'tabla-crud',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent {
    title = 'Crud con Angular 5';

    constructor() { }

    nombre: any = null;
    email: any = null;

    listar: boolean = true;
    crear: boolean = false;
    editar: boolean = false;

    indice: number = 0;


    usuarios: Datos[] = [
        { nombre: "Omar", email: "om4rcode@gmail.com" },
        { nombre: "Adriano", email: "adriano@gmail.com" },
        { nombre: "Cristhian", email: "cris@gmail.com" },
        { nombre: "Manolo", email: "mrb@gmail.com" },
    ]

    validar() {
        if (this.crear) {

            let dataInsert: Datos = {
                nombre: this.nombre,
                email: this.email
            };
            this.usuarios.push(dataInsert);
            this.nombre = null;
            this.email = null;
            this.regresar();

        } else {

            this.usuarios[this.indice].nombre = this.nombre;
            this.usuarios[this.indice].email = this.email;

            this.regresar();

        }
    }

    editarUsuario(index: number) {

        let editData = this.usuarios[index];
        this.nombre = editData.nombre;
        this.email = editData.email;
        this.indice = index;
    }

    eliminar(index : number) {
        this.usuarios.splice(index, 1);
    }

    regresar() {
        this.editar = false;
        this.crear = false;
        this.listar = true;
        this.nombre = null;
        this.email = null;
    }


}

interface Datos {
    nombre: string,
    email: string
}
