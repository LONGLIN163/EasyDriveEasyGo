import React from 'react'

export default class Series extends React.Component {
    constructor(props){
        super(props)
        console.log("Series---",props)
    }
    
  

  render() {

    return (
      <div>
          222222222222222222222222222
         {
             this.props.nowseries.map(item=>{
                 return <em key={item}>{item}</em>
             })
         }
      </div>
    )
  }
}

