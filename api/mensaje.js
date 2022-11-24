class ApiMensaje {

  obtenerMensaje = () => {
    let fecha = new Date()
    let hora = fecha.getHours()
    console.log(hora)
    console.log(hora == 20)
    let resultado = {}

    if (hora >= 6 && hora <= 12) {
      resultado = {texto: "buenos dias!"}
    }

    if (hora >= 13 && hora <= 19) {
      resultado = {texto: "buenos tardes!"}
    }
    else {
        resultado = {texto: "buenos noches!"}
    }
    
    
    return resultado
  }

  calcularRandom = () => {
    let min = 1
    let max = 20
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1) + min))

}

calcularOperacion = () => {

}
}
export default ApiMensaje
