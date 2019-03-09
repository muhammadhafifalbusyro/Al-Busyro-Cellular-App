import React from 'react'
import '../../App.css'
import QueueAnim from 'rc-queue-anim'


class Deposit extends React.Component {
    render() {
        return (
            <QueueAnim type='bottom' duration={2000} ease='easeInOutElastic' className='beranda-content'>
                <div key='1' className='daftar-content-header'>
                    <label>Deposit atau Pengisian Saldo</label>
                </div>
                <p key='2' className='content-prolog' align='justify'>
                    Untuk pengisian saldo atau deposit , anda mempunyai tiga pilihan :
                </p>
                <ol key='3' type='1' className='list-ketentuan'>
                    <li>Anda bisa mengisi deposit anda dengan sistem manual</li>
                    <li>Anda bisa mengisi deposit anda menggunakan sistem <label style={{ fontWeight: 'bold', color: 'inherit' }}>TIKET</label> lalu kirim lewat ATM </li>
                    <li>Anda bisa mengisi deposit anda langsung ke konter kami di JL Pisangan Baru 3 RT:009 RW:07 NO:226</li>
                </ol>
                <label key='4' className='ketentuan-pendaftaran'>Menggunakan Sitem Manual </label>
                <p key='5' className='content-prolog' align='justify'>
                    Sistem Manual cara kerjanya ialah Anda mentransfer deposit pulsa dengan angka unik semisal Rp.150.050 ke rekening kami kemudian mengirim INFO ke Server agar segera dilakukan pengecekan.
                </p>
                <ul key='5' className='list-ketentuan' type='square'>
                    <li>Anda diharuskan transfer dengan angka unik contoh 50.250 atau 50.500 dsb. Agar deposit Anda mudah dikenali.</li>
                    <li>Setelah transfer silakan langsung konfirmasi ke kami melalui SMS, YM atau Telepon.</li>
                    <li>Jika konfirmasi melalui SMS gunakan format INFO sebagai berikut:</li>
                </ul>
                <div key='6' className='box-sms'>
                    <label>Info.AGUSCELL ID PP35673 telah deposit ke BCA Rp. 100.225 dari BCA atas nama Agus Sunarto.1234</label>
                </div>
                <ul key='7' className='list-ketentuan' type='square'>
                    <li>Lalu kirim ke SMS Center</li>
                </ul>
                <label key='8' className='ketentuan-pendaftaran'>Menggunakan Sitem TIKET </label>
                <p key='9' className='content-prolog' align='justify'>
                    Kelebihan Sistem ini adalah deposit pulsa yang anda transfer sesuai dengan angka unik yang kami berikan akan langsung masuk secara otomatis. Sistem Tiket Deposit ini berlaku untuk deposit ke rekening BCA, Mandiri, BRI dan BNI.
                </p>
                <ul key='10' className='list-ketentuan' type='circle'>
                    <li>Setelah melakukan pendaftaran master dealer pulsa,silahkan melakukan FORMAT berikut : TIKET.JUMLAH.PIN lalu kirim ke SMS Center contoh :<label style={{fontWeight:'bold', color:'inherit'}}>TIKET.100000.1234</label> (nominal tanpa titik)</li>
                    <li>Mohon tungggu beberapa saat Anda akan mendapat balasan:</li>
                </ul>
                <div key='11' className='box-sms'>
                    <label>Silakan Transfer Rp.50,122 PERSIS ke BCA: 2741520003 -MDR: 0060000223333 -BNI: 0278311714 -BRI: 720901000736501 a/n Reno Hadi P.</label>
                </div>
                <ul key='12' className='list-ketentuan' type='circle'>
                    <li>Silakan transfer sejumlah nilai yang tercantum dalam sms balasan tadi. Misalnya Rp.100.435. Nilai harus sama persis agar sistem dapat mengenali transferan Anda.</li>
                    <li>Sebaiknya mentransfer pada pukul 08.00 s.d 21.00 wib. Karena sistem internet banking tidak dapat melakukan pengecekan mutasi setelah pukul 21.00 wib.</li>
                    <li>Setelah Anda mentransfer sejumlah nilai tersebut, maka sistem akan otomatis menambahkan saldo Anda sesuai nominal yang Anda transfer.</li>
                    <li>Tiket berlaku di hari pemesanan sampai dengan jam 21.00 WIB. Sehingga diharapkan Anda segera mentransfer sebelum pukul 21.00 WIB. Jika jangka waktu habis Anda dapat mengirim sms tiket kembali.</li>
                </ul>
            </QueueAnim>
        )
    }
}
export default Deposit  