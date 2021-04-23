import React, { Component } from 'react';
import QnA from '../components/QnA';

class Faq extends Component {
    state = {  }

  
    render() { 
        const qna = [
            {
                id: 1,
                question: "Bagaimana mulai diet yang baik dan benar?",
                answers: "Diet merupakan proses yang tidak instan, sehingga perlu adanya penyesuaian dengan pola makan serta pola keseharian per individu. Hal yang perlu diperhatikan dalam memulai diet adalah memulai dengan ekspektasi yang realistis, tidak usah terburu-buru dalam mendapatkan hasil. Dalam seminggu bisa turun 5% dari awal selama 4 minggu sudah bagus. Lalu, bagi yang baru memulai diet perlu juga untuk memiliki motivasi yang bulat dan jelas."
            },
            {
                id: 2,
                question: "Apa saja yang dapat menyebabkan obesitas dan cara mengatasinya?",
                answers: "Obesitas disebabkan oleh ketidak seimbangan kalori yang dikeluarkan dengan kalori yang didapatkan per harinya. Penyebabnya diantara lain adalah makan tinggi lemak, gula dan garam, kurang makan sayur dan buah, sering mengemil, serta jadwal makan tidak teratur. Ada pula faktor genetik yaitu risiko akan lebih tinggi bagi anggota keluarga yang orang tuanya obesitas. Selain itu juga dapat disebabkan obat-obatan seperti steroid, obat diabetes, antidepresan, dan faktor usia."
            },
            {
                id: 3,
                question: "Bagaimana cara menahan godaan makan?",
                answers: "Upaya dalam menahan godaan makan makanan yang tidak sehat adalah dengan mengenyangkan diri dengan makanan atau minuman yang sehat, seperti banyak meminum air putih dan mengonsumsi banyak sayur agar perut selalu terisi. Diet bukan membuat diri menjadi lapar, tapi mengganti makanan dan minuman menjadi yang rendah kalori, lemak, gula atau pun garam."
            },
            {
                id: 4,
                question: "Olahraga yang cocok dan apa saja yang harus dihindari?",
                answers: "Olahraga yang disarankan adalah low impact cardio seperti jalan kaki atau bersepeda untuk pasien Obesitas secara rutin agar tidak terjadi masalah persendian atau masalah lainnya. Olahraga yang harus dihindari adalah olahraga yang terlalu berat, seperti angkat beban atau cardio yang high intensity jika pasien Obesitas dan tidak terbiasa olahraga."
            },
            {
                id: 5,
                question: "Bagaimana memilih jenis diet yang tepat untuk tiap pasien obesitas?",
                answers: "<tba>"
            },
            {
                question: "Bagaimana mengatur jadwal yg sesuai dengan kesibukan sehari-hari dan pola diet yang benar?",
                answers: "Untuk olahraga, disempatkan saja tergantung kesibukan, usahakan 4-5 hari per minggu. Pola diet yang benar tergantung masing-masing orang, sehingga perlu adanya konsultasi dengan ahli terkait target dari berat badan dan kondisi pasien sekarang."
            },
            {
                id: 6,
                question: "Ada cara bisa kurus tapi bisa makan enak?",
                answers: "Sekarang ini, banyak makanan yang diolah sedemikian rupa menyerupai makanan yang berkalori tinggi namun terbuat dari tumbuh-tumbuhan seperti burger yang terbuat dari jamur, nasi shirataki, dan banyak lagi macamnya. Sehingga, sekarang ini untuk diet makanan tidak harus yang hambar karena banyak sekali variasi makanan sehat yang dapat ditemukan di sekitar kita."
            },
            {
                id: 7,
                question: "Bagaimana cara mengetahui bahwa saya obesitas atau tidak?",
                answers: '<a href="/calculator">Perhitungan BMI</a>. Namun, BMI tidak selalu akurat, karena bisa jadi BMI kamu tinggi karena massa otot kamu tinggi. Sehingga, perlu adanya penimbangan fat dan muscle percentage dengan timbangan khusus untuk lebih jelasnya. '
            },
            {
                id: 8,
                question: "Bagaimana cara menumbuhkan minat olahraga secara rutin?",
                answers: "Olahraga yang rutin dapat diatur dengan cara menjadwalkan dan meluangkan waktu per harinya atau minimal 4-5 hari per minggu selama minimal 30 menit untuk olahraga. Jika belum terbiasa ber olahraga maka biasakan low impact cardio terlebih dahulu."
            },
            {
                id: 9,
                question: "Apa yang harus dilakukan selain berobat ke RS?",
                answers: "<strong> Obesitas tidak harus berobat di RS!</strong>. Obesitas yang memerlukan obat hanya pada kasus khusus saja, jadi lebih baik difokuskan ke manajemen gaya hidup ya! Seperti makan yang sehat dan teratur serta biasakan olahraga secara teratur."
            },
            {
                id: 10,
                question: "Apa itu stress eating?",
                answers:"Stress eating merupakan efek samping yang ditimbulkan atau dipicu oleh stress yang berakibat ke pola makan kita, yang dapat berakibat dalam 2 jenis yaitu under eating (terlalu sedikit makan) atau over eating (terlalu banyak makan). Stres dapat didefinisikan sebagai respons tubuh yang umum dan tidak spesifik terhadap faktor apa pun yang mengganggu kemampuan kompensasi tubuh untuk mempertahankan homeostasis. Hormon yang dikeluarkan sebagai respon dari stress dapat bekerja spesifik terhadap nafsu makan, yaitu hormon noradrenalin & kortikotropin dapat menurunkan nafsu makan dan kortisol dapat meningkatkan nafsu makan."
            },
            {
                id: 11,
                question: "Bagaimana kalau punya pantangan terhadap makanan tertentu atau memiliki penyakit tertentu?",
                answers: "11.	Hal tersebut memerlukan konsultasi ke dokter yang bertanggung jawab terlebih dahulu, seperti jika memiliki penyakit jantung maka dapat berkonsultasi ke dokter jantung, khawatir terdapat efek samping obat atau interaksi merugikan dengan diet yang sudah direncanakan."
            }
        ]
        const faqTitle = require('../assets/images/Faq.png');
        return ( 
            <>
            <img src="https://i.ibb.co/4FmWPnQ/Faq.png"  className="pictitle"/>
            <div style={{marginTop:"5%"}}>
               { (qna.map((item) => (
                   <div style={{padding:"5% 0"}} key={item.id}>
                        <QnA question={item.question} answer={item.answers}/>
                    </div>
                )))}
            </div>
            </>
         );
    }
}
 
export default Faq;