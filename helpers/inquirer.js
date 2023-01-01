import inquier from 'inquirer';
import colors from 'colors';



const questions = [
  {
    type: 'list',
    name: 'option',
    message: '¿Qué deseas hacer?',
    choices: [
      {
        value: 1,
        name: `${'1.'.green} Buscar ciudad`
      },
      {
        value: 2,
        name: `${'2.'.green} Historial`
      },
      {
        value: 0,
        name: `${'0.'.green} Salir`
      },
    ]
  }
]

const iquirerMenu = async() => {

  console.clear();
  console.log('==========================='.green);
  console.log('    Seleccione una opción'.white);
  console.log('==========================='.green);

  const {option} = await inquier.prompt(questions);

  return option;

}


const pausa = async() => {

  const questions = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'ENTER'.green} para continuar`
    }
  ];

  console.log('\n');

  await inquier.prompt(questions);

}

const leerInput = async(message) => {

  const questions = [
    {
      type: 'input',
      name: 'description',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor';
        }
        return true;
      }
    }
  ];

  const { desc } = await inquier.prompt(questions);
  return desc;

}

const listadoTareasBorrar = async(tareas = []) => {

  const choices = tareas.map((tarea, i) => {
      
      const idx = `${i + 1}.`.green;
  
      return {
        value: tarea.id,
        name: `${idx} ${tarea.desc}`
      }
  
  });

  choices.unshift({
    value: '0',
    name: '0.'.green + ' Cancelar'
  });

  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'Borrar',
      choices
    }
  ];

  const { id } = await inquier.prompt(questions);
  return id;

}

const confirmar = async(message) => {
  
    const question = [
      {
        type: 'confirm',
        name: 'ok',
        message
      }
    ];
  
    const { ok } = await inquier.prompt(question);
    return ok;
  
}


const mostrarListadoChecklist = async(tareas = []) => {
  
    const choices = tareas.map((tarea, i) => {
        
        const idx = `${i + 1}.`.green;
    
        return {
          value: tarea.id,
          name: `${idx} ${tarea.desc}`,
          checked: (tarea.completadoEn) ? true : false
        }
    
    });
  
    const question = [
      {
        type: 'checkbox',
        name: 'ids',
        message: 'Selecciones',
        choices
      }
    ];
  
    const { ids } = await inquier.prompt(question);
    return ids;
  
}

export {
  iquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist
}
