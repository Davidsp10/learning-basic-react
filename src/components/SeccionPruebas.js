import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import MiComponente from './MiComponent';

class SecccionPruebas extends Component {

    contador = 0;

    state = {
        contador: 0
    };

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         contador: 0
    //     }
    // }
    
    HolaMundo = nombre => {
        var presentation = (<div>
                            <h2>Hola mundo, soy {nombre}</h2> 
                        </div>);
    
        return presentation;
    }

    sumar(e) {
        //this.contador++;
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    restar = (e) => {
        //this.contador--;
        this.setState({
            contador: (this.state.contador - 1)
        });
    }

    render() {

        var nombre = "Dave";

        return (
            <section id="content">

                <h2 className="subheader" >Últimos artículos</h2>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>

                <h2 className="subheader">Funciones y JSX básico</h2>
                {this.HolaMundo(nombre)}

                <h2>Componentes</h2>
                <section className="componentes">
                    <MiComponente />
                </section>

                <h2>Estados</h2>
                <p>Contado: {this.state.contador}</p>

                <p>
                    <input type="button" value="Sumar" onClick={this.sumar.bind(this)}/>
                    <input type="button" value="Restar" onClick={this.restar}/>
                </p>

            </section>
        );
    }
}

export default SecccionPruebas; 