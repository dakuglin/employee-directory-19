import React,{Component} from "react";
import "../styles/Table.css"


//multi-step state changing 
    //1. Make a copy of the current data
    //2. Modify the data in the copy
    //3. Replace the original state wiht the updated copy 

const employees = [
    {
        id: 1,
        name: "George Michael",
        phone: "970.258.3641",
        email: "george@gmail.com"
    },
    {
        id: 2,
        name: "Steven Jones",
        phone: "303.541.3697",
        email: "steven@gmail.com"
    },
    {
        id: 3,
        name: "Amy Dotson",
        phone: "254.879.3215",
        email: "amy@gmail.com"
    },
    {
        id: 4,
        name: "Betty White",
        phone: "505.451.3218",
        email: "betty@gmail.com"
    },
    {
        id: 5,
        name: "Greg Craig",
        phone: "303.741.6741",
        email: "greg@gmail.com"
    },
    {
        id: 6,
        name: "Cindy Sue",
        phone: "521.364.9745",
        email: "cindy@gmail.com"
    },
    {
        id: 7,
        name: "Bill James",
        phone: "303.124.4457",
        email: "bill@gmail.com"
    },
    {
        id: 8,
        name: "Paul Brown",
        phone: "523.654.1259",
        email: "paul@gmail.com"
    },
    {
        id: 9,
        name: "Sarah Parker",
        phone: "303.741.1245",
        email: "sarah@gmail.com"
    },
    {
        id: 10,
        name: "Emily Myer",
        phone: "623.851.4579",
        email: "emily@gmail.com"
    },
    
];
    

export default class DataArea extends Component {

    //define the state 
    state = {
        searchName: [{}],
        search: ""
    }

    sortId = () => {
        console.log("Sort Id Click")
        const sortId = employees.sort((a,b) => a.id > b.id ? 1 : -1)

        this.setState({ 
            ...this.state, employees: sortId 
        })
    }

    sortName = () => {
        console.log("Sort Name Clicked")
        const sortName = employees.sort((a, b) => a.name > b.name ? 1 : -1)
    

        this.setState({
            ...this.state, employees: sortName
        })
    }

    handleInputChange = event => {
        let value = event.target.value;
        console.log(event.target.value)
     
        let name = event.target.name;
        console.log(name)

        this.setState({
            [name]:value
        })

    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Success!")

        this.setState({
            employees: this.state.name,
        })
    }

    //react life cycle event we are listening for, will perform API calls
    //will run when the component is first mounted
    componentDidMount() {

        //UserAPI.getUser().then(response => {
            //console.log(response.data)

            //console.log(response.data.results)
            //console.log(response.data.results[0].name)


            // this.setState({
            //     searchName: 
            // })

       // })
    };

    render() {
        return (
            <>
                <form className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control" id="employee-name" placeholder="Name" onChange={this.handleInputChange}/>
                    </div>
                    <button type="text" className="btn btn-default" onClick= {this.handleFormSubmit}>Search</button>
                </form>

                <br></br>
                <br></br>

                <table>
                    <thead>
                        <tr>
                            <th>
                                <span onClick={this.sortId}>Employee ID </span>
                
                            </th>
                            <th > 
                                <span onClick={this.sortName}>Employee Name</span>
                            </th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>

                    </thead>
                    <tbody>
                        {employees.map(person => (
            
                            <tr className = "list-group-person" key={person.id}> 
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                                <td>{person.phone}</td>
                                <td>{person.email}</td>
                            </tr>
                        ))}
                     </tbody>
                </table>
                 
            </>
        )
    }
}

