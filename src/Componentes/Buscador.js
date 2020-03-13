import React, { Component } from 'react'

class Buscador extends Component
{
  

    refBusqueda = React.createRef();

    handleDate = (e) => {
        e.preventDefault();
        let termino = this.refBusqueda.current.value
        this.props.mje(termino);
        
    }

    render() {
        return(
            <form onSubmit = {this.handleDate}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.refBusqueda} type="text" className = "form-control form-controll-lg" placeholder = "Busca tu imagen..."name="" id=""/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className = "btn btn-lg btn-danger btn-block" value ="Buscar"/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;