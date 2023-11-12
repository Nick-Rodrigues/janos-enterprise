"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Cabecalho() {

  const navigate = useRouter();

  useEffect(() => {
    if(sessionStorage.getItem("token-user") != null){
       navigate.refresh();
     }    
   },[navigate]);

  return (
    <>
        <header className="cabecalho">           
        <Image src="/logojano.jpg" alt='logo janos' width={400} height={390}/>
            <nav>
                <a className="etapas" href="./etapas">
                <p>etapas</p>
                </a>
                <a className="integrantes" href="./integrantes">
                <p>integrantes</p>
                </a>
                <a className="cadastro" href="./cadastro">
                <p>cadastro</p>
                </a>
            </nav>
        </header>
    </>

  )
}
