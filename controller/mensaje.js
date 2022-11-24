import ApiMensaje from '../api/mensaje.js'


class ControladorMensaje {

    constructor() {
        this.apiMensaje = new ApiMensaje()
    }

    getMensaje = (req,res) => {
        res.json( this.apiMensaje.obtenerMensaje() )
    }


    calcularRandom = (req,res) => {
        res.json( this.apiMensaje.calcularRandom() )
    }


    calcularOperacion = (req,res) => {
        res.json( this.apiMensaje.calcularOperacion() )
    }

}

export default ControladorMensaje