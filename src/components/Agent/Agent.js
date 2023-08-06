import React, { useState } from "react";
import Axios from 'axios';

export default function Agent(){
    const [reading_code,setReading_code]=useState('');
    const [consumption_value,setConsumption_value]=useState('');
    const [counter_code,setCounter_code]=useState('');
    const [agent_id,setAgent_id]=useState('');
    const [list,setList]=useState([]);
    const addReading=()=>{
        Axios.post('http://localhost:3000/api/reading/',{
            reading_code:reading_code,consumption_value:consumption_value,counter_code:counter_code,agent_id:agent_id
        }).then(()=>{
            setList([...list,retReading]);
        });
    };
    const retReading=()=>{
        Axios.get('http://localhost:3000/api/reading/').then((res)=>{
            setList(res.data);
        });
    }
    return(
        <>
            <div>
                <button>Efectuar Leitura</button>
                <button onClick={retReading}>Listar Contadores</button>
            </div>
            <div className="Form">
                <div className="FormIn">
                    <label>Leitura nr:   </label><input type="text" onChange={(e)=>{setReading_code(e.target.value)}}/>
                    <label>Consumo:      </label><input type="text" onChange={(e)=>{setConsumption_value(e.target.value)}}/>
                    <label>Contador:     </label><input type="text" onChange={(e)=>{setCounter_code(e.target.value)}}/>
                    <label>ID do agente: </label><input type="text" onChange={(e)=>{setAgent_id(e.target.value)}}/>
                    <button onClick={addReading}>Adicoinar</button>
                </div>
                <div style={{background: 'gray',height: '0.5px',margin:'25px 100px',width:'80%'}}/>
                <div className="FormOut">
                    {list.map((o)=>
                        <div className="Out" key={o.reading_code}>
                            <p>
                                <label>Leitura nr:   {o.reading_code}</label>
                                <label>Consumo:      {o.consumption_value}</label>
                                <label>Contador:     {o.counter_code}</label>
                                <label>ID do agente: {o.agent_id}</label>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}