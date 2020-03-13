import React from 'react';
import Buscador from './Componentes/Buscador'
import Resultado from './Componentes/Resultado'


class App extends React.Component
 {
    constructor(props){
      super(props);
      this.state = {
        termino : '',
        imagenes : [],
        pagina: ''
      }
    }

    scroll = () => {
      let element = document.querySelector('.jumbotron');
      element.scrollIntoView('smooth','start');
    }

    paginaAnterior = () => {
      let pagina = this.state.pagina;

      if (pagina === 1) return null;

      pagina -=1;
      this.setState({
        pagina 
      }, () => {
        this.consultaApi();
        this.scroll();
      });

      console.log(this.state.pagina)
    }
    paginaSiguiente = () => {
      let pagina = this.state.pagina;
      pagina += 1;
      this.setState({
        pagina
      }, () => {
        this.consultaApi();
        this.scroll();
      });

      console.log(this.state.pagina)
    }

    consultaApi = () =>{
      const api = 'https://pixabay.com/api/?key=13273511-133e8bd651dffe9732887aa4f&q=';
      const pagina = this.state.pagina;
      var ho=this.state.termino;
      let completo = api+ho+'&page='+pagina;
      console.log(completo);
      fetch(completo)
      .then(respuesta =>respuesta.json())
      .then(resultado => this.setState({imagenes : resultado.hits}) )
    }

    datosDeBusqueda = (termino) => {
      this.setState({
        termino : termino,
        pagina : 1
      }, ()=>{
        this.consultaApi();
      })
    }

    render(){
      return (
        <div className=" app container">
          <div className="jumbotron">
            <h1 className="lead text-center">Busca tu Imagen</h1>
            <Buscador
              mje = {this.datosDeBusqueda }
            />
          </div>
          <div className = "row justify-content-center">
            <Resultado
              imagenes = {this.state.imagenes}
              paginaAnterior = {this.paginaAnterior}
              paginaSiguiente = {this.paginaSiguiente}
              />
          </div>
         
         
        </div>
      ); 
    }
      
}

export default App;
