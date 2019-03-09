import React from 'react'
import '../../App.css'
import Clock from 'react-live-clock'



class Header extends React.Component {
    state = {
        timee: ''
    }
    getTimeLocal = () => {
        //set day
        var getHari = new Date()
        var hari = ["Ahad", "Senin", "Selasa", "Rabu", "kamis", "Jum'at", "Sabtu"];
        document.getElementById("hari").innerHTML = hari[getHari.getDay()]
        //set date
        var getTanggal = new Date();
        document.getElementById("tanggal").innerHTML = getTanggal.getDate();
        //set month
        var getBulan = new Date();
        var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        document.getElementById("bulan").innerHTML = bulan[getBulan.getMonth()]
        //set years
        var getTahun = new Date();
        document.getElementById("tahun").innerHTML = getTahun.getFullYear();
    }
    componentDidMount() {
        this.getTimeLocal()
    }

    render() {
        return (
            <div className='header-box'>
                <div className='store-name'>
                    <div className='title'>
                        <label >Al-Busyro Cellular</label>
                    </div>
                </div>
                <div className='nav-bar'>
                    <div className='navigator'>
                        <div className='box-nav-beranda'onClick={this.props.cBe }
                            style={{ backgroundColor: this.props.wBe[0], color: this.props.wBe[1] }}>
                            <label>Beranda</label>
                        </div>
                        <div className='box-nav-daftar'  onClick={this.props.cDa}
                            style={{ backgroundColor: this.props.wDa[0], color: this.props.wDa[1] }} >
                            <label>Daftar</label>
                        </div>
                        <div className='box-nav-deposit'  onClick={this.props.cDe}
                            style={{ backgroundColor: this.props.wDe[0], color: this.props.wDe[1] }}>
                            <label>Deposit</label>
                        </div>
                        <div className='box-nav-format'  onClick={this.props.cFo}
                            style={{ backgroundColor: this.props.wFo[0], color: this.props.wFo[1] }}>
                            <label>Format</label>
                        </div>
                        <div className='box-nav-kontak'  onClick={this.props.cKo}
                            style={{ backgroundColor: this.props.wKo[0], color: this.props.wKo[1] ,borderTopRightRadius:this.props.wKo[2]}}>
                            <label>Kontak</label>
                        </div>
                    </div>
                    <div className='decoration'>
                        <label>&nbsp;&nbsp;</label>
                        <label id='hari'></label>
                        <label>&nbsp;,&nbsp;</label>
                        <label id='tanggal'></label>
                        <label>&nbsp;-&nbsp;</label>
                        <label id='bulan'></label>
                        <label>&nbsp;-&nbsp;</label>
                        <label id='tahun'></label>
                        <label>&nbsp;>>>> &nbsp;</label>
                        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Indonesian/Yogyakarta'} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Header