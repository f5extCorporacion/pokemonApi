
import { useQuestion } from "../../Store/Reduxindex";
import {Navigate , Outlet} from'react-router-dom';
/*import shallow from 'zustand/shallow';
import { useState } from "react";*/

const RoutesPrivate = () => {
  
   const isUserValid = useQuestion((state)=>state.isUserValue)
return(
   <div>
     { isUserValid? <Outlet/>:<Navigate to='/'/>}
   </div>
)


}
export default RoutesPrivate