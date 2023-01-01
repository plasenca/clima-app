import { pausa, iquirerMenu } from "./helpers/inquirer.js";



const main = async() => {

  let opt = '';

  do {
    
    opt = await iquirerMenu();

    switch (opt) {
      case 1:
        // Mostrar mensaje
        break;
      case 2:
        // Mostrar mensaje
        break;
      case 0:
        // Salir
        opt = 0;
        break;
      default:
        break;
    }

    await pausa();

  } while (opt != 0);

}

main();
