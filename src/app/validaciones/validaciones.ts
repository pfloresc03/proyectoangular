import { AbstractControl, ValidatorFn } from "@angular/forms";


export function telefonoValido(): ValidatorFn {
    return (telefono: AbstractControl):{[key:string]:any} | null => {
        const numTelefono = telefono.value
        if (numTelefono==null) return null
        if (numTelefono>999999999 || numTelefono<600000000){
            return {telefono: "inválido"}
        } else {
            return null
        }
    }
}

export function dniValido(): ValidatorFn {
    return (dni: AbstractControl):{[key:string]:any} | null => {
        const dniV = dni.value
        const expresion_regular_dni = /^\d{8}[a-zA-Z]$/
        let letra='TRWAGMYFPDXBNJZSQVHLCKET'
        if (expresion_regular_dni.test(dniV)){
            let numero = dniV.substr(0,dniV.length-1);
            let letr = dniV.substr(dniV.length-1,1);
            let i = numero % 23;
            if (letra[i]==letr.toUpperCase()){
                return null
            } else {
                return {dni: "La letra no es correcta"}
            }
        } else {
            return {dni: "El formato no es correcto"}
        }
    }

}