import React,{useState} from "react";
import Axios from "axios";
export default function Client(){
    const id='000001Felicio';
    const [client_id,setClient_id]=useState('');
    const [client_email,setClient_email]=useState('');
    const [client_contact,setClient_contact]=useState('');
    const [assoc_counter,setAssoc_counter]=useState('');
    const [client_first_name,setClient_first_name]=useState('');
    const [client_last_name,setClient_last_name]=useState('');
    const [client_balance,setClient_balance]=useState('');
    const [list,setList]=useState([]);
    const upClient=()=>{
        Axios.put(`http://localhost:3000/api/client/${client_id}`,{
            client_id:client_id,client_email:client_email,client_contact:client_contact,assoc_counter:assoc_counter,client_first_name:client_first_name,client_last_name:client_last_name,client_balance:client_balance
        }).then((res)=>{
            setList(res.data);
        });
    }
    return(
        <>
            <div>
                <button>Actualizar Dados</button>
                <button>Pagamentos</button>
                <button>Visualizar Facturas</button>
            </div>
            <label>Client: {id}</label>
            <div className="Form">
                <div className="FormIn">
                    <label>ID do cliente:      </label><input value={id} readOnly={true}/>
                    <label>Email:              </label><input onChange={(e)=>{setClient_email(e.target.value)}}/>
                    <label>Contacto:           </label><input onChange={(e)=>{setClient_contact(e.target.value)}}/>
                    <label>Contador associado: </label><input onChange={(e)=>{setAssoc_counter(e.target.value)}}/>
                    <label>Primeiro nome:      </label><input onChange={(e)=>{setClient_first_name(e.target.value)}}/>
                    <label>Apelido:            </label><input onChange={(e)=>{setClient_last_name(e.target.value)}}/>
                    <label>Saldo:              </label><input onChange={(e)=>{setClient_balance(e.target.value)}}/>
                    <button onClick={upClient}>Actualizar</button>
                </div>
                <div style={{background: 'gray',height: '0.5px',margin:'25px 100px',width:'80%'}}/>
                <div className="FormIn">
                    <label>ID do pagamento:   </label><input/>
                    <label>Valor pago:        </label><input/>
                    <label>Data:              </label><input/>
                    <label>ID do cliente:     </label><input value={id} readOnly={true}/>
                    <label>Factura associada: </label><input/>
                </div>
                <div style={{background: 'gray',height: '0.5px',margin:'25px 100px',width:'80%'}}/>
                <div className="FormOut">
                    Visualizar Consumo
                </div>
            </div>
        </>
    );
}