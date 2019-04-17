import React from 'react'

//import { Router, Route, browserHistory } from 'react-router'
import { Router, Route, hashHistory,IndexRedirect,Redirect } from 'react-router'
import { syncHistoryWithStore, routerReducer,ConnectedRouter } from 'react-router-redux'


import Carlist from './components/Carlist/Carlist.js'
import Community from './components/Community/Community.js'
import AddCar from './components/AddCar/AddCar'
import Picshow from './components/Picshow/Picshow'
import Index from './components/Index/Index'

export default ({history })=>{
   //return <Carlist></Carlist>
   //return <Router history={history}>
   return <ConnectedRouter  history={history}>
      <div>
         {/* <IndexRedirect to='/a' /> */}
         {/* <Route path="/" component={Index} />
         <Route path="/a" component={Carlist} />
         <Route path="/b" component={AddCar} />
         <Route path="/c" component={Picshow} /> */}

         {/* <Route path="/" component={Index} />
         <Route path="/buy/carlist" component={Carlist} />
         <Route path="/sale/addcar" component={AddCar} />
         <Route path="/c" component={Picshow} /> */}

         <Route path="/" exact component={Index} />
         <Route path="/buy/carlist" exact component={Carlist} />
         <Route path="/sale/community" exact component={Community} />
         <Route path="/sale/addcar" exact component={AddCar} />
         {/* <Route path="/picshow" exact component={Picshow} /> */}
         <Route path="/picshow/:id" exact component={Picshow} />

      </div>
 </ConnectedRouter >
}

// export default ()=>{
//    //return <Carlist></Carlist>
//    return <Picshow></Picshow>
// }