import React from 'react'
import { Row, Col,Checkbox,Tag } from 'antd';
const CheckboxGroup = Checkbox.Group;
import './carlist.less'
//import { connect } from 'dva';

import Tags from './Tags'
import CarlistCheckbox from './CarlistCheckbox'
import CarlistPriceSlider from './CarlistPriceSlider'
import CarlistKmSlider from './CarlistKmSlider'
import Brand from './Brand'
import Series from './Series'

export default class Carlist extends React.Component {
  constructor(props){
    super(props)
    this.state={
      nowseries:[]
    }
  }
  setnowseries(nowseries){
    console.log("currentSeries",nowseries)
    this.setState({nowseries});
  }
  render() {
    return (
      <div>
         <Row>
            <Col span={4}>
                Brand
            </Col>
            <Col span={20}>
                <Brand setnowseries={this.setnowseries.bind(this)}></Brand>
            </Col>
          </Row>

         <Row>
            <Col span={4}>
                Series
            </Col>
            <Col span={20}>
                <Series nowseries={this.state.nowseries}></Series>
            </Col>
          </Row>

         <Row>
            <Col span={4}>
                Color
            </Col>
            <Col span={20}>
                <CarlistCheckbox options={["red","yellow","blue","green","orange"]} propsname="color"></CarlistCheckbox>
            </Col>
          </Row>


          <Row>
            <Col span={4}>
                Eco
            </Col>
            <Col span={20}>
                <CarlistCheckbox options={["E1","E2","E3","E4","E5"]} propsname="eco"></CarlistCheckbox>
            </Col>
          </Row>


          <Row>
            <Col span={4}>
             Gearbox
            </Col>
            <Col span={20}>
                <CarlistCheckbox options={["automatic","manual","AMT"]} propsname="gearbox"></CarlistCheckbox>
            </Col>
          </Row>


          <Row>
            <Col span={4}>
             Displacement
            </Col>
            <Col span={20}>
                <CarlistCheckbox options={["1.0L","1.2L","1.6L","1.6T","2.0L","2.0T","5.0L"]} propsname="displacement"></CarlistCheckbox>
            </Col>
          </Row>

          <Row>
            <Col span={4}>
             Fuel
            </Col>
            <Col span={20}>
                <CarlistCheckbox options={["electric","Hybrid ","gasoline","diesel"]} propsname="fuel"></CarlistCheckbox>
            </Col>
          </Row>


          <Row>
            <Col span={4}>
             Price(€)
            </Col>
            <Col span={20}>
               <CarlistPriceSlider></CarlistPriceSlider>
            </Col>
          </Row>
          <Row>
            <Col span={4}>
            ODO(tkm)
            </Col>
            <Col span={20}>
               <CarlistKmSlider></CarlistKmSlider>
            </Col>
          </Row>

          <Row>
              <Col span={4}>
                  current:
              </Col>
              <Col span={20}>
                  <Tags></Tags> 
              </Col>
          </Row>
     </div>
    )
  }
}
