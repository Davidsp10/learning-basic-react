import React, { Component } from 'react';
import Pelicula from './Pelicula';

class Peliculas extends Component {

    state = { }

    cambiarTitulo = () => {

        var {peliculas} = this.state; //Destructuring
        //var random = Math.floor(Math.random() * 3)
        peliculas[0].title = "Batman Inicia";

        this.setState({
            peliculas: peliculas
        });
    }

    favorita = (pelicula, indice) => {
        console.log(pelicula, indice) //Con sólo el índice pudo haber sido suficiente, sin necesidad de pasar "pelicula"
        this.setState({
            favorita: pelicula
        });
    }

    componentWillMount() {
        //alert("Se va a montar el componente");
        this.setState({
            peliculas: [
                { title: "Batman vs Superman", image: "https://lh3.googleusercontent.com/proxy/ODdePpFapkjEq_pNGVzkp32zuTQfmGhL8is1EGO5LrsesueEvbYODtE0sLXzUCnB46rPzMZpmDiCl4Vmgkx_C0UnN-rhuDt3id792pQZxynkOPgmAtLUrz2tI5D0ld5Nwi8HIOkq"},
                { title: "Volver al futuro", image: "https://cdn.forbes.com.mx/2015/10/back_to_the_future.jpg"},
                { title: "Looper", image: "https://cdn.lanetaneta.com/wp-content/uploads/2019/07/Escopeta-de-trabuco-de-Looper-explicada-Screen-Rant-780x405.jpg"}
            ],
    
            nombre: "Víctor",
            favorita: ""
        });
    }

    componentDidMount() {
        //alert("Ya se ha montado el componente");
    }

    componentWillUnmount() {
        //alert("Me voy a desmontar");
    }

    render() {

        var pStyle = { background: 'green', color: 'white', padding: '10px' };

        var favorita;

        if(this.state.favorita) {
            favorita = (
                <p className="favorita" style={pStyle}>
                    <strong>La película favorita es: </strong><span>{this.state.favorita.title}</span>
                </p>
            );
        } else {
            favorita = (
                <p>No hay película favorita</p>
            );
        }

        return (
            <div id="content" className="peliculas">
                <h2 className="subheader">Soy el componente de peliculas</h2>
                <p>Selección de películas de {this.state.nombre}</p>
                <p><button onClick={this.cambiarTitulo}>Cambiar Título</button></p>

                {/* {this.state.favorita.title ? (
                    <p className="favorita" style={pStyle}>
                        <strong>La película favorita es: </strong><span>{this.state.favorita.title}</span>
                    </p>
                    ) : (
                        <p>No hay película favorita</p>
                    ) 
                } */}

                {favorita}
                   
                {/* Crear componente Película */}

                
                <div id="articles" className="peliculas">

                {
                    this.state.peliculas.map((pelicula, i) => {
                            return (
                                <Pelicula key={i} 
                                          pelicula={pelicula}
                                          indice={i}
                                          marcarFavorita={this.favorita}/>
                            )
                    })
                }

                </div>

            </div>
        )
    }
}

export default Peliculas