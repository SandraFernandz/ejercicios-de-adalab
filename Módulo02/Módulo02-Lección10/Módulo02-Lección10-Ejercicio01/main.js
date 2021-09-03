'use strict';
// esta función da números random con un botón 
function getNumber() {
    fetch("https://api.rand.fun/number/integer")
      .then(response => response.json())
      .then(data => {
        document.querySelector('.js-result').innerHTML = data.result
      });
  }
  document.querySelector('.js-number').addEventListener("click", getNumber);

  // Podemos jugar añadiendo parámetros a la URL del tipo clave=valor, siempre después de character ? y separados por &, por ejemplo si quisieras pedir un string con determinada longitud, la url quedaría así https://api.rand.fun/text/password?length=20
