 import { create } from "zustand";


 interface NombresStates{
  name: string,
  isUserValue:boolean,
  newname:(valuenombre : string, valueUser:boolean) =>void,
 }
 /*Tipos de dato inciales */
export const useQuestion = create<NombresStates>((set , get)=>({
  name:"",
  isUserValue:false,
  newname: ( valuenombre: string , valueUser:boolean)=> set(set =>({
       name:valuenombre,
       isUserValue:valueUser
  }))
}),
)



