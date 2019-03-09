import React from 'react'
import '../../App.css'
import QueueAnim from 'rc-queue-anim'


class Kontak extends React.Component {
   
    render() {
        return (
            <QueueAnim type='bottom' duration={2000} ease='easeInOutElastic' className='daftar-content'>
                <div key='1'className='daftar-content-header'>
                    <label>Butuh Bantuan ?</label>
                </div>
                <label key='2'className='list-ketentuan'>Jangan sungkan dan jangan ragu untuk bertanya apa saja yang ingin ditanyakan terkait pendaftaran agen pulsa . Kami akan melayani anda dengan sebaik-baik nya . Kontak kami di :</label>
                <div key='3'className='box-sms'style={{fontSize:30,fontWeight:'bold'}}>
                    <label>0877-8733-1091</label>
                </div>
                <label key='4' className='ketentuan-pendaftaran'>Alamat kami </label>
                <ul key='5' className='list-ketentuan' type='circle'>
                    <li>Jl Pisangan Baru 3 RT :009 RW:07 No:226 , Kelurahan Pisangan Baru , Kecamatan Matraman , Kota Jakarta Timur , Provinsi D.K.I Jakarta </li>
                </ul>
            </QueueAnim>
        )
    }
}
export default Kontak 