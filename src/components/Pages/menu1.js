import React, {Component} from 'react'

class Menu1 extends Component{
    constructor(props){
        super(props)
        this.state = {
            users: [],
            isLoading: false,
            isError: false
        }
    }

    async componentDidMount(){
        this.setState({isLoading:true})
        
        const response = await fetch("http://192.168.0.101:5000/api/v1/tr")
       
        if(response.ok){
            const users = await response.json()
            console.log(users)
            this.setState({users,isLoading:false})
        }else{
            this.setState({isError:true, isLoading:false})
        }
    }

    renderTableHeader = () => {
        return Object.keys(this.state.users[0]).map(attr => <th key={attr}>
        {attr.toLocaleUpperCase()}
        </th>)
    }

    renderTableRows = () => {
        return this.state.users.map(user => {
            return(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.Device_ID}</td>
                    <td>{user.id_Account}</td>
                    <td>{user.id_location}</td>
                    <td>{user.item_id}</td>
                    <td>{user.UoM}</td>
                    <td>{user.Quantity}</td>
                    <td>{user.Line_number}</td>
                    <td>{user.Rack_number}</td>
                    <td>{user.Bin_number}</td>
                    <td>{user.Time_Enter}</td>
                    <td>{user.status}</td>
                    
                </tr>
            )
        })
    }
        render(){
        const {users, isLoading, isError} = this.state
        if(isLoading){
            return <div>Loading</div>
        }
        if (isError){
            return <div>Error</div>
        }

        return users.length > 0
        ? (
            <table>
                <thead>
                    <tr>
                        {this.renderTableHeader()}
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableRows()}
                </tbody>
            </table>
        ):(
            <div>No Data </div>
        )
    }
}

export default Menu1