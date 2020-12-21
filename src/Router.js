import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SecccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponent';
import Peliculas from './components/Peliculas';
import Error from './components/Error';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

class Router extends Component {

    render() {
        
        var buttonString = "Ir al blog";

        return (
            <BrowserRouter>

                <Header/>
                <Slider title="Bienvenido al Curso de React" btn={buttonString}/>

                <div className="center">

                <Switch>
                    <Route exact path= "/" component= {Peliculas} />
                    <Route exact path= "/ruta-prueba" component= {SecccionPruebas} />
                    <Route exact path= "/segunda-ruta" component= {MiComponente} />

                    <Route exact path = "/pagina-1" render = {() => (
                        <React.Fragment>
                            <h1>Hola mundo desde la ruta: PÁGINA 1</h1>
                            <MiComponente saludo="Hola amigo"/>
                        </React.Fragment>
                    )} />

                    <Route exact path="/pruebas/:id/:nombre/:apellidos?" render= {(props) => {
                            
                            var id = props.match.params.id
                            var nombre = props.match.params.nombre
                            var apellidos = props.match.params.apellidos

                            return(
                                <div id="content">
                                    <h1 className="subheader">Página de pruebas</h1>
                                    <h2>
                                        {!apellidos ?
                                            (id +" "+ nombre) :  (id +" "+ nombre +" "+apellidos)
                                        }
                                    </h2>
                                </div>
                            );
                        }
                    } /> 

                    <Route component = {Error} />
                </Switch>

                <Sidebar/>
                <div className="clearfix"></div>

                <Footer/>
                </div>
            </BrowserRouter>
        );
    }

}

export default Router;