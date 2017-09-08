/**
 * Created by avvinash on 9/6/2017.
 */
import React from "react";
import {connect} from "react-redux";
import * as searchReducer from "../AppDucksReducer/AppDucksReducer";
import _ from "lodash";

class MainApp extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.getDataFromApi();
    }
    componentDidUpdate(prevProps, prevState){
       if(prevProps.results!==this.props.results){

       }
    }
    render(){
        if(_.isEmpty(this.props.results)){
            return <p>No Results Found</p>
        }
        return(
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>ID
                            <button onClick={()=>this.props.ascSort("id")}>ASC</button>
                            <button onClick={()=>this.props.dscSort("id")}>DSC</button>
                        </th>
                        <th>distance_m
                            <button onClick={()=>this.props.ascSort("distance_m")}>ASC</button>
                            <button onClick={()=>this.props.dscSort("distance_m")}>DSC</button>
                        </th>
                        <th>fuel_cost_used
                            <button onClick={()=>this.props.ascSort("fuel_cost_used")}>ASC</button>
                            <button onClick={()=>this.props.dscSort("fuel_cost_used")}>DSC</button>
                        </th>
                        <th>average_kmpl
                            <button onClick={()=>this.props.ascSort("average_kmpl")}>ASC</button>
                            <button onClick={()=>this.props.dscSort("average_kmpl")}>DSC</button>
                        </th>
                        <th >score_events
                            <button onClick={()=>this.props.ascSort("score_events")}>ASC</button>
                            <button onClick={()=>this.props.dscSort("score_events")}>DSC</button>
                        </th>
                        <th >score_speeding
                            <button onClick={()=>this.props.ascSort("score_speeding")}>ASC</button>
                            <button onClick={()=>this.props.dscSort("score_speeding")}>DSC</button>
                        </th>
                        <th >idling_time_s
                            <button onClick={()=>this.props.ascSort("idling_time_s")}>ASC</button>
                            <button onClick={()=>this.props.dscSort("idling_time_s")}>DSC</button>
                        </th>
                    </tr>
                    </thead>
                <tbody>
                {this.props.results.map((result,i) =>
                <tr key={i}>
                    <td >{result.id}</td>
                    <td >{result.distance_m}</td>
                    <td >{result.fuel_cost_usd}</td>
                    <td >{result.average_kmpl}</td>
                    <td >{result.score_events}</td>
                    <td >{result.score_speeding}</td>
                    <td >{result.idling_time_s}</td>
                </tr>
                )}
                </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        data:state.search.data,
        results:state.search.results
    }
};
const mapDispatchToProps=(dispatch)=>{
    return{
        getDataFromApi:()=>dispatch(searchReducer.searchRequest()),
        ascSort:(val)=>dispatch(searchReducer.dataToAsc(val)),
        dscSort:(val)=>dispatch(searchReducer.dataToDsc(val))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
