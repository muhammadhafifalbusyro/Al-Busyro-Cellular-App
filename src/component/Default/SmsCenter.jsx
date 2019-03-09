import React from 'react'
import '../../App.css'
import QueueAnim from 'rc-queue-anim'

class SmsCenter extends React.Component {
    state = {
        smsCenter: [
            '081386618422',
            '085716150003',
            '085715600579',
            '083870332420',
            '082125358803',
            '085715792365',
            '081319142122',
            '083870673844',
            '085780697923',
            '081806732298',
            '085715792115',
            '08569908884',
            '085310162138',
            '082199975780',
            '08995109900',
            '083895417617',
            '081284088848',
            '085715792105'
        ]
    }
    render() {
        const number = this.state.smsCenter.map((key, value) => {
            return (
                <label key={key} className='list-phone-number'>{this.state.smsCenter[value]}</label>
            )
        })
        return (
                <QueueAnim duration={2000}type='scaleBig'ease='easeOutBounce'className='sms-center'>
                    <label className='sms-center-gateway-title' > SMS Center Gateway</label>
                    <div className='box-sms-gateway'>
                        <label className='label-sms'>ketik : <label className='label-sms-bold'>CENTER</label> untuk mengetahui SMS Center kami yang aktif</label>
                    </div>
                    <div className='line'></div>
                    <label className='sms-center-gateway-title'> SMS Center Aktif</label>
                    <div key='1'className='box-list-phone-number'>
                        {number}
                    </div>
                    <div className='box-caution'>
                        <label> 18 Line SMS Center Online</label>
                    </div>
                    <div className='line'></div>
                    <label className='sms-center-gateway-title'> Rekening</label>
                    <div key='2'className='header-account'>
                        <div className='box-image-account'>
                            <img src={require('../../assets/atm.png')} alt='account.png' className='image-account' />
                        </div>
                        <div className='box-title-account'>
                            <label>BANK BCA</label>
                        </div>
                    </div>
                    <label className='account-number'>BCA : 2741520003</label>
                    <label className='account-number'>a.n Reno Hadi P.</label>
                    <div key='3'className='header-account2'>
                        <div className='box-image-account'>
                            <img src={require('../../assets/atm.png')} alt='account.png' className='image-account' />
                        </div>
                        <div className='box-title-account'>
                            <label>BANK MANDIRI</label>
                        </div>
                    </div>
                    <label className='account-number'>Mandiri : 0060000223333</label>
                    <label className='account-number'>a.n Reno Hadi P.</label>
                    <div key='4'className='header-account3'>
                        <div className='box-image-account'>
                            <img src={require('../../assets/atm.png')} alt='account.png' className='image-account' />
                        </div>
                        <div className='box-title-account'>
                            <label>BANK BNI</label>
                        </div>
                    </div>
                    <label className='account-number'>BNI : 0278311714 </label>
                    <label className='account-number'>a.n Reno Hadi P.</label>
                    <div key='5'className='header-account4'>
                        <div className='box-image-account'>
                            <img src={require('../../assets/atm.png')} alt='account.png' className='image-account' />
                        </div>
                        <div className='box-title-account'>
                            <label>BANK BRI</label>
                        </div>
                    </div>
                    <label className='account-number'>BRI : 720901000736501</label>
                    <label className='account-number'>a.n Reno Hadi P.</label>
                    <div className='caution-tiket'>
                        <label>Gunakan sistem Tiket , agar deposit anda masuk secara otomatis</label>
                    </div>
                    <div className='line line-plus' ></div>
                </QueueAnim>

        )
    }
}
export default SmsCenter