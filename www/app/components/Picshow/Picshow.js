import React from 'react'
import {connect} from 'dva'

import "./showStyles.less"
import Carinfo from './Carinfo'
import Album from './Album'
import Carlike from './Carlike'
import Smallpics from './Smallpics'
import BigImgbox from './BigImgbox'


class Picshow extends React.Component {
  constructor(props){
    super(props)
  this.props.dispatch({"type":"picshow/init","nowid":1000009})
  }
  render() {
    return (
      <div className="picshow">
        <BigImgbox></BigImgbox>
        <div className="rightPart">
          <Carinfo></Carinfo>
          <Album></Album>
          <Carlike></Carlike>
          <Smallpics></Smallpics>

        </div>
      </div>
    )
  }
}

export default connect()(Picshow)
