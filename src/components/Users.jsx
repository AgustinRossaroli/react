import { Component } from "react";
import "./paneles.css";

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
        }
    }

    getApi = (url,seter) => {
        fetch(url, seter)
            .then(res => res.json())
            .then(json => {
                this.setData(json)
            }) 
            .catch(err => console.log(err))
    }

    componentDidMount(){
        this.getApi("http://127.0.0.1:3000/api/users", this.setData)
    }

    setData = (data) => {
        this.setState({
            users: data
        })
        console.log(this.state.users)
    }

    render() {
         return (
             <div className="panel">
                <div><strong>Total de Usuarios:</strong> {this.state.users.length}</div>
                {/* {
                    this.state.products.length == 0 ? <h4>Cargando...</h4> : this.state.products.map((el) => {
                        return (
                            <div key={el.id}>
                                <p>{el.name}</p>
                            </div>
                        )
                    })
                } */}
             </div>
         )
    }
}

export default Users