import { Padrao } from './padrao';

export class Filho extends Padrao {

  public static P_NOME : number = 1;
  public static P_DTNASCIMENTO : number = 2;
  public static P_TELEFONE : number = 3;
  public static P_CARGO : number = 4;

  public nome:string="";
  public dtNacimento:Date=new Date;
  public telefone:string = "";
  public cargo:string="";
}
