

interface Alumno {
    nombre: string;
    apellidos: string;
    edad: number;
    email: string;
    nota: number;
}

const alumno: Alumno = {
    nombre: 'Mario',
    apellidos: 'Martinez',
    edad: 22,
    email: 'martinez@gmail.com',
    nota: 90
}

console.log(alumno);

console.table(alumno);

let mascotas = ['perro', 'gato', 'perico'];

console.log(mascotas);

mascotas[1] = 'nuevo gato';
mascotas.push('leon');
console.log(mascotas);

let tem:(number|string)[]=[]

tem.push(1)
tem.push('once')
console.log(tem)