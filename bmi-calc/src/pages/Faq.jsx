import React, { Component } from 'react';
import QnA from '../components/QnA';

class Faq extends Component {
    state = {  }
    render() { 
        const faqTitle = require('../assets/images/Faq.png');
        return ( 
            <>
            <img src="https://i.ibb.co/4FmWPnQ/Faq.png" style={{padding:"20px"}} className="faq-title"/>
            <div style={{marginTop:"5%"}}>
                <QnA question={"kapan"} answer={"naisk"}/>

            </div>
            </>
         );
    }
}
 
export default Faq;