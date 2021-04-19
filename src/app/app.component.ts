import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public operacion: string = "";
  public acumOp: number = 0;
  ngOnInit() {
    this.operacion = "";
    // aqui van la inicializacion de variables
  }
  setOperacion(num: string) {
    this.operacion += num;
  }
  setAgregarOperador(op: string) {
    if (this.acumOp <= 0) {
      this.operacion += op;
      this.acumOp++;
    } else {
      this.getResultado();
      this.operacion += op;
    }
  }
  getResultado() {
    let datos: any = this.operacion;
    let i = datos.indexOf("+");
    let op = ""; // operador
    let x: number;
    let arr: number;
    if (datos.indexOf("+") > -1) {
      op = "+";
    } else if (datos.indexOf("-") > -1) {
      op = "-";
    } else if (datos.indexOf("x") > -1) {
      op = "x";
    }
    if (op != "") {
      switch (op) {
        case "+":
          arr = datos.split("+");
          x = parseInt(arr[0]) + parseInt(arr[1]);
          break;

        case "-":
          arr = datos.split("-");
          x = parseInt(arr[0]) - parseInt(arr[1]);
          break;

        case "x":
          arr = datos.split("x");
          x = parseInt(arr[0]) * parseInt(arr[1]);
          break;
      }
      this.operacion = x.toString();
    } else {
      alert("Faltan datos");
    }
  }
}
