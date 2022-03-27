var opcion = 0;

do{
    opcion = Number (prompt('Seleccione un animal \n 1.Gatito \n 2.Perrito \n 3.Salir'))
    switch (opcion){
        case 1:
            console.log ("Gatito n\ ")
            console.log ("┈┈╱╲┈┈┈╱╲┈┈╭━╮┈")
            console.log ("┈╱╱╲╲__╱╱╲╲┈╰╮┃┈")
            console.log ("┈▏┏┳╮┈╭┳┓▕┈┈┃┃┈")
            console.log ("┈▏╰┻┛▼┗┻╯▕┈┈┃┃┈")
            console.log ("┈╲┈┈╰┻╯┈┈╱▔▔┈┃┈")
            console.log ("┈┈╰━┳━━━╯┈┈┈┈┃┈")
            console.log ("┈┈┈┈┃┏┓┣━━┳┳┓┃┈")
            console.log ("┈┈┈┈┗┛┗┛┈┈┗┛┗┛┈")
            break
        case 2:
            console.log ("Perrito n\ ")
            console.log ("╱▏┈┈┈┈┈┈▕╲▕╲┈┈┈")
            console.log ("▏▏┈┈┈┈┈┈▕▏▔▔╲┈┈")
            console.log ("▏╲┈┈┈┈┈┈╱┈▔┈▔╲┈")
            console.log ("╲▏▔▔▔▔▔▔╯╯╰┳━━▀")
            console.log ("┈▏╯╯╯╯╯╯╯╯╱┃┈┈┈")
            console.log ("┈┃┏┳┳━━━┫┣┳┃┈┈┈")
            console.log ("┈┃┃┃┃┈┈┈┃┃┃┃┈┈┈")
            console.log ("┈┗┛┗┛┈┈┈┗┛┗┛┈┈┈")
            break
        case 3:
            console.log("Byeeeee!")
    }
}while(opcion!=3);
