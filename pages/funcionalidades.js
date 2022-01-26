import {useState} from "react";

function Contador (){
    const [contador,setContador] = useState(1)

    function adicionarContador() {
        setContador(contador ++);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>adicionaContador</button>
        </div>
    )
}
    function Pagina() {
        return <Contador/>
}