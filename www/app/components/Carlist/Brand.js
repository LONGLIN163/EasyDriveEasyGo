import React from 'react'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import { Button } from 'antd';


export default class Brand extends React.Component {
    constructor(props){
        super(props)

        this.state={
          options:{}
        }

        this.loadServer((result)=>{
          console.log("loadServer---",result)
          this.setState({
            options:result
          })
          console.log("loadServer2---",this.state.options)
        })

        console.log("brandprops---",props)
        console.log("brandoptions---",this.state.options)
    }
    
  async loadServer(callback){
    const result=await fetch("/brandAnaSeries").then(data=>data.json());
    callback(result);
  }


  render() {

    return (
      <div>
        {/* <Button onClick={()=>{
                alert(123)
        }}></Button> */}



        <Tabs ActiveKey="A">
        <TabPane tab="A" key="1">
        <div onClick={()=>{
                alert(123)
        }}>hahah</div>
        
        </TabPane>


              
        </Tabs>
      </div>
    )
  }
}

{/* <Tabs ActiveKey="A">

{
  Object.keys(this.state.options).map(item=>{
    return <TabPane tab={item} key={item}>
              {
                this.state.options[item].map((_item,index)=>{
                  return <Button key={index} onClick={()=>{
                      //call carlist's function
                      //this.props.setnowseries(Object.values(_item)[0]);
                      //console.log(123)
                      alert(123)
                    }}>
                    {Object.keys(_item)[0]}
                    {/* ---
                    // {Object.values(_item)[0]} */}

//                     </Button>
                    
//                 })
//               }
//           </TabPane>
//   })
// }

// </Tabs> */}