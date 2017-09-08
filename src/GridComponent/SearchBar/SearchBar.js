
import React from "react";
import {connect} from "react-redux";
import * as searchReducer from "../AppDucksReducer/AppDucksReducer";

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.searchFunc=this.searchFunc.bind(this);
    }
    searchFunc(){
        var searchInput=this.refs.myInput.value;
        this.props.searchText(searchInput);
    }
    render(){
        return(
            <div>
                <label>Search By ID</label>
                <input ref="myInput"
                    placeholder = "Enter Your Search"
                    />
                <button onClick={this.searchFunc}>search</button>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        searchText:(val)=>dispatch(searchReducer.searchBarRequest(val))
    }
};
export default connect(null,mapDispatchToProps)(SearchBar);
