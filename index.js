import chalk from "chalk";
import fs from "fs";

function arquivo(caminho){
    const encoding = 'utf-8';
    fs.readFile(caminho, encoding, (_, texto) => {
        console.log(chalk.blue(texto));
    })
}
arquivo('/home/alan/Documentos/teste.txt');