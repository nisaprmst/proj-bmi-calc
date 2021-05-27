import React, { Component } from 'react';
import Exercise from './Exercise';
import Food from './Food';

class Normal extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{color:"white"}}>
            <div style={{backgroundColor:"#326e85", padding:"1.5vmax", textAlign:"left", borderRadius:"16px",margin:"10px 0"}}>
                <div style={{fontSize:"1vmax", fontWeight:"normal"}}>
                   <b> Anda hanya perlu
                       </b>
                    <ul>
                        <li>
                        Banyak konsumsi buah dan sayuran dan tetap makan teratur tiga kali sehari
                        </li>
                        <li>
                        Mempertahankan konsumsi karbohidrat dan protein
                        </li>
                        <li>
                        Mengurangi makanan yang mengandung kadar lemak yang tinggi, gula atau garam. 
                        </li>
                        <li>
                        Mengurangi konsumsi soda.
                        </li>
                        <li>
                            Jangan lupa cek cek berat badanmu setiap minggunya ya!
                        </li>
                    </ul>
                </div>
                
            </div>
           <Food status={"Normal"}/>
           <Exercise/>
            </div>

         );
    }
}
 
export default Normal;