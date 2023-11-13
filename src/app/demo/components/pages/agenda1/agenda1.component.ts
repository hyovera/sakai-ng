import { Component, OnInit } from '@angular/core';
import { AgendaService, } from '../../../service/agenda.service';
import { Agenda, PreAgenda,Tecnicos,AgendaResponse } from '../../../modelo/app.models';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
    templateUrl: './agenda1.component.html',
    providers: [MessageService]
})
export class Agenda1Component implements OnInit {
    formularioFG!: FormGroup;
    showSpinner: boolean = false;
    loading:boolean=false;
   // dni: string = "";
    visibleformularioRegistrocliente: boolean=true

    public preagenda:PreAgenda[]= [];
    public tecnicos:Tecnicos[]= [];
    public agenda:Agenda[]= [];
    cols: any[] = [];
    cols1: any[] = [];
    abrirModalPreagenda: boolean = false;
    selectedPreAgenda: PreAgenda[] = [];
    valueTecnicos: any;
    selectedTecnicos: Tecnicos[] = [];

    selectedTecnicosAsignado: any;
    filteredtecnico: Tecnicos[] = [];

    selectedState: any = null;
    selectedStateDocumento: any = null;
    nuevoDetalle:string;
    detalles: any[]=[];
    contadorID: number = 1;
    public AgendaResponse= {}

    bloqueobotonenvio: boolean=false;
    tabactivo: number;
    // 

    fechaSeleccionadaAsignacion: Date;
    fechaFormateada: string;

    fechaActual: Date ;

  // Establece la fecha mínima como la fecha actual
   //  minimaFechaActual: Date = this.fechaActual;

    //loading = [false, false, false, false];
    constructor(private AgendaService: AgendaService,private messageService: MessageService,  private _fb: FormBuilder,private datePipe: DatePipe) {
 
       this.tabactivo=0;
       this.fechaFormateada = this.formatearFecha(new Date().toISOString());
       this.fechaActual = new Date();
       
      }

      dropdownItems = [
        { name: 'Todo', code: '0' },
        { name: 'Pendiente', code: '1' },
        { name: 'Terminado', code: '2' }
    ];

    documentoCliente = [
      { name: 'D.N.I', code: '1' },
      { name: 'R.U.C', code: '2' },
      { name: 'C.E.', code: '3' }
  ];

      ngOnInit(): void {
     //   this.showSpinner = true;
      this.getPreAgenda();
      this.gettecnicos();
      this.getAgenda();
     // this.showSpinner = false;
      }

      formatearFecha(fecha: string): string {
        // Formato deseado: 'dd/MM/yyyy' (puedes ajustarlo según tus necesidades)
        return this.datePipe.transform(fecha, 'yyyy-MM-dd');
      }

      public getPreAgenda(){
        this.AgendaService.getListarPreAgenda().subscribe(data => {
           console.log(">>>>",data);
           this.preagenda = data; 
         //  this.preagenda.shift();
        }); 

//f_Apellidos
        this.formularioFG = this._fb.group({
           f_Dni: ['', Validators.required],
           f_Documento: ['', ],
           f_Nombre: ['', ],
           f_Apellidos: ['', ],
           idcliente: [0, Validators.required],
           f_Direccion:  [{ value: '', disabled: true } ],
           f_Refefencia: [{ value: '', disabled: true } ],
           f_Telefono:  [{ value: '', disabled: true } ],
           f_Description: ['', Validators.required],
         
        });

    }

    startSpinner() {
      this.showSpinner = true;
    }
  
    // Call this function when you want to hide the spinner
    stopSpinner() {
      this.showSpinner = false;
    }


    public gettecnicos(){
        this.AgendaService.getListarTecnico().subscribe(data => {
            console.log(">>>>",data);
            this.tecnicos = data; 
          //  this.preagenda.shift();
         }); 
    }


    public getAgenda(){
      this.startSpinner()
        this.AgendaService.getListarAgenda().subscribe(data => {
            console.log(">>>>",data);
            this.agenda = data; 
            this.stopSpinner();
          //  this.preagenda.shift();
         }); 

    }

    abrirPreAgenda() {
     this.abrirModalPreagenda=true
    }

    load(index: number) {
        this.loading[index] = true;
        setTimeout(() => this.loading[index] = false, 1000);
    }


 

      toggleCouponSelection(selectedItems: PreAgenda[]) {
        // Your logic to handle selected items
        console.log('Selected items:', selectedItems);
        this.selectedPreAgenda=selectedItems;
      }
   /*    handleSelectedItems(){
        console.log('Selected items:', this.selectedPreAgenda);

      } */


      searchTecnicos(event: any) {
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < this.tecnicos.length; i++) {
            const country = this.tecnicos[i];
            if (country.nombre.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredtecnico = filtered;
      }

      agregarDetalle(){

        if (this.nuevoDetalle) {

            const detalle = {
              id: this.contadorID,
              nombre: this.nuevoDetalle
            };
      
            this.detalles.push(detalle);
           //  console.log(this.detalles)
             this.contadorID++; 
            this.nuevoDetalle = ''; // Limpiar el campo de entrada después de agregar
          }else{
            this.messageService.add({ severity: 'info', summary: 'mensaje', detail: 'Ingrese  nombre' });
           // const config = { panelClass: ['custom-snackbar'] };
          //  this.snackbarService.openSnackBar('Ingrese nombre', 'Cerrar', config);
          }

      }

      eliminarDetalle(index:any) {
        this.detalles.splice(index, 1); // Elimina el detalle por su índice
      }

      buscarClienteDni(){
       // if (this.DniField?.value === '') {
        console.log(this.DniField?.value)
        this.loading=true
       if( this.DniField?.value==""){
        this.messageService.add({ severity: 'info', summary: 'mensaje', detail: 'Ingrese dni' });
       }else{
    //    console.log(this.dni);
    //  this.dni.value
         const parametros={
          "num_documento": this.DniField?.value,
          "nombre_cliente": ""
         }
        this.AgendaService.getListarCliente(parametros).subscribe(data => {
          //console.log(">>>>",data);  
           if(data.length>0){
            this.DireccionField.setValue('Calle 344');
            this.RefenciaField.setValue('Calle 344 por el  puente');
            this.TelefonoField.setValue('23232323');
            //
            //idclienteField
            this.idclienteField.setValue(data[0].id_cliente);
            this.visibleformularioRegistrocliente=true;

           }else{
            this.messageService.add({ severity: 'info', summary: 'mensaje', detail: 'Cliente no encotrado. registrelo' });
            this.DireccionField.enable();
            this.RefenciaField.enable();
            this.TelefonoField.enable();
            this.idclienteField.enable();
            this.DireccionField.setValue('');
            this.RefenciaField.setValue('');
            this.TelefonoField.setValue('');
            this.visibleformularioRegistrocliente=false;
           }
          this.loading=false
         // this.agenda = data; 
         // this.stopSpinner();
        //  this.preagenda.shift();
       }); 

       }

      }

      
      GuardarPreAgenda(event: Event) {
        event.preventDefault();
        this.bloqueobotonenvio=true
      //  console.log(this.DescripcionField.value);
      //  console.log(this.idclienteField.value)  
        //    si  es 0  va  crear  co n to

          if(this.idclienteField.value==0){
             
            this.messageService.add({ severity: 'info', summary: 'mensaje', detail: 'En desarrollo' });



          }else{
            if(this.DescripcionField.value && this.idclienteField.value ){
              //RegistroPreAgenda
               const parametros={
                "id_agenda": 0,
                "id_cliente": this.idclienteField.value,
                "descripcion": this.DescripcionField.value
               }

               this.AgendaService.RegistroPreAgenda(parametros).subscribe((data: any) => {
                console.log(">>>>", data.bSatisfactorio);
               // const info = data;
            
                if (data.bSatisfactorio==true) {
                   // this.messageService.add({ key: 'tst', severity: 'success', summary: 'ok', detail: data.sMessage });

                    this.messageService.add({ severity: 'info', summary: 'mensaje', detail: data.sMessage });
                    this.abrirModalPreagenda=false;
                    this.getPreAgenda();
                    this.bloqueobotonenvio=false
                } else {
                  this.messageService.add({ severity: 'info', summary: 'mensaje', detail: "Error" });
                }
            
                // Rest of the code...
            });

            }


          }
      

      }


       registrarAsignacion(){
        console.log('datatata',this.selectedTecnicosAsignado);

       if(this.selectedPreAgenda.length==0){
        this.messageService.add({ severity: 'info', summary: 'mensaje',  detail:"Seleccione item de pre agenda" });
       }else if(this.selectedTecnicosAsignado==undefined){
        this.messageService.add({ severity: 'info', summary: 'mensaje',  detail:"Seleccione tecnico" });
       }else{
        const idsAgenda = this.selectedPreAgenda.map(agenda => agenda.id_agenda);
        const idsAgendaString = idsAgenda.join(',');
        const fechaasignacion = this.formatearFecha(this.fechaSeleccionadaAsignacion.toString());
        const parametros={
          "id_tecnico": this.selectedTecnicosAsignado.id_tecnico,
          "lista_id_agenda": idsAgendaString,
          "fecha_asignacion": fechaasignacion
         }

         this.AgendaService.RegistroPreAgendaAsignacion(parametros).subscribe((data: any) => {
          if(data.bSatisfactorio==true){
            
            this.messageService.add({ severity: 'info', summary: 'mensaje',  detail: data.sMessage });
           // this.getAgenda();
            this.tabactivo=1
            this.selectedPreAgenda=[];
            this.selectedTecnicosAsignado=null;

          }else{
            this.messageService.add({ severity: 'info', summary: 'mensaje',  detail:"Error" });

          }


         })


       }
       } 

       seleccionarFecha(event: any) {
        this.fechaSeleccionadaAsignacion = event;
      }

      get DniField() {
        return this.formularioFG.get('f_Dni');
      }

      get DireccionField() {
        return this.formularioFG.get('f_Direccion');
      }

      get RefenciaField() {
        return this.formularioFG.get('f_Refefencia');
      }

      get TelefonoField() {
        return this.formularioFG.get('f_Telefono');
      }
      //idcliente
      get DescripcionField() {
        return this.formularioFG.get('f_Description');
      }
      get nombreField() {
        return this.formularioFG.get('f_Nombre');
      }
      get apellidosField() {
        return this.formularioFG.get('f_Apellidos');
      }

      get idclienteField() {
        return this.formularioFG.get('idcliente');
      }
 }
