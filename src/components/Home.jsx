import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import './../css/Home.css'


export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],

        }


    }
    componentDidMount() {
        axios.get(' https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res)
                this.setState({
                    posts: res.data
                })
                console.log(this.state.posts);
            })
            .catch(e => console.log(e))
    }
    render() {
        

        return (
            <section>
                <h1 className='text-center mb-5'>Excell Technology</h1>
                <main className=''>
                    
                    {this.state.posts.map(num=>
                   <Card id={num.id} name={num.username} email={num.email} phone={num.phone} company={num.company.name} website={num.website} address={num.address.street}/> 
                    )}
                </main>
            </section>
        )
    }
}
