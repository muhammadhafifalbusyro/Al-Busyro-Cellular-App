import React from 'react'
import '../../App.css'
import QueueAnim from 'rc-queue-anim'

class Footer extends React.Component{
    render(){
        return(
            <QueueAnim type='bottom' duration={2000} ease='easeInOutElastic'className='box-footer'>
              <label key='1'className='tint'><label className='mark'>Copyright&copy;&nbsp;</label>Al-Busyro Cellular 2019</label>
            </QueueAnim>
        )
    }
}
export default Footer