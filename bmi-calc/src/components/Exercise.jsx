import React, { Component } from 'react';

class Exercise extends Component {
    state = {  }
    render() { 
        return ( 
            <div  style={{color:"white",backgroundColor:"#326e85", padding:"1.5vmax", width:"100%", textAlign:"left", borderRadius:"16px",margin:"10px 0"}}>
                <div style={{fontSize:"1.5vmax"}}>
                    Saran Olahraga
                </div>
                    
                <div style={{fontWeight:"normal"}}>
                    <ul>
                        <li>
                        Berjalan 30 menit sehari, bisa keliling komplek atau sesuai rute yang paling terjangkau
                        </li>
                        <li>
                        Bersepeda, boleh sepeda statis atau dinamis, namun dianjurkan sepeda dinamis
                        </li>
                        <li>
                        Berenang
                        </li>
                        <li>
                        Low Intact Cardio Exercises yang dapat diakses melalui kanal YouTube
                        </li>
                        <li>
                        Low Impact Cardio lainnya
                        </li>
                    </ul>
                </div>

            </div>
         );
    }
}
 
export default Exercise;