import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Definition from '../components/Definition';
import {FaPills} from 'react-icons/fa';
class WebDefinition extends Component {
    state = {  }
    render() { 
        return ( 
            <>
               
                <div style={{margin:"0% 15%", color:"black"}} >
                    <div className="def-post">
                        <Row>
                            <Col lg={5} style={{textAlign:"right"}}>
                                <div>
                                    <p className="def-title">
                                        Apa itu Obesitas?
                                    </p>
                                    <p className="def-desc">
                                    Obesitas adalah kondisi penyakit dimana terdapat akumulasi lemak yang berlebih dan abnormal sehingga menjadi risiko bagi kesehatan . Seseorang dinyatakan sebagai obesitas jika IMT (Indeks Massa Tubuh) yang dimilikinya melebihi 30 kg / m^2
                                    </p>
                                </div>

                            </Col>
                            <Col lg={7} >
                                <img src="https://images.everydayhealth.com/images/obesity-affects-men-and-women-differently-study-suggests-722x406.jpg" className="def-pic"/>
                            </Col>
                        </Row>

                    </div>   
                    <div className="def-post">
                        <p className="def-title">
                        Apa itu Body Mass Index (BMI) atau Indeks Massa Tubuh (IMT)?
                        </p>
                        <p className="def-desc">
                        Indeks Massa Tubuh merupakan bobot badan dalam kilogram yang dibagi dengan tinggi badan dalam satuan meter kuadrat yang digunakan dalam mengukur dan mengidentifikasi obesitas. IMT tidak digunakan untuk anak-anak dan remaja berusia 2-17 tahun
                        </p>
                    </div> 
                    <div className="def-post">
                        <Row>
                            <Col lg>
                                <img src="https://i.ibb.co/HDWFD6J/image-3.png" className="def-pic"/>
                            </Col>
                            <Col lg>
                                <img src="https://i.ibb.co/hgKK8Jp/image-2.png" className="def-icon"/>
                                <p className="def-title">
                                    Bahaya Obesitas
                                </p>
                                <p className="def-desc">
                                Obesitas merupakan suatu kondisi yang sering diasosiasikan dengan banyak penyakit, baik kronis maupun akut. Penyakit yang sering dikaitkan dengan obesitas adalah Diabetes Mellitus, hipertensi, stroke, serangan janrung, infark miokard, hiperkolesterolemia, dislipidemia, asma, dan osteoarthritis. Pada penyakit tersebut, obesitas berperan sebagai faktor resiko yang dapat meningkatkan resiko seseorang terjangkit penyakit-penyakit yang telah disebutkan.  

                                </p>
                            </Col>
                        </Row>

                    </div>
                    <div className="def-post">
                        <p className="def-title">
                        Obat-obatan Obesitas <FaPills style={{opacity:"0.6", marginLeft:"5px"}}/>
                        </p>
                        <p className="def-desc">
                        Obat yang digunakan pada terapi obesitas mencakupi inhibitor lipase, serotonin 2C receptor agonist, dan kombinasi phentermine-topiramate extended release. Inhibitor lipase yaitu orlistat merupakan obat yang bekerja dengan menghambat kerja enzim lipase secara selektif yang berfungsi dalam mengabsorpsi trigliserida dan memfasilitasi pengosongan lambung. Obat ini menyebabkan konsentrasi asam lemak bebas luminal menjadi lebih rendah sehingga mengakibatkan malabsorpsi kolesterol. Obat ini harus dikonsumsi 1 jam sebelum makan makanan yang berlemak. Obat selanjutnya adalah agonis reseptor serotonin yaitu lorcaserin. Lorcaserin bekerja secara selektif terhadap reseptor serotonin 5-HT 2C sehingga teraktivasi dan menyebabkan penurunan nafsu makan dan peningkatan rasa kenyang sehingga dapat menyebabkan penurunan berat badan. Obat yang terakhir adalah kombinasi dari phentermine dan topiramate dalam sediaan extended release. Phentermine merupakan obat golongan simpatomimetik yang bekerja dengan meningkatkan neurotransmisi dari norefinefrin dan dopamin sehingga menekan nafsu makan (Tek et al., 2011). Topiramate merupakan agen antiepileptik yang dapat menurunkan nafsu makan dan meningkatkan rasa kenyang melalui berbagai jalur, termasuk efek pada γ-aminobutyrate, kanal ion voltage-gated, reseptor gluatamat eksitatori, atau karbonat anhidrase.
                        </p>
                    </div> 
                    <div className="def-post">
                        <div className="table-diet">
                            <Row style={{margin:"1px"}} className="table-title">
                                <Col className="table-cell table-header "> Diet </Col>
                                <Col className="table-cell table-header"> Komposisi per hari</Col>
                                <Col className="table-cell table-header"> Rata-rata pengurangan berat badan</Col>
                                <Col className="table-cell table-header"> Kelebihan</Col>
                                <Col className="table-cell table-header"> Kekurangan </Col>
                            </Row>
                            <Row style={{margin:"1px"}} className="table-content">
                                <Col className="table-cell table-title"> Rendah kalori </Col>
                                <Col className="table-cell "> 800-1500 kcal <br/> 55-65% karbo</Col>
                                <Col className="table-cell"> ~10% selama 3-12 bulan</Col>
                                <Col className="table-cell"> Penurunan glukosa darah, TG, LDL, TD</Col>
                                <Col className="table-cell"> Sulit untuk diikuti dalam jangka panjang </Col>
                            </Row>
                            <Row style={{margin:"1px"}} className="table-content">
                                <Col className="table-cell table-title"> Rendah lemak </Col>
                                <Col className="table-cell"> 1000-1500 kcal <br/> 20-25% karbo</Col>
                                <Col className="table-cell"> ~5% selama 3-12 bulan</Col>
                                <Col className="table-cell"> Penurunan glukosa darah, LDL, TD</Col>
                                <Col className="table-cell"> Pilihan makanan kurang memiliki rasa, cepat merasa lapar, meningkatkan TG </Col>
                            </Row>
                            <Row style={{margin:"1px"}} className="table-content">
                                <Col className="table-cell table-title "> Rendah karbo </Col>
                                <Col className="table-cell">  1000-1500 kcal <br/> 60-150g karbo</Col>
                                <Col className="table-cell"> ~5% selama 3-12 bulan</Col>
                                <Col className="table-cell"> Penurunan berat badan di awal lebih cepat, Penurunan glukosa darah, TG, LDL, TD</Col>
                                <Col className="table-cell"> Ketosis dapat terjadi saat intake karbohidrat dibawah &lt; 50 g/hari </Col>
                            </Row>
                            <Row style={{margin:"1px"}} className="table-content">
                                <Col className="table-cell table-title"> VLCD </Col>
                                <Col className="table-cell">  200-800 kcal <br/> 55-65% karbo</Col>
                                <Col className="table-cell"> ~ 10% selama 2-8 minggu</Col>
                                <Col className="table-cell"> Penurunan berat badan cepat</Col>
                                <Col className="table-cell"> Ketidak seimbangan elektrolit, hipotensi, gallstone. </Col>
                            </Row>

                        </div>
                    </div>
                </div>
            </>
         );
    }
}
 
export default WebDefinition;