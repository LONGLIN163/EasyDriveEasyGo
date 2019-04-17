import React from 'react'
import Slider from './Slider'
import App from '../../container/App'
import './Slider.less'
import {connect} from 'dva'

class Index extends React.Component {
  constructor(props){
    super(props)
    console.log("....",props)
  }

  render() {
    
    return (

        <App>
            <Slider>

            <img src="https://media-cf.assets-cdk.com/websites/content/cblt-ms-nissan/generic/5a269772b3424419a372b8625849fbc9_c1x0-1598x686.jpg" alt="Wohnzimmer"/>
            <img src="http://www.horsepoweronline.com/wp-content/uploads/super-bowl-50-car-ads-650x336.jpg" alt="Flur"/>
            <img src="https://www-europe.nissan-cdn.net/content/dam/Nissan/es/vehicles/Nuevo_X_Trail/17tdieulhd-xtrailhelios001.jpg.ximg.l_full_m.smart.jpg.ximg.l_full_m.smart.jpg"/>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/65c9f162942031.5aa07341a7832.jpg" alt="Terasa"/>
            </Slider>
      </App>
    )
  }
}

export default connect(
    ({carlist})=>({
      carlist:carlist
    })
  )(Index)