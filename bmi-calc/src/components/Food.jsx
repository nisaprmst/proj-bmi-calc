import React, { Component } from 'react';

class Food extends Component {
    state = {  }
    render() { 
        return (  
        <div style={{color:"white",backgroundColor:"#a70000", padding:"1.5vmax", width:"100%", textAlign:"left", borderRadius:"16px",margin:"10px 0"}}>
        <div style={{fontSize:"1.5vmax"}}>
            Menu Makanan
        </div>
        <img src="https://www.honestdocs.id/system/blog_articles/main_hero_images/000/001/522/original/Makanan_4_Sehat_5_Sempurna%C2%A0Yang_Penting_Dikonsumsi.jpg" style={{width:"100%"}} alt=""/>
        <div style={{fontSize:"1vmax", margin:"10px 0", fontWeight:"normal"}}>
            <div style={{fontSize:"1.4vmax"}}>
            <b>Sarapan</b>
                </div>
            Pilihan mencakupi telur, yoghurt, kopi, oatmeal, susu rendah lemak, buah-buahan selain durian, roti gandum.
            
            <div style={{fontSize:"1.4vmax"}}>
            <b>Siang dan Malam</b>
                </div>
                {this.props.status == "Normal" ? <>
            Pilihan mencakupi salad, nasi 50-100 gram beserta lauk seperti dada ayam, daging sapi, sayur sop, ikan.
                </> :
                <>
                Pilihan mencakup salad, nasi 50 gram beserta lauk seperti dada ayam, daging sapi, sayur sop, ikan. Nasi sangat disarankan diganti menjadi nasi merah, kentang rebus atau roti gandum. 
                </>}
        </div>
    </div> );
    }
}
 
export default Food;