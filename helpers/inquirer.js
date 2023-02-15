import colors from 'colors';
import inquirer from 'inquirer';

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [{
            value: '1',
            name: `${'1.'.green}Crear Tarea`
        },
        {
            value: '2',
            name:`${'2.'.green}Listar Tareas`
        },
        {
            value: '3',
            name:`${'3.'.green}Listar Tareas Completadas`
        },
        {
            value: '4',
            name:`${'4.'.green}Listar Tareas Pendientes`
        },
        {
            value: '5',
            name:`${'5.'.green}Completar Tareas`
        },
        {
            value: '6',
            name:`${'6.'.green}Borrar Tareas`
        },
        {
            value: '0',
            name:`${'0.'.green}SALIR`
        },
    ]
    }
]

const inquirerMenu = async()=>{
    console.clear();
    console.log('============================'.green);
    console.log('=  Seleccione una opcion   ='.green);
    console.log('============================\n'.green);

    const {opcion} = await inquirer.prompt(menuOpts);

    return opcion;
};

const pausa = async()=>{
    const question = [
        {
            type:'input',
            name:'enter',
            message: `Presione ${'ENTER'.green} para continuar...`
        }
    ];
    await inquirer.prompt(question);
};

const leerInput = async(message)=>{
    const question = {
        type:'input',
        name: 'desc',
        message,
        validate(value){
            if(value.length === 0)
            return 'Por favor, ingrese un valor';
            else
            return true;
        }
    };

    const {desc} = await inquirer.prompt(question);
    return desc;
};

const listadoTareasBorrar = async(tareas = [])=>{
  
    const choices = tareas.map((tarea,i)=>{
        return {
            value: tarea.id,
            name: `${i+1}.`.green+` ${tarea.desc}`
        }
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const {id} = await inquirer.prompt(preguntas);
    return id;
}

export {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar
}
