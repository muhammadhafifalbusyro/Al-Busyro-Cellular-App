import React from 'react'
import './App.css'
import Header from './component/Default/Header';
import Responsive from 'react-responsive'
import Footer from './component/Default/Footer';
import SmsCenter from './component/Default/SmsCenter';
import Beranda from './component/Default/Beranda';
import Daftar from './component/Default/Daftar';
import Deposit from './component/Default/Deposit';
import Format from './component/Default/Format';
import Kontak from './component/Default/Kontak';


const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={960} />;

class App extends React.Component {
  state = {
    colorBeranda: ['purple', 'yellow'],
    colorDaftar: '',
    colorDeposit: '',
    colorFormat: '',
    colorKontak: '',
    contentBeranda: true,
    contentDaftar: false,
    contentDeposit: false,
    contentFormat: false,
    contentKontak: false
  }
  //click mengganti warna navigasi beranda
  cBe = (event) => {
    event.preventDefault()
    this.setState({
      colorBeranda: ['purple', 'yellow'],
      colorDaftar: '',
      colorDeposit: '',
      colorFormat: '',
      colorKontak: '',
      contentBeranda: true,
      contentDaftar: false,
      contentDeposit: false,
      contentFormat: false,
      contentKontak: false
    })
  }

  //click mengganti warna navigasi Daftar
  cDa = (event) => {
    event.preventDefault()
    this.setState({
      colorBeranda: '',
      colorDaftar: ['purple', 'yellow'],
      colorDeposit: '',
      colorFormat: '',
      colorKontak: '',
      contentBeranda: false,
      contentDaftar: true,
      contentDeposit: false,
      contentFormat: false,
      contentKontak: false
    })
  }
  //click mengganti warna navigasi Deposit
  cDe = (event) => {
    event.preventDefault()
    this.setState({
      colorBeranda: '',
      colorDaftar: '',
      colorDeposit: ['purple', 'yellow'],
      colorFormat: '',
      colorKontak: '',
      contentBeranda: false,
      contentDaftar: false,
      contentDeposit: true,
      contentFormat: false,
      contentKontak: false
    })
  }
  //click mengganti warna navigasi Format
  cFo = (event) => {
    event.preventDefault()
    this.setState({
      colorBeranda: '',
      colorDaftar: '',
      colorDeposit: '',
      colorFormat: ['purple', 'yellow'],
      colorKontak: '',
      contentBeranda: false,
      contentDaftar: false,
      contentDeposit: false,
      contentFormat: true,
      contentKontak: false
    })
  }
  //click mengganti warna navigasi Kontak
  cKo = (event) => {
    event.preventDefault()
    this.setState({
      colorBeranda: '',
      colorDaftar: '',
      colorDeposit: '',
      colorFormat: '',
      colorKontak: ['purple', 'yellow',5],
      contentBeranda: false,
      contentDaftar: false,
      contentDeposit: false,
      contentFormat: false,
      contentKontak: true
    })
  }
  contentBeranda = () => {
    if (this.state.contentBeranda) {
      return <Beranda />
    }
  }
  contentDaftar = () => {
    if (this.state.contentDaftar) {
      return <Daftar />
    }
  }
  contentDeposit=()=>{
    if(this.state.contentDeposit){
      return <Deposit/>
    }
  }
  contentFormat=()=>{
    if(this.state.contentFormat){
      return<Format/>
    }
  }
  contentKontak=()=>{
    if(this.state.contentKontak){
      return<Kontak/>
    }
  }
  render() {
    return (
      <div className='container'>
        <Desktop>
          <Header cBe={this.cBe} cDa={this.cDa} cDe={this.cDe} cFo={this.cFo} cKo={this.cKo} wBe={this.state.colorBeranda} wDa={this.state.colorDaftar} wDe={this.state.colorDeposit}  wFo={this.state.colorFormat} wKo={this.state.colorKontak} />
          <div className='box'>
            <div className='box-body'>
              <div className='erase-decoration'>

              </div>
              <div className='body'>
                <div className='beranda'>
                  {this.contentBeranda()}
                  {this.contentDaftar()}
                  {this.contentDeposit()}
                  {this.contentFormat()}
                  {this.contentKontak()}
                </div>
                <SmsCenter />
              </div>
              <div className='erase-decoration2'>

              </div>
            </div>
            <Footer />
          </div>
        </Desktop>
      </div>
    )
  }
}
export default App
































