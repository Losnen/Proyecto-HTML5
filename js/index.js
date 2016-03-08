var mail = document.getElementById('correo');
function validarEmail(mail) {
  var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!expr.test(mail))
    alert("Error: La dirección de correo " + mail + " es incorrecta.");
}