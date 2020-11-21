//import Axios from "axios";
import React,{Component} from "react";
import UserAPI from "../utils/UserAPI"
import DataBody from "./DataBody"
//import DataTable from "./DataTable"


//multi-step state changing 
    //1. Make a copy of the current data
    //2. Modify the data in the copy
    //3. Replace the original state wiht the updated copy 

export default class DataArea extends Component {

    //define the state 
    state = {
        employees: [{}],
        employeeSearch: ""
    }

    handleInputChange = event => {
        let value = event.target.value;
        console.log(value)
        let name = event.target.name;
        console.log(name)

        this.setState({
            [name]:value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Success!")

        this.UserAPI(this.state.name)

        this.setState({
            employees: this.state.name,
        })
    }

    //react life cycle event we are listening for, will perform API calls
    //will run when the component is first mounted
    componentDidMount() {

        UserAPI.getUser().then(response => {
            console.log(response.data)

            this.setState({
                employees: response.data,
            })
        })

        // UserAPI.getUser().then(response => {
        //     console.log(response.data.results)
        //     //call this method any time we want to update what is in our state
        //     this.setState({
        //         employees: response.data.results,
        //     });
        // });
    };

    // searchEmployee = query => {
    //     UserAPI.search(query).then(response => {
    //         console.log(response.data.results)
    //         //call this method any time we want to update what is in our state
    //         this.setState({
    //             employees: response.data.results,
    //         });
    //     });
    // }

    render() {
        return (
            <>
                <form className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control" id="employee-name" placeholder="Name" onChange={this.handleInputChange}/>
                    </div>
                    <button type="text" className="btn btn-default" onClick= {this.handleFormSubmit}>Search</button>
                </form>

                <DataBody  {...this.state.employees}/>
            </>
        )
    }
}

