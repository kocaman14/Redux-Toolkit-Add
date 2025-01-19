import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
   
    cars:[],
  },
  reducers: {
    increment: (state,action) => {
     const check = state.cars.find((c)=>c.model === action.payload)
     if(check)check.count +=1


    },
    decrement: (state,action) => {
      const check = state.cars.find((c)=>c.model === action.payload)
      if(check)check.count > 0 ? check.count -=1 : check.count
    
    },addCar:(state,action)=>{
const{model,price} = action.payload
const test = state.cars.some((c)=>c.model === model)
if(!test){
 if(model && price){

   const newCar={model:model,price:price,count:0}  
   state.cars=[...state.cars,newCar]
   console.log(state.cars)
  } 

}




    },removeCar:(state,action)=>{
    console.log(action.payload)  
state.cars = state.cars.filter((c)=>c.model !== action.payload)


    }
  },
})

export const { increment, decrement ,addCar ,removeCar} = counterSlice.actions

export default counterSlice.reducer
