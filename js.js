function calc() {

  var peso = document.getElementById('peso').value.replace(/,/g, '.');;
  var altura = document.getElementById('altura').value.replace(/,/g, '.');;

  if (peso == '' || altura == '') {
    document.getElementById("message").innerHTML = 'preencha os campos';
    return false;
  }

  var resultado = (peso / (altura * altura));
  var message = '';

  if (resultado < 17) {
    message = 'Você está muito abaixo do peso';
  } else if (resultado >= 17 && resultado <= 18.49) {
    message = 'Você está abaixo do peso';
  } else if (resultado >= 18.5 && resultado <= 24.99) {
    message = 'Seu peso está normal';
  } else if (resultado >= 25 && resultado <= 29.99) {
    message = 'Você está acima do peso';
  } else if (resultado >= 30 && resultado <= 34.99) {
    message = 'Você tem obesidade nível I';
  } else if (resultado >= 35 && resultado <= 39.99) {
    message = 'Você tem Obesidade nível II';
  } else if (resultado >= 40) {
    message = 'Você tem Obesidade nível III';
  }

  resultado = resultado.toFixed(2).replace(/\./g, ',');
  document.getElementById("message").innerHTML = 'Seu IMC é : ' + resultado + '<br>' + message;
}