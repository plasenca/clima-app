import { pausa, iquirerMenu, leerInput } from "./helpers/inquirer.js";



const main = async () => {

  let opt = '';

  do {
    
    opt = await iquirerMenu();
    console.log(opt)
    switch (opt) {
      case 1:
        // Mostrar mensaje
        const lugar = await leerInput('Ciudad: ');
        console.log(lugar);



        console.log('\nInformación de la ciudad\n'.green);
        console.log('Ciudad:', );
        console.log('Lat:', );
        console.log('Lng:', );
        console.log('Temperatura:', );
        console.log('Mínima:', );
        console.log('Máxima:', );
        break;
      case 2:
        // Mostrar mensaje
        break;
      default:
        break;
    }
    if(opt !== 0) await pausa();

  } while (opt !== 0);
  
}

main();
