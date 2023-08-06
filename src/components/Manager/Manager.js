import React from "react";

export default function Manager(){
    return(
        <>
            <div>
                <button>Cadastrar Cliente</button>
                <button>Cadastrar Contador</button>
                <button>Validar Pagamento</button>
                <button>Emitir Factura</button>
                <button>Emitir Avisos</button>
            </div>
            <div>
                <label>Codigo de contador: </label><input></input>
                <label>Consumo:            </label><input></input>
                <label>Coordenadas:        </label><input></input>
            </div>
            <div style={{background: 'gray',height: '0.5px',margin:'25px 100px',width:'80%'}}/>
            <div>
                <label>Número da factura: </label><input></input>
                <label>Data de emissão:   </label><input></input>
                <label>Saldo existente:   </label><input></input>
                <label>ID do Gestor:      </label><input></input>
                <label>Valor total:       </label><input></input>
            </div>
            <div>
                <label>ID do pagamento: </label><input></input>
                <label>Data:     </label><input></input>
            </div>
            <div>
                <label>Email: </label><input></input>
                <label>Aviso: </label><input></input>
            </div>
            <div style={{background: 'gray',height: '0.5px',margin:'25px 100px',width:'80%'}}/>
            <div>
                Visualizar Clientes
            </div>
            <div style={{background: 'gray',height: '0.5px',margin:'25px 100px',width:'80%'}}/>
            <div>
                Visualizar Contadores
            </div>
        </>
    );
}