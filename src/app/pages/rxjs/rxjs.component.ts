import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() {

    // una forma de transformar la informacion que fluye a traves del observable.
    this.retornObservable()
      .pipe(
        retry(1) // asi se le dice que intente una sola vez.
      )
      .subscribe(
        // me subscribo al observable porque si nadie esta subscripto no se ejecuta, ¿ para que sino ?
        (valor) => console.log('Subs:', valor),
        (error) => console.warn('Error', error),
        () => console.info('Obs terminado')
        // el renglon de arriba es lo que se ejecuta cuando se ejecuta el complete del observer, no se pone nada porque no tiene parametros
      );

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo() {
    return interval(1000).pipe(
      //take(10), // toma 4 valores
      map((valor) => valor + 1), // transforma el valor enviado por el que queramos( valor en valor + 1)
      filter((valor) => (valor % 2 === 0 ? true : false)) // solo los pares
    );
  }

  retornObservable(): Observable<number> {

    let i = -1;

    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        // linea de abajo, le dice al observer que emita el valor
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          // se ejecuta el error y no sigue el observable.
          observer.error('i llego al valor de 2');
        }
      }, 1000);
    });

  }

}
