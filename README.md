# Installazione di Jasmine

E' necessario installare i package, e configurare l'accesso ai test
- inserire tra le DEPENDENCIES i due package *jasmine-core* e *@types/jasmine*
- importare le librerie nell'applicazione
- definire uno stile specifico per i risultati
- definire un main specifico per il testing
- per eseguire il test, modificare l'entry-point della app indirizzandola sul nuovo main
- definire i test da eseguire in un file app.component.spec.ts (indicato nel nuovo main)

Utilizzando l'ambiente di sviluppo da linea di comando queste configurazioni sono eseguite automaticamente.

Credits: [Link](https://lukasznojek.com/blog/2019/05/add-jasmine-unit-testing-support-to-angular-in-stackblitz/)

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-sswngtemperature)