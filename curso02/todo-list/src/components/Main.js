import React, { Component } from "react";
import './Main.css'

import { FaPlus } from 'react-icons/fa'

import { FaEdit, FaWindowClose } from 'react-icons/fa'

//Components statefull precisam do metodo render
export default class Main extends Component {
//gerger
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         novaTarefa: '',
    //     }

    //     this.handleInput = this.handleInput.bind(this)
    // }

    //Class fields
    state = {
        novaTarefa: '',
        tarefas: [],
    }

    handleInput = (text) => {
        this.setState({
            novaTarefa: text
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
 
        const { tarefas } = this.state
        let { novaTarefa } = this.state
        novaTarefa = novaTarefa.trim()
        
        if(tarefas.indexOf(novaTarefa) !== -1) return;
        
        this.setState({
            tarefas: [...tarefas, novaTarefa]
        })
    }

    handleDelete = (e) => {

    }

    handleEdit = (e) => {

    }

    render() {

        const { novaTarefa, tarefas } = this.state

        return (
            <div className="main">
                <h1>Lista de Tarefas</h1>

                <form action="#" className="form" onSubmit={this.handleSubmit}>
                    <input type="text" value={novaTarefa} onChange={(e) => this.handleInput(e.target.value)} />

                    <button type="submit"><FaPlus size={14}/></button>
                </form>

                <ul className="tarefas">
                    {tarefas.map((tarefa) => (
                        <li key={tarefa}>{tarefa}
                            <span>
                                <FaEdit onClick={this.handleEdit} className="edit"/>
                                <FaWindowClose onClick={this.handleDelete} className="delete"/>
                            </span>
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
}
