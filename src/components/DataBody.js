import React from  "react";


function DataBody(props) {
    console.log(props)
    return (
        <table>
        <thead>
            <tr>
                <th></th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            <tr>

                <td>Jill</td>
                <td>Jones</td>
                <td>jill@fakeemail.com</td>
                <td>000.000.0000</td>
            </tr>
            <tr>
                
                <td>Dana</td>
                <td>Kuglin</td>
                <td>dana@fakeemail.com</td>
                <td>000.000.0000</td>
            </tr>
        </tbody>
    </table>

    )
    
}

export default DataBody;