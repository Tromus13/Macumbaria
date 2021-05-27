export class Util {

  public static validarCampo(value:any):string {
    if(value) {
      if(value == '?') {
        return '-';
      } else {
        return value;
      }
    }
    return "-";
  }
  public static formatTelefone(tel:string):string {
    if(tel.length == 11) {
      let ddd:string = tel.substring(0,2);
      let nr:string = tel.substring(2);

      let firstNum = nr.substring(0,5);
      let lastNum = nr.substring(5);
      return "("+ddd+")"+firstNum +"-"+lastNum;
    }

    return tel;
  }

  public static formatData(value:Date):string {
    if(isNaN(value.getTime())) {
      return '-'
    } else {
      return ((Util.colocarZero(value.getDate() + 1) )) + "/" + (Util.colocarZero((value.getMonth() + 1))) + "/" + value.getFullYear();
    }
    return '-';
  }

  public static showAniversario(value:Date) : string {
    if(isNaN(value.getTime())) {
      return '-'
    } else {
      let desc = Util.getMesesPorExtenso().find((mes) => mes.index == value.getMonth())?.desc;
      return ((Util.colocarZero(value.getDate() + 1) )) +' de '+ desc;
    }
  }
  /**
  * Janeiro = 01
  * Dezembro = 11
  */
  public static colocarZero(numMes: number): string {
      if (numMes.toString().length < 2) {
        return '0' + numMes.toString();
      }

      return numMes.toString();
    }
  /** Recuperar os meses */
  public static getMesesPorExtenso() {
    return [
      {index:0,  desc:"Janeiro",   curto:"Jan"},
      {index:1,  desc:"Fevereiro", curto:"Fev"},
      {index:2,  desc:"Março",     curto:"Mar"},
      {index:3,  desc:"Abril",     curto:"Abr"},
      {index:4,  desc:"Maio",      curto:"Mai"},
      {index:5,  desc:"Junho",     curto:"Jun"},
      {index:6,  desc:"Julho",     curto:"Jul"},
      {index:7,  desc:"Agosto",    curto:"Ago"},
      {index:8,  desc:"Setembro",  curto:"Set"},
      {index:9,  desc:"Outubro",   curto:"Out"},
      {index:10, desc:"Novembro",  curto:"Nov"},
      {index:11, desc:"Dezembro",  curto:"Dez"}
    ];
  }
}
