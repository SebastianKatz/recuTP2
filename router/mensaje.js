import express from 'express'
import ControladorMensaje from '../controller/mensaje.js'


export class RouterMensaje {
    constructor() {
        this.router = express.Router()
        this.controladorMensaje = new ControladorMensaje()
    }

    start() {
        this.router.get('/', this.controladorMensaje.getMensaje)
        this.router.get('/random', this.controladorMensaje.calcularRandom)
        this.router.get('/operaciones', this.controladorMensaje.calcularOperacion)
        return this.router
    }
}