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
        let {num1, num2, operacion} = req.query
        num1 = parseInt(num1)
        num2 = parseInt(num2)
        res.json( this.apiMensaje.calcularOperacion(num1, num2, operacion))
    }

}

export default ControladorMensaje