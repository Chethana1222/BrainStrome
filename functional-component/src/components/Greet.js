import React from 'react'

// function Greet(){
//     return <h1>Hello CK !!!</h1>
// }

const Greet = () => <h1>Hello CK !!!</h1>;

export default Greet;
/* 
Default exports
export default Greet;
Can be imported with any names 
Eg: import Greet from './components/Greet'
Eg: import myGreetComponent from './components/Greet'
*/

/* Named export
 export const Greet = () => <h1>Hello CK !!!</h1>;
 in the file imported with Greet only
 Eg: import Greet from './components/Greet'
*/