import * as R from "ramda"
export default {
    namespace:"carlist",
    state:{
        // color:["red","green"],
        // eco:["E2","E5"]
        filters:{
           color:[],
           eco:[],
           gearbox:[],
           displacement:[],
           fuel:[],
           price:[0,100],
           km:[0,300000]
        //    color:["red","green"],
        //    eco:["E2","E5"]
        }

    },
    reducers:{
        // changeColor(state,{color}){
        //     console.log("----",color)
        //    return R.set(R.lensProp("color"),color,state);
        // }

        // changeColor(state,{propsname,value}){
        //     console.log(propsname,"/////",value)
        //    return R.set(R.lensProp(propsname),value,state);
        // }

        changeFilter(state,{propsname,value}){
            console.log(propsname,"/////",value)
           return R.set(
               R.lensProp("filters"),
           R.set(R.lensProp(propsname),value,state.filters),
           state);
        }
    }

}