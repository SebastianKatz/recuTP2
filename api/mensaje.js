class ApiMensaje {

  obtenerMensaje = () => {
    let fecha = new Date()
    let hora = fecha.getHours()
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
    let resultado = {};
    let min = 1;
    let max = 20;
    min = Math.ceil(min);
    max = Math.floor(max);
    for (let i = 0; i < 10000; i++) {
      if (
        resultado.hasOwnProperty(
          Math.floor(Math.random() * (max - min + 1) + min)
        )
      ) {
        resultado[Math.floor(Math.random() * (max - min + 1) + min)] += 1;
      } else {
        resultado[Math.floor(Math.random() * (max - min + 1) + min)] = 1;
      }
    }
    return resultado;
  };

  calcularOperacion = (num1_, num2_, operacion_) => {
    let resultado_
    let result
    try {
      
      if (operacion_.toLowerCase() == "suma") {
        result = num1_ + num2_
      }
      else if (operacion_.toLowerCase() == "resta") {
        result = num1_ - num2_
      }
      else if (operacion_.toLowerCase() == "multiplicacion") {
        result = num1_ * num2_
      }
      else if (operacion_.toLowerCase() == "division") {
        if(num2_ <= 0) throw new Error()
        result = num1_ / num2_
      }
      else {
        resultado_ = {
          error: {
            num1: {valor: num1_, tipo: typeof(num1_)},
            num2: {valor: num2_, tipo: typeof(num2_)},
            operacion: {valor: operacion_, tipo: typeof(operacion_)}
          }
        }
        return resultado_
      }
      resultado_ = {
        num1: num1_,
        num2: num2_,
        operacion: operacion_,
        resultado: result
      }
    }
    catch(error) {
      resultado_ = {
        error: {
          num1: {valor: num1_, tipo: typeof(num1_)},
          num2: {valor: num2_, tipo: typeof(num2_)},
          operacion: {valor: operacion_, tipo: typeof(operacion_)}
        }
      }
    }
    return resultado_
  };
}
export default ApiMensaje
