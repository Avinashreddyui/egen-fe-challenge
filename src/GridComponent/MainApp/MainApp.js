
import React from "react";
import {connect} from "react-redux";
import * as searchReducer from "../AppDucksReducer/AppDucksReducer";
import _ from "lodash";

class MainApp extends React.Component{
    constructor(props) {
        super(props);
        this.aSort=this.aSort.bind(this);
        this.dSort=this.dSort.bind(this);
    }
    componentDidMount(){
        this.props.getDataFromApi();
    }
    aSort(e){
      var asc_id=e.target.parentNode.className;
      this.props.ascSort(asc_id);
    }
    dSort(e){
        var dsc_ids=e.target.parentNode.className;
        this.props.dscSort(dsc_ids);
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
                        <th className="id">ID
                            <button onClick={this.aSort}>ASC</button>
                            <button onClick={this.dSort}>DSC</button>
                        </th>
                        <th className="distance_m">distance_m
                            <button onClick={this.aSort}>ASC</button>
                            <button onClick={this.dSort}>DSC</button>
                        </th>
                        <th className="fuel_cost_used">fuel_cost_used
                            <button onClick={this.aSort}>ASC</button>
                            <button onClick={this.dSort}>DSC</button>
                        </th>
                        <th className="average_kmpl">average_kmpl
                            <button onClick={this.aSort}>ASC</button>
                            <button onClick={this.dSort}>DSC</button>
                        </th>
                        <th className="score_events">score_events
                            <button onClick={this.aSort}>ASC</button>
                            <button onClick={this.dSort}>DSC</button>
                        </th>
                        <th className="score_speeding">score_speeding
                            <button onClick={this.aSort}>ASC</button>
                            <button onClick={this.dSort}>DSC</button>
                        </th>
                        <th className="idling_time_s">idling_time_s
                            <button onClick={this.aSort}>ASC</button>
                            <button onClick={this.dSort}>DSC</button>
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
