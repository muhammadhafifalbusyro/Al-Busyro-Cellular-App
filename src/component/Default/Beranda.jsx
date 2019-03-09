import React from 'react'
import '../../App.css'
import QueueAnim from 'rc-queue-anim'


class Beranda extends React.Component {
    render() {
        return (
            <QueueAnim type='bottom' duration={2000} ease='easeInOutElastic' className='beranda-content'>
                <div key='1' className='beranda-content-header'>
                    <label>Jual Pulsa Elektrik Murah All Operator</label>
                </div>
                <p key='2' className='content-prolog' align='justify'>
                    Al Busyro Cellular adalah Agen Pulsa Murah One Chip All Operator yang terletak di Wilayah Jakarta timur, yang sudah beroperasi sejak tahun 2016. Telah dibuka layanan Pendaftaran Agen Pulsa Murah One Chip All Operator .
                </p>
                <br />
                <p key='3' className='content-prolog' align='justify'>
                    Kami juga menerima pesanan jasa membuat desain web , banner , dan brosur untuk konter pulsa anda, agar anda bisa memasarkan pulsa anda lebih luas.
                </p>
                <div key='4' className='beranda-content-header'>
                    <label>Visi Al-Busyro Cellular</label>
                </div>
                <p key='5' className='content-prolog' align='justify'>
                    Menjadi Agen Pulsa One Chip All Operator yang menyediakan lapangan pekerjaan untuk orang lain dan berkontribusi membangun perekonomian bangsa menjadi lebih baik .
                </p>
                <br />
                <div key='6' className='beranda-content-header'>
                    <label>Misi Al-Busyro Cellular</label>
                </div>
                <p key='7' className='content-prolog' align='justify'>
                    Menjaga hubungan baik sesama agen, memasarkan pulsa dengan profesional , dan menjaga kekonsistenan dalam bekerja .
                </p>
                <div key='30'className='line line-plus-plus' ></div>
                <div key='8' className='box-reason'>
                    <div key='9' className='in-box-reason1'>
                        <p className='title-in-box-reason'>Cara Jual Pulsa</p>
                        <p className='content-prolog' align='justify'>
                            Seperti yang kita ketahui bahwa saat ini ponsel telah dimiliki oleh hampir seluruh penduduk Indonesia. Oleh karena itu peluang usaha untuk menjual pulsa elektrik masih sangat besar. Jangan takut untuk mencoba bersama kami , karena kami bekerja sama dengan server pulsa yang kompeten dan berpengalaman . Sangat jarang transaksi yang gagal , hampir 90% transaksi selalu berhasil .
                        </p>
                        <p className='content-prolog' align='justify'>
                            Pendaftaran master dealer tidak dikenakan biaya. Disamping itu, bisnis pulsa elektrik ini juga dapat memberikan potensi keuntungan sekitar 10% dari nilai deposit Anda. Menjadi pengusaha pulsa murah memang tidak mudah, namun percayalah dengan ketekunan dan keuletan, maka cepat atau lambat, usaha ini dapat memberikan potensi penghasilan yang cukup besar bagi Anda .
                        </p>
                    </div>
                    <div key='10' className='in-box-reason2'>
                        <p className='title-in-box-reason'>Bisnis Pulsa Elektrik</p>
                        <p className='content-prolog' align='justify'>
                            Berbisnis isi ulang pulsa elektrik caranya cukup mudah, cukup dengan 3 langkah mudah, maka Anda akan segera menjadi pengusaha. Berikut langkah-langkahnya :
                        </p>
                        <p className='content-prolog' align='justify'style={{marginTop:5,marginBottom:5}} >1 ) Melakukan Pendaftaran Master Dealer</p>
                        <p className='content-prolog' align='justify'style={{marginTop:5,marginBottom:5}}>2 ) Melakukan Deposit</p>
                        <p className='content-prolog' align='justify'style={{marginTop:5,marginBottom:5}}>3 ) Melakukan Transaksi Pulsa , Paket Data , Token Listrik , DLL</p>
                        <p className='content-prolog' align='justify'>
                            Mudah bukan? Pulsa juga dapat Anda pergunakan sendiri atau bisa Anda jual ke tetangga sekitar, sekolah, kantor, koperasi karyawan dan apabila sudah ada modal bisa dengan membuka counter isi ulang.
                        </p>
                    </div>
                </div>
                <div key='31' className='line line-plus-plus' ></div>
                <div key='11' className='box-initial' style={{ textAlign: "center" }}>
                    <label>Inilah yang membuat kami berbeda dari kebanyakan agen pulsa lainnya.</label>
                </div>
                <div key='12' className='chart'>
                    <label style={{ fontSize: 16, color: 'rgb(73, 68, 68)', fontWeight: 'bold' }}>Kecepatan Transaksi</label>
                    <div className='box-chart'>
                        <div className='fill-chart'></div>
                        <label style={{ fontSize: 14, color: 'rgb(73, 68, 68)', fontWeight: 'bold' }}>90%</label>
                    </div>
                    <label style={{ fontSize: 16, color: 'rgb(73, 68, 68)', fontWeight: 'bold' }}>Pelayanan Konsumen</label>
                    <div className='box-chart2'>
                        <div className='fill-chart2'></div>
                        <label style={{ fontSize: 14, color: 'rgb(73, 68, 68)', fontWeight: 'bold' }}>85%</label>
                    </div>
                    <label style={{ fontSize: 16, color: 'rgb(73, 68, 68)', fontWeight: 'bold' }}>Akurasi</label>
                    <div className='box-chart3'>
                        <div className='fill-chart3'></div>
                        <label style={{ fontSize: 14, color: 'rgb(73, 68, 68)', fontWeight: 'bold' }}>87%</label>
                    </div>
                    <label style={{ fontSize: 16, color: 'rgb(73, 68, 68)', fontWeight: 'bold' }}>Up To Date</label>
                    <div className='box-chart4'>
                        <div className='fill-chart4'></div>
                        <label style={{ fontSize: 14, color: 'rgb(73, 68, 68)', fontWeight: 'bold' }}>92%</label>
                    </div>
                </div>
                <div key='13' className='box-initial'>
                    <label style={{ color: 'rgb(73, 68, 68)', textAlign: 'center', fontSize: 15 }}>Bagi kami, anda adalah segalanya. Oleh karena itu kualitas layanan dan fitur transaksi adalah hal yang utama.</label>
                </div>
                <div key='11' className='box-initial' style={{ fontSize:18, fontWeight:'bold'}}>
                    <label>Higlight Harga</label>
                </div>
                <div key='42' style={{width:'100%',display:'flex',justifyContent:'center'}}>
                    <img src={require('../../assets/BROSUR.jpg') }style={{height:'80%',width:'80%',marginTop:0,marginBottom:0}} alt='image.jpg'/>
                </div>
                <div key='14' className='box-emergency'>
                    <label style={{ color: 'red', textAlign: 'center', }}>
                        EMERGENCY! Keluhan Anda Belum Selesai? Atau Butuh Penanganan Cepat? Langsung saja SMS Ke: <label style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>0877-8733-1091</label>
                    </label>
                </div>
                <div key='15' className='box-initial' style={{ height: 100, fontSize: 15, width: '95%', textAlign: 'center', color: 'rgb(73, 68, 68)', paddingRight: 15., paddingLeft: 15, }}>
                    <label >
                        Terima kasih atas kepercayaan anda kepada agen pulsa kami. Kami akan selalu meningkatkan kualitas layanan dan fitur transaksi sesuai perkembangan teknologi terkini.
                    </label>
                </div>
                <div key='16' className='box-initial' style={{ color: 'purple' }}>
                    <label>Selamat Bertransaksi !</label>
                </div>
            </QueueAnim>
        )
    }
}
export default Beranda  