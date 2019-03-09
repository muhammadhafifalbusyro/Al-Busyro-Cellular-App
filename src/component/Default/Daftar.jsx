import React from 'react'
import '../../App.css'
import QueueAnim from 'rc-queue-anim'


class Daftar extends React.Component {
    state = {
        nama: '',
        domisili: '',
        no: ''
    }
    postButton = (e) => {
        e.preventDefault()
        alert('asdksajdfhsjd')
    }
    resetButton = (e) => {
        e.preventDefault()
        this.setState({
            nama: '',
            domisili: '',
            no: ''
        })
    }
    render() {
        return (
            <QueueAnim type='bottom' duration={2000} ease='easeInOutElastic' className='daftar-content'>
                <div key='1'className='daftar-content-header'>
                    <label>Daftar Agen Pulsa</label>
                </div>
                <label key='2' className='ketentuan-pendaftaran'>Ketentuan Pendaftaran</label>
                <ol key='3'type='1' className='list-ketentuan'>
                    <li>Nama konter Terdaftar minimal 4 huruf/angka tanpa spesial karakter seperti [!@#$%^&*()-=] untuk memisahkan nama gunakan spasi atau simbol [ _ ]</li>
                    <li>Dengan mengirimkan SMS daftar agen pulsa elektrik, berarti Anda telah setuju dengan Syarat dan Ketentuan Layanan kami</li>
                </ol>
                <div key='4'className='box-form'>
                    <div className='in-box-form'>
                        <label className='title-registrasi'>Silahkan isi form registrasi di bawah ini</label>
                        <label className='title-input' for='nama'>Nama Konter</label>
                        <input type='text' className='input-nama' id='nama' value={this.state.nama} onChange={text => this.setState({
                            nama: text.target.value
                        })} />
                        <label className='title-input' for='domisili'  >Domisili</label>
                        <input type='text' className='input-nama' id='domisili' value={this.state.domisili} onChange={text => this.setState({
                            domisili: text.target.value
                        })} />
                        <label className='title-input' for='nomor'>No HP</label>
                        <input type='text' className='input-nama' id='nomor' value={this.state.no} onChange={text => this.setState({
                            no: text.target.value
                        })} />
                        <div className='box-button'>
                            <div className='button1' onClick={this.postButton}>
                                <label>Kirim</label>
                            </div>
                            <div className='button2' onClick={this.resetButton}>
                                <label>Reset</label>
                            </div>
                        </div>
                    </div>
                </div>
                <label key='5'className='ketentuan-pendaftaran'>Hal - Hal Yang Perlu Diperhatikan</label>
                <label key='6'className='list-ketentuan'>SMS berikut ini akan Anda dapatkan apabila pendaftaran / daftar agen pulsa telah sukses :</label>
                <div key='7'className='box-sms'>
                    <label>Hai Dayat Cell, Selamat Bergabung, ID: PP62898, PIN: 4587. Ketik: CENTER ke 081319142122 / Login di: www.webreport.us /CS:02195098690.</label>
                </div>
                <ul key='8' type='circle' className='list-ketentuan'>
                    <li>PP62898 adalah nomor ID Anda, mohon dicatat baik-baik karena digunakan untuk konfirmasi Deposit, Komplain dll </li>
                    <li>4587 adalah PIN standar, segera ubah PIN Anda untuk meningkatkan keamanan, Cara Ubah PIN dapat dilihat pada Halaman Format</li>
                    <li>Setelah terdaftar, Anda dapat melakukan cek saldo, cek harga pulsa murah dan format-format lainnya</li>
                    <li>Agar dapat bertransaksi maka Anda harus melakukan Deposit</li>
                    <li>Besaran deposit tidak kami batasi minimalnya, selalu gunakan Sistem Tiket untuk memudahkan Anda melakukan pengisian Deposit </li>
                    <li>Keanggotaan Anda pada server kami tidak akan pernah hangus ataupun kadaluarsa</li>
                    <li>Kami tidak pernah menetapkan target minimum transaksi per hari/bulan. Anda bebas menentukan kapan ingin deposit atau tidak karena keanggotaan tidak akan kami hapus untuk waktu yang sangat lama </li>
                    <li>Jika hanya ingin mengembangkan jaringan, maka Anda dapat mendaftarkan agen pulsa elektrik lainnya untuk bergabung dengan kami, setiap agen Kamu melakukan transaksi maka bonus akan otomatis masuk ke akun ID Anda sesuai dengan selisih yang diberikan</li>
                    <li>Semua reply/balasan/laporan dari server melalui SMS dan YM tidak kami pungut biaya dan tidak memotong saldo deposit Anda </li>
                </ul>
            </QueueAnim>
        )
    }
}
export default Daftar  