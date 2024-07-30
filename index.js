const crud = require("./crud.js")
const prompt = require("prompt-sync")({sigint:true})

let usuarios = [
    {id: 1,visivel: true,email: "abc@gmail.com", telefones:["123456789","852469371"]},
    {id: 2,visivel: true,email: "cba@gmail.com", telefones:["987654321","132798465","875413692"]},
]
let ultimoID = 2

while (true) {
    console.clear()
    console.log(`
1. adicionar um  usuario  
2.  leitura  dos usuarios
3.  alterar  um  usuario  
4.  remover  um  usuario  

0. SAIR DO PROGRAMA
`);
    let op = prompt('Digite uma das opções: ')
    switch (op) {
        case '1':
            ultimoID = crud.add(ultimoID, usuarios)
            break;
        case '2': 
            crud.read(usuarios)
            prompt("Enter para continuar.")
            break;
        case '3':
            crud.update(usuarios)
            break;
        case '4':
            crud.remove(usuarios)
            break;
        case '0':
            process.exit();
            break;
        default:
            prompt('Opção invalida. Enter para continuar')
            break;
    }
}
