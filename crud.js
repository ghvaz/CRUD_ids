const prompt = require("prompt-sync")({sigint:true})
const CRUD = {
    addEmail: (array)=>{
        let newMail = prompt("Digite o email: ")
        array.forEach(element => {
            if(element.email == newMail){
                console.log("Email já cadastrado");
                if("sair" !== (prompt("Enter para tentar novamente ou sair para retornar ao menu.")).toLocaleLowerCase()){
                    addEmail(array)
                }else{
                    return undefined
                }
            }
        });
        return newMail;

    },
    addFone:()=>{
        let qtd = +prompt("Quantos numeros quer adicionar: ")
        let fones = []
        for (let index = 0; index < qtd; index++) {
            let aux = prompt(`Digite o ${index +1 }⁰ telefone: `);
            fones.push(aux)
        }

        return fones
    },
    updateFones: (array)=>{
        array.forEach((element,i) => {
            console.log(`${i+1}. ${element}`)
        });
        let qual = +prompt("Qual deles quer alterar: ");
        qual--
        let novoFone = prompt("digite o novo telefone: ")
        array[qual] = novoFone

    },
    add: (ultimoID, array) => {
        const id = ultimoID + 1
        let telefones = CRUD.addFone()
        let email= CRUD.addEmail(array)
        let visivel = true
        array.push({id, visivel, email, telefones})
        return ultimoID++
    },
    read : (array) => {
        array.forEach((element, index) => {
        if(element.visivel){
            console.log(`--------------------------------------
ID: ${element.id}
E-mail:${element.email}
Fones:`);
            let qdtFone = element.telefones
            for (let index = 0; index < qdtFone.length; index++) {
                console.log("   "+(index +1 )+". "+element.telefones[index])
                
            }
        }
        });
    },
    update: (array) => {
        CRUD.read(array)
        let qual = +prompt("Qual ID quer mudar: ")
        array.forEach(element => {
            if(element.id == qual){
                let op = prompt("O que quer mudar? ")
                op = op.toLocaleLowerCase()
                switch (op) {
                    case "fones":
                    case "fone":
                    case "telefones":
                    case "telefone":
                    case "2":
                        CRUD.updateFones(element.telefones)
                        break;
                    case "email":
                    case "3":
                        element.email = this.addEmail(array)
                        break;
                
                    default:
                        break;
                }
            }
        });
    },
    remove: (array) => {
        CRUD.read(array)
        let qual = +prompt("Qual ID quer remover: ")
        array.forEach(element => {
            if (qual == element.id) {
                console.log(`
ID: ${element.id}
E-mail: ${element.email}
Quer remover este usuario`);
                if("sim" == prompt() || "s" == prompt()){
                    element.visivel = false
                    
                    return;
                }else{
                    CRUD.remove(array)
                }

            }
        });

    }, 
}


module.exports = CRUD
