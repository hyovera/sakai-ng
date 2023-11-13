

export class PreAgenda {
  constructor(public id_agenda: number, 
              public cod_agenda:string, 
              public id_cliente: number,
              public cod_documento: string,
              public num_documento: string,
              public nombre_cliente: string,
              public descripcion_agenda: string,
              public id_estado: number,
              public descripcion_estado: string,
              public fecha_creacion: string,
              public fecha_modificacion: string,
              public fecha_asignacion: string,
             ){ }
}


/* export  interface Tecnicos {
               id_tecnico: number, 
               cod_tecnico:string, 
               nombre: string,
               apellido: string,
               nombre_tecnico: string,
               id_situacion: number,
               des_situacion: string,
              
} */

export interface Tecnicos {
  id_tecnico: number, 
               cod_tecnico:string, 
               nombre: string,
               apellido: string,
               nombre_tecnico: string,
               id_situacion: number,
               des_situacion: string,
}



export class Agenda {
  constructor(public id_agenda: number, 
              public cod_agenda:string, 
              public id_cliente: number,
              public cod_documento: string,
              public num_documento: string,
              public nombre_cliente: string,
              public descripcion_agenda: string,
              public id_estado  : number,
              public descripcion_estado  : string,
              public fecha_creacion  : string,
              
             ){ }
}

export class AgendaResponse  {
  constructor(public bSatisfactorio: boolean,
  public  sMessage: string,
             ){ }
}

