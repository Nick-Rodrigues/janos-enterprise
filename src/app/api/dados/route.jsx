import { NextResponse } from "next/server";

export async function GET(){
    const cadastro = {
        nome: "Nicolas",
        senha: 123,
        email: "nicolas@gmail.com",
        CPF: 12345678901,
        RG: 123456789,
        Nascimento: "09/02/2002",
        Cep: 90060140,
        Marca: "Caloi",
        Modelo: "Caloi 10",
        Nf: 896321
    }

    return NextResponse.json(cadastro);
}