import { Tarea } from './tarea.js';
import { v4 as uuidV4 } from "uuid";
import colors from 'colors';


class Tareas {
    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push(tarea)
        });
        return listado;
    }

    constructor(){
        this._listado={};
    }

    borrarTarea(id=''){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    cargarTareasFromArr(tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){
       this.listadoArr.forEach((tarea,i)=>{
            let id = `${i+1}.`.green;
            let cuerpoTarea = `${tarea.desc}: `;
            let estadoTarea = `${tarea.completadoEn? 'Completada'.green : 'Pendiente'.red}`;
            let lista = id + cuerpoTarea + estadoTarea;
            console.log(lista);
    });
    }

    listarPendientesCompletadas(completadas = true){
        this.listadoArr.forEach((tarea,i)=>{
            if(completadas){
                if(tarea.completadoEn){
                    let id = `${i+1}.`.green;
                    let cuerpoTarea = `${tarea.desc}: `;
                    let estado = `${tarea.completadoEn? 'Completada'.green : 'Pendiente'.red}`;
                    let lista = id + cuerpoTarea + estado;
                    console.log(lista);
                }
            }else{
                if(!tarea.completadoEn){
                    let id = `${i+1}.`.green;
                    let cuerpoTarea = `${tarea.desc}: `;
                    let estado = `${tarea.completadoEn? 'Completada'.green : 'Pendiente'.red}`;
                    let lista = id + cuerpoTarea + estado;
                    console.log(lista);
                }
            }
        });
    }
    
    toggleCompletadas(ids=[]){
        ids.forEach(id=>{
            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach(tarea=>{
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }
}

export { 
    Tareas
}