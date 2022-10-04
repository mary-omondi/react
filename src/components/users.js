import React,{Component} from "react";
import axios from "axios";
import "./users.css";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state ={
            userCollection:[],
        };
    }
    componentDidMount(){
        axios
        .get("http://localhost:8080/users")
        .then((res) => {
            this.setState({userCollection: res.data});
        })
        .catch((error) =>{
            console.log(error)
        });
    }
    render(){
        return(
            <div className="rate">
                <table>
                    <thead>
                        <tr className="mary">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.userCollection.map((user,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Users;







