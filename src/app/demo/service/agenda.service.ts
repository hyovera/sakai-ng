import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
//import { ProveedorActivos } from '../admin/activos/add-edit-act/proveedoractivos';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class AgendaService {


   // identidad: boolean = false;

  //private loggedIn = new BehaviorSubject<boolean>(false);
  

  
  constructor(private http:HttpClient, private router: Router ) {}
  listado:any=[];
  idproducto:any;
  codigoBarra:any;
  nombre:any;
  marca:any;
  categoria:any;
  

 public getListarPreAgenda():Observable<any[]>{
    return this.http.get<any>(`${environment.endPoint1}`+'api/v1/agenda/lista_pre_agenda');
  }
  public getListarTecnico():Observable<any[]>{

    return this.http.get<any>(`${environment.endPoint1}`+'api/v1/tecnico/lista');
  }

  public getListarAgenda():Observable<any[]>{

    return this.http.get<any>(`${environment.endPoint1}`+'api/v1/agenda/lista_todo');
   
  }


  public getListarCliente(body: any): Observable<any[]> {
    return this.http.post<any[]>(`${environment.endPoint1}api/v1/cliente/lista_filter`, body);
  }

  public RegistroPreAgenda(body: any): Observable<any[]> {
    return this.http.post<any[]>(`${environment.endPoint1}api/v1/agenda/crea`, body);
  }

  public RegistroPreAgendaAsignacion(body: any): Observable<any[]> {
    return this.http.post<any[]>(`${environment.endPoint1}api/v1/agenda/asignar`, body);
  }


  
 /*  public getSucList():Observable<any[]>{
  
    return this.http.get<any>(this.APIUrl+'activossucursal');
    // return this.http.get<any>('http://localhost:5124/api/Producto/Lista');
  }

  public getActList(val:any){
  
    return this.http.post<any>(this.APIUrl+'activosfijos',val);
    // return this.http.get<any>('http://localhost:5124/api/Producto/Lista');
  }


  
  addAlumno(val:any){
    return this.http.post<any>(this.APIUrl+'insertaractivosfamilia',val);
  }
  
  updateAlumno(val:any){
    return this.http.post<any>(this.APIUrl+'actualizafamilia',val);  
  }
  
  deleteAlumno(val:any){
    return this.http.post<any>(this.APIUrl+'eliminaFAMILIA',val);
  }

  getSubList(val:any){
  
    return this.http.post<any>(this.APIUrl+'activossubfamilia',val);
    // return this.http.get<any>('http://localhost:5124/api/Producto/Lista');
  }

  addSubFamilia(val:any){
    return this.http.post<any>(this.APIUrl+'insertaractivossubfamilia',val);
  }
  updateSubFamilia(val:any){
    return this.http.post<any>(this.APIUrl+'actualizasubfamilia',val);  
  }
  deleteSubFamilia(val:any){
    return this.http.post<any>(this.APIUrl+'eliminaSubFamilia',val);
  }

  addActivo(val:any){
    return this.http.post<any>(this.APIUrl+'insertaractivosfijos',val);
  }
  updateActivo(val:any){
    return this.http.post<any>(this.APIUrl+'actualizaactivosfijos',val);  
  }
  deleteActivoFijo(val:any){
    return this.http.post<any>(this.APIUrl+'eliminaactivosfijos',val);
  }
  deleteDetalleActivoFijo(val:any){
    return this.http.post<any>(this.APIUrl+'eliminadetalleactivosfijos',val);
  }
  
  // getLoginUsuario(val:any){
  //   return this.http.post<any>('http://localhost:5124/api/Autenticacion/Validar',val);
  // }
  
  addDetalleActivo(val:any){
    return this.http.post<any>(this.APIUrl+'insertardetalleactivosfijos',val);
  }
   */
  
  // obtenerIndentidad() {
  //   let indentidad =  localStorage.getItem('token');
  //   if (indentidad != undefined) {
  //     this.identidad = true;
  //   } else {
  //     this.identidad = false;
  //   }
  //   return this.identidad;
  // }
  
  // cerrarSesion(){
  //   let token = sessionStorage.getItem('token');
  
  //   if(token){
  //     this.identidad = false;
  //     sessionStorage.clear();
  //       this.router.navigate(['login']);
  //   }else{
  //     this.identidad = false;
  //     sessionStorage.clear();
  //     this.router.navigate(['login']);
  //   }
  // }
  
  // salirApp(){
  
  //   localStorage.removeItem('token')
  
  // }
  
 /*  public getSitList():Observable<any[]>{
  
    return this.http.get<any>(this.APIUrl+'activossituacion');
    // return this.http.get<any>('http://localhost:5124/api/Producto/Lista');
  }
  public getEmpList():Observable<any[]>{
  
    return this.http.get<any>(this.APIUrl+'activosempleados');
    // return this.http.get<any>('http://localhost:5124/api/Producto/Lista');
  }

  public getEstadoAsigList():Observable<any[]>{
  
    return this.http.get<any>(this.APIUrl+'activosestadoasignado');
    // return this.http.get<any>('http://localhost:5124/api/Producto/Lista');
  }

  public getEstadoAreaList(val:any){
  
    return this.http.post<any>(this.APIUrl+'activosarea',val);
    // return this.http.get<any>('http://localhost:5124/api/Producto/Lista');
  }

  addaArea(val:any){
    return this.http.post<any>(this.APIUrl+'insertaractivosarea',val);
  }
  updateArea(val:any){
    return this.http.post<any>(this.APIUrl+'actualizaarea',val);  
  }
  deleteArea(val:any){
    return this.http.post<any>(this.APIUrl+'eliminaarea',val);
  }

  public getOriList():Observable<any[]>{
  
    return this.http.get<any>(this.APIUrl+'activosorigenes');
    // return this.http.get<any>('http://localhost:5124/api/Producto/Lista');
  } */
 
  
 /*  getProveedorList(descripcion: string): Observable<ProveedorActivos[]>{
    let parametros = {
      Descripcion: descripcion,
    }
    const url = this.APIUrl+`listaproveedoresactivos`
    return this.http
               .post(url, parametros)
               .pipe(map((resp: any) => resp.oData));
  }
 */
  }