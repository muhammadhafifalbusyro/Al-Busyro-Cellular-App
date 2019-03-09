import React from 'react'
import '../../App.css'
import QueueAnim from 'rc-queue-anim'


class Format extends React.Component {
   
    render() {
        return (
            <QueueAnim type='bottom' duration={2000} ease='easeInOutElastic' className='daftar-content'>
                <div key='1' className='daftar-content-header'>
                    <label>Format Transaksi Pulsa</label>
                </div>
                <p key='2' className='content-prolog' align='justify'>
                Untuk melakukan transaksi, Pojok Pulsa menggunakan kode tertentu. Kode tersebut seringkali kita sebut dengan <label style={{fontWeight:'bold',color:'inherit'}}>format transaksi pulsa elektrik</label>, dimana perintah yang Anda berikan harus sesuai dengan Format yang telah kami tentukan agar Server mengenali perintah dari pesan Anda. Semua format dikirimkan ke <label style={{fontWeight:'bold',color:'inherit'}}>SMS CENTER</label> yang tertera di samping.
                </p>
                <p key='3' className='content-prolog' align='justify'>
                Tarif sms adalah sms regular (Bukan SMS premium) dan reply tidak dikenakan biaya. Silakan simpan lebih dari 1 nomor SMS Center di ponsel Anda untuk kenyamanan transaksi Anda.
                </p>
                <p key='4' className='content-prolog' align='justify'>
                Seiring dengan perkembangan teknologi Software Server Pulsa Elektrik, maka server kami telah mendukung <label style={{fontWeight:'bold',color:'inherit'}}>format transaksi pulsa TANPA KODE</label>, dimana format ini hanya berlaku untuk nomor-nomor GSM. Untuk Nomor CDMA maka format transaksi pulsa yang digunakan tetap memakai kode produk.
                </p>
                <label key='5' className='ketentuan-pendaftaran'>Berikut Format Transaksi Pulsa Elektrik Yang Dapat Anda Gunakan: </label>
                <label key='6'style={{fontWeight:'bold',color:'rgb(73, 68, 68)',fontSize:15}}>1 ) Isi pulsa elektrik/PLN Prabayar Dengan Kode</label>
                <ul key='7' className='list-ketentuan' type='circle'>
                    <li>Format : KODE.NOPONSEL.PIN</li>
                    <li>Contoh :<label style={{fontWeight:'bold',color:'inherit'}}> m10.0815790000.1234</label></li>
                </ul>
                <label key='8'style={{fontWeight:'bold',color:'rgb(73, 68, 68)',fontSize:15}}>2 ) Isi Pulsa Elektrik Tanpa Kode (Hanya Bisa di Nomor GSM)</label>
                <ul key='9' className='list-ketentuan' type='circle'>
                    <li>Format : NOMINAL.NOPONSEL.PIN</li>
                    <li>Contoh :<label style={{fontWeight:'bold',color:'inherit'}}> 10.0815790000.1234</label></li>
                </ul>
                <label key='10'style={{fontWeight:'bold',color:'rgb(73, 68, 68)',fontSize:15}}>3 )  Isi Pulsa Multi</label>
                <ul key='11' className='list-ketentuan' type='circle'>
                    <li>Format : KODE1.NOHP1.KODE2.NOHP2.KODE3.NOHP3.PIN</li>
                    <li>Contoh :<label style={{fontWeight:'bold',color:'inherit'}}> S50.0812345678.M100.08157464324.X10.08388124456.12344</label></li>
                </ul>
                <label key='12'style={{fontWeight:'bold',color:'rgb(73, 68, 68)',fontSize:15}}>4 ) Cek Saldo</label>
                <ul key='13' className='list-ketentuan' type='circle'>
                    <li>Format : S.PIN</li>
                    <li>Contoh :<label style={{fontWeight:'bold',color:'inherit'}}>  S.1234</label></li>
                </ul>
                <label key='14'style={{fontWeight:'bold',color:'rgb(73, 68, 68)',fontSize:15}}>5 ) Cek Harga</label>
                <ul key='15' className='list-ketentuan' type='circle'>
                    <li>Format : H.KODE VOUCHER.PIN</li>
                    <li>Contoh :<label style={{fontWeight:'bold',color:'inherit'}}> H.A.1234 </label>(Untuk mengecek harga AS)</li>
                </ul>
                <label key='16'style={{fontWeight:'bold',color:'rgb(73, 68, 68)',fontSize:15}}>6 ) Paralel/Tambah Nomor Ponsel</label>
                <ul key='17' className='list-ketentuan' type='circle'>
                    <li>Format : TAMBAHNOMOR.NOMORHP.PIN</li>
                    <li>Contoh :<label style={{fontWeight:'bold',color:'inherit'}}> TAMBAHNOMOR.0811232316.1234</label></li>
                </ul>
                <label key='18'style={{fontWeight:'bold',color:'rgb(73, 68, 68)',fontSize:15}}>7 ) Ganti PIN</label>
                <ul key='19' className='list-ketentuan' type='circle'>
                    <li>Format : GPIN.PIN BARU.PIN LAMA</li>
                    <li>Contoh :<label style={{fontWeight:'bold',color:'inherit'}}> GPIN.2817.1234</label></li>
                </ul>
                <label key='20'style={{fontWeight:'bold',color:'rgb(73, 68, 68)',fontSize:15}}>8 ) Ganti Nama</label>
                <ul key='21' className='list-ketentuan' type='circle'>
                    <li>Format : GNAMA.NAMA.PIN</li>
                    <li>Contoh :<label style={{fontWeight:'bold',color:'inherit'}}> GNAMA.PaidjoCell.1234</label></li>
                </ul>
                <label key='22'style={{fontWeight:'bold',color:'rgb(73, 68, 68)',fontSize:15}}>9 ) Rekap Transaksi</label>
                <ul key='23' className='list-ketentuan' type='circle'>
                    <li>Format : REKAP.TglBlnThn(ddMMyy).PIN</li>
                    <li>Contoh :<label style={{fontWeight:'bold',color:'inherit'}}> REKAP.150709.1234</label></li>
                </ul>
                <label key='24'style={{fontWeight:'bold',color:'rgb(73, 68, 68)',fontSize:15}}>10 ) Laporan Transaksi Hari Ini</label>
                <ul key='25' className='list-ketentuan' type='circle'>
                    <li>Format : Laporan</li>
                    <li>Contoh :<label style={{fontWeight:'bold',color:'inherit'}}> Laporan</label></li>
                </ul>
                <label key='26'style={{fontWeight:'bold',color:'rgb(73, 68, 68)',fontSize:15}}>11 ) Info & Komplain (Jika transaksi tidak masuk2 silakan gunakan format ini)</label>
                <ul key='27' className='list-ketentuan' type='circle'>
                    <li>Format : INFO.ISI PESAN.PIN</li>
                    <li>Contoh :<label style={{fontWeight:'bold',color:'inherit'}}> INFO.tgl 010809 S10 ke 08157912345 pulsa belum masuk tolong dicek.1234</label></li>
                </ul>
                <label key='28'style={{fontWeight:'bold',color:'rgb(73, 68, 68)',fontSize:15}}>12 )  Hapus Nomor Ponsel</label>
                <ul key='29' className='list-ketentuan' type='circle'>
                    <li>Format : DEL.NOPONSEL.PIN</li>
                    <li>Contoh :<label style={{fontWeight:'bold',color:'inherit'}}> DEL.0812345678.1234</label></li>
                </ul>
                <label key='30'style={{fontWeight:'bold',color:'rgb(73, 68, 68)',fontSize:15}}>13 ) Pendaftaran Downline </label>
                <ul key='31' className='list-ketentuan' type='circle'>
                    <li>Format : REG*NAMA*NOPONSEL*UP*PIN</li>
                    <li>Contoh :<label style={{fontWeight:'bold',color:'inherit'}}> REG*Manohara*08123456*1*1234</label></li>
                </ul>
                <label key='32'style={{fontWeight:'bold',color:'rgb(73, 68, 68)',fontSize:15}}>14 ) Transfer Saldo</label>
                <ul key='33' className='list-ketentuan' type='circle'>
                    <li>Format : TRANS.JML SALDO.NOPONSEL.PIN</li>
                    <li>Contoh :<label style={{fontWeight:'bold',color:'inherit'}}> TRANS.50000.0812345678.1234</label></li>
                </ul>
                <label key='34'style={{fontWeight:'bold',color:'rgb(73, 68, 68)',fontSize:15}}>15 ) Ubah Level Downline</label>
                <ul key='35' className='list-ketentuan' type='circle'>
                    <li>Format : UL.ID.LEVEL</li>
                    <li>Contoh :<label style={{fontWeight:'bold',color:'inherit'}}> UL.P9999.DP2</label></li>
                </ul>
                <label key='36'style={{fontWeight:'bold',color:'rgb(73, 68, 68)',fontSize:15}}>16 ) Blokir Downline</label>
                <ul key='37' className='list-ketentuan' type='circle'>
                    <li>Format : NA.ID.PIN</li>
                    <li>Contoh :<label style={{fontWeight:'bold',color:'inherit'}}> NA.P9999.1234</label></li>
                </ul>
                <label key='38'style={{fontWeight:'bold',color:'rgb(73, 68, 68)',fontSize:15}}>17 ) Membuka Blokir Downline</label>
                <ul key='39' className='list-ketentuan' type='circle'>
                    <li>Format : A.ID.PIN</li>
                    <li>Contoh :<label style={{fontWeight:'bold',color:'inherit'}}> A.P9999.1234</label></li>
                </ul>
                <label key='40'style={{fontWeight:'bold',color:'rgb(73, 68, 68)',fontSize:15}}>18 ) Tukar Bonus Downline</label>
                <ul key='41' className='list-ketentuan' type='circle'>
                    <li>Format TUKAR.NOMINAL atau TUKAR.ALL</li>
                    <li>Contoh :<label style={{fontWeight:'bold',color:'inherit'}}> TUKAR.10000 atau untuk tukar semua ketik TUKAR.ALL</label></li>
                </ul>
                <label key='42' className='ketentuan-pendaftaran'>Up Level Downline </label>
                <table key='43' border='1'cellspacing='0'cellpadding='5'style={{marginBottom:50}} >
                    <thead >
                        <tr style={{backgroundColor:'lightSkyBlue',color:'rgb(73, 68, 68)',fontSize:15}}>
                            <td>Up</td>
                            <td>Ubah Level</td>
                            <td>Selisih</td>
                        </tr>
                    </thead>
                    <tbody style={{color:'rgb(73, 68, 68)',fontSize:15}}>
                        <tr>
                            <td>1</td>
                            <td>DP1</td>
                            <td>Rp 25,-</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>DP2</td>
                            <td>Rp 50,-</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>DP3</td>
                            <td>Rp 75,-</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>DP4</td>
                            <td>Rp 100,-</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>DP5</td>
                            <td>Rp 125,-</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>DP6</td>
                            <td>Rp 150,-</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>DP7</td>
                            <td>Rp 175,-</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>DP8</td>
                            <td>Rp 200,-</td>
                        </tr>
                    </tbody>
                </table>
            </QueueAnim>
        )
    }
}
export default Format  