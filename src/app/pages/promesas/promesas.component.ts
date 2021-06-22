import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [],
})
export class PromesasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /*const promesa = new Promise((resolve, reject) => {
      if (true) {
        resolve('Hola mundo');
      } else {
        reject('Algo salio mal');
      }
    });

    // esto se ejecuta cuando la promesa se resuelve
    promesa.then((mensaje) => {
      console.log(mensaje);
    })
    .catch(error => console.log("Error en mi promesa", error));*/

    this.getUsuarios().then((usuarios) => console.log(usuarios));
  }

  getUsuarios() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data));
    });
  }
}
