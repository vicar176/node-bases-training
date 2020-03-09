//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('===================='.blue);
    console.log(`Tabla del ${base} hasta ${limite}`.blue);
    console.log('===================='.blue);


    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base) || !Number(limite)) {
            reject(`El valor de base o limite no es un numero`);
        } else {
            for (let i = 1; i <= limite; i++) {
                data += `${base} x ${i} = ${base*i}\n`;
            }
            resolve(data);
        }
    });

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor de ${base} no es un numero`);
        } else {
            let data = '';

            for (let i = 1; i <= limite; i++) {
                data += `${base} x ${i} = ${base*i}\n`;
            }

            fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`tabla-${base}.txt`)
                }
            });
        }
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}