
import React from "react";
import MainApp from "../MainApp/MainApp"
import SearchBar from "../SearchBar/SearchBar";

class App extends React.Component{
 render(){
     return(
         <div>
             <SearchBar/>
             <MainApp/>
         </div>
     )
 }
}
export default App;
