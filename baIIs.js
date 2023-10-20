/*REGISTRARSE*/
function pagar() {
	var pago;
	pago = document.formulario.pago.value;

	if (pago == "elige") {
		document.getElementById('metodo').innerHTML = null;
	}

	if (pago == "tarjeta") {
	    document.getElementById('metodo').innerHTML = 
	        "<div class=\"caja_metodo\">"
	        + "<label>Número de tarjeta:</label> <input type=\"text\" name=\"nTarjeta\" id=\"nTarjeta\" size=\"20\" maxlength=\"16\">"
	        + "<br><label>Fecha de caducidad:</label> <input type=\"date\" name=\"caducidadTarjeta\" id=\"caducidadTarjeta\">"
	        + "<br><label>CVV:</label> <input type=\"text\" name=\"cvvTarjeta\" id=\"cvvTarjeta\" size=\"5\" maxlength=\"3\">"
	        + "<br><br><input type=\"button\" name=\"confirmePago\" class=\"confirmePago\" onclick=\"validarPagar();\" value=\"CONFIRME SU MÉTODO DE PAGO\">"
	        + "</div>";
	}

	if (pago == "paypal") {
	    document.getElementById('metodo').innerHTML = 
	        "<div class=\"caja_metodo\">"
	        + "<label>Email:</label> <input type=\"text\" name=\"emailPaypal\" id=\"emailPaypal\" size=\"30\" maxlength=\"50\">"
	        + "<br><label>Contraseña:</label> <input type=\"password\" name=\"contrasenaPaypal\" id=\"contrasenaPaypal\" size=\"20\">"
	        + "<br><label>Repetir Contraseña:</label> <input type=\"password\" name=\"repiteContrasenaPaypal\" id=\"repiteContrasenaPaypal\" size=\"20\">"
	        + "<br><br><input type=\"button\" name=\"confirmePago\" class=\"confirmePago\" onclick=\"validarPagar();\" value=\"CONFIRME SU MÉTODO DE PAGO\">"
	        + "</div>";    
	}

	if (pago == "transferencia") {
	    document.getElementById('metodo').innerHTML = 
	        "<div class=\"caja_metodo\">"
	        + "<label>Número de cuenta:</label> <input type=\"text\" name=\"cuentaTransferencia\" id=\"cuentaTransferencia\" size=\"25\" maxlength=\"20\">"
	        + "<br><label>DNI:</label> <input type=\"text\" name=\"dniTransferencia\" id=\"dniTransferencia\" size=\"15\" maxlength=\"9\">"
	        + "<br><label>IBAN:</label> <input type=\"password\" name=\"ibanTransferencia\" id=\"ibanTransferencia\" size=\"30\" maxlength=\"34\">"
	        + "<br><br><input type=\"button\" name=\"confirmePago\" class=\"confirmePago\" onclick=\"validarPagar();\" value=\"CONFIRME SU MÉTODO DE PAGO\">"
	        + "</div>";
	}
}


function validarPagar() {
	var pago = document.formulario.pago.value;
	var valido = false;

	if (pago == "tarjeta") {
	  	var nTarjeta = document.getElementById('nTarjeta').value;
	  	var nTarjetaSI;
	    var caducidadTarjeta = document.getElementById('caducidadTarjeta').value;
	    var caducidadTarjetaSI;
	    var cvvTarjeta = document.getElementById('cvvTarjeta').value;
	    var cvvTarjetaSI;

	    if (nTarjeta.length != 16) {
	      	nTarjetaSI = false;
	      	alert("El número de tarjeta no es válido. Debe tener 16 carácteres.");
	      	document.formulario.nTarjeta.focus();
	      	return 0;
	    } else {
	      	nTarjetaSI = true;
	    }

	    var fechaActual = new Date();
  		var fechaCaducidad = new Date(caducidadTarjeta);
	    if (fechaCaducidad < fechaActual || caducidadTarjeta == "") {
		    caducidadTarjetaSI = false;
		    alert("La fecha de caducidad no es válida.");
		    document.formulario.caducidadTarjeta.focus();
	      	return 0;
	    } else {
	      	caducidadTarjetaSI = true;
	    }

	    if (cvvTarjeta.length != 3) {
	      	cvvTarjetaSI = false;
	      	alert("El CVV no es válido.");
	      	document.formulario.cvvTarjeta.focus();
	      	return 0;
	    } else {
	     	cvvTarjetaSI = true;
	    }

	    if (nTarjetaSI == true && caducidadTarjetaSI == true && cvvTarjetaSI == true) {
	    	valido = true;
	    	alert("Sus datos don correctos.");
	    	return valido;
	    }
	}

	if (pago == "paypal") {
	    var emailPaypal = document.getElementById('emailPaypal').value;
	    var emailPaypalSI;
	    var contrasenaPaypal = document.getElementById('contrasenaPaypal').value;
	    var contrasenaPaypalSI;
	    var repiteContrasenaPaypal = document.getElementById('repiteContrasenaPaypal').value;
	    var repiteContrasenaPaypalSI;

	    var arrobaPosPaypal = emailPaypal.indexOf('@');
	    if (arrobaPosPaypal == -1) {
	        emailPaypalSI = false;
	        alert("El email de PayPal no es válido.");
	        document.formulario.emailPaypal.focus();
	        return 0;
	    } else {
	        emailPaypalSI = true;
    	}

	    if (contrasenaPaypal.length < 10) {
	        contrasenaPaypalSI = false;
	        alert("La contraseña de PayPal debe tener al menos 10 caracteres.");
	        document.formulario.contrasenaPaypal.focus();
	        return 0;
	    } else {
	        contrasenaPaypalSI = true;
	    }

	    if (contrasenaPaypal != repiteContrasenaPaypal) {
	        repiteContrasenaPaypalSI = false;
	        alert("Las contraseñas de PayPal no coinciden.");
	        document.formulario.repiteContrasenaPaypal.focus();
	        return 0;
	    } else {
	        repiteContrasenaPaypalSI = true;
	    }

	    if (emailPaypalSI == true && contrasenaPaypalSI == true && repiteContrasenaPaypalSI == true) {
	        valido = true;
	        alert("Sus datos son correctos.");
	        return valido;
	    }
	}


	if (pago == "transferencia") {
	    var cuentaTransferencia = document.getElementById('cuentaTransferencia').value;
	    var cuentaTransferenciaSI;
	    var dniTransferencia = document.getElementById('dniTransferencia').value;
	    var dniTransferenciaSI;
	    var ibanTransferencia = document.getElementById('ibanTransferencia').value;
	    var ibanTransferenciaSI;

	    if (cuentaTransferencia.length < 8) {
	      	cuentaTransferenciaSI = false;
	      	alert("El número de cuenta para la transferencia no es válido.");
	      	document.formulario.cuentaTransferencia.focus();
	      	return 0;
	    } else {
	      	cuentaTransferenciaSI = true;
	    }

	    if (dniTransferencia.length != 9) {
	      	dniTransferenciaSI = false;
	      	alert("El DNI para la transferencia no es válido.");
	      	document.formulario.dniTransferencia.focus();
	      	return 0;
	    } else {
	      	dniTransferenciaSI = true;
	    }

	    if (ibanTransferencia.length < 18) {
	      	ibanTransferenciaSI = false;
	      	alert("El IBAN para la transferencia no es válido.");
	      	document.formulario.ibanTransferencia.focus();
	      	return 0;
	    } else {
	      	ibanTransferenciaSI = true;
	    }

	    if (cuentaTransferenciaSI == true && dniTransferenciaSI == true && ibanTransferenciaSI == true) {
	    	valido = true;
	    	alert("Sus datos don correctos.");
	    	return valido;
	    }
	}	
}


function confirmar() {
	var puedesComprar = JSON.parse(localStorage.getItem('puedesComprar'));
  	if (puedesComprar === null) {
    	puedesComprar = false;
  	}
  
  	if (puedesComprar == true) {
    	document.getElementById('confirmado').innerHTML = "Sus datos han sido registrados con existo, "
    	+ " puede proceder a comprar nuestros productos."
    	+ "<br>¡Diríjase al <a href=\"comprar.html\">catálogo</a>!<br><br>";
  	}

  	if (puedesComprar == true) {
  		alert("Sus datos ya han sido introducidos.");
  		return 0;
  	} 

	var nombre, nombreSI;
	nombre = document.formulario.nombre.value;

	if (nombre.length == 0) {
		alert("Introduzca sus datos.");
		document.formulario.nombre.focus();
		nombreSI = false;
		return 0;
	} else {
		nombreSI = true;
	}

	var apellidos, apellidosSI;
	apellidos = document.formulario.apellidos.value;

	if (apellidos.length == 0) {
		alert("Introduzca sus apellidos.");
		document.formulario.apellidos.focus();
		apellidosSI = false;
		return 0;
	} else {
		apellidosSI = true;
	}

	var edad, edadInt, edadSI;
	edad = document.formulario.edad.value;
	edadInt = parseInt(edad,"");

	if (edadInt < 18 || edad.length == 0 || isNaN(edadInt)) {
		alert("Lo sentimos, este servicio solo está disponible para mayores de edad.");
		document.formulario.edad.focus();
		document.formulario.edad.value = "";
		edadSI = false;
		return 0;
	} else {
		edadSI = true;
	}

	var email, arrobaPos, emailSI;
	email = document.formulario.email.value;
	arrobaPos = email.indexOf('@');

	if (arrobaPos == -1) {
		alert("Su email no es válido.");
		document.formulario.email.focus();
		return 0;
		emailSI = false;
	} else {
		emailSI = true;
	}

	var pais, paisSI;
	pais = document.formulario.pais.value;

	if (pais == "seleccione") {
		alert("Indique su país de residencia.");
		document.formulario.pais.focus();
		paisSI = false;
		return 0;
	} else {
		paisSI = true;
	}

	var cpostal, cpostalSI;
	cpostal = document.formulario.cpostal.value;

	if (cpostal.length == 0) {
		alert("Introduzca su codigo postal.");
		document.formulario.cpostal.focus();
		cpostalSI = false;
		return 0;
	} else {
		cpostalSI = true;
	}

	var direccion, direccionSI;
	direccion = document.formulario.direccion.value;

	if (direccion.length == 0) {
		alert("Introduzca su dirección.");
		document.formulario.direccionSI.focus();
		direccionSI = false;
		return 0;
	} else {
		direccionSI = true;
	}

	var pago, pagoSI;
	pago = document.formulario.pago.value;

	if (pago == "elige") {
		alert("Escoja su método de pago.");
		document.formulario.pago.focus();
		pagoSI = false;
		return 0;
	} else {
		pagoSI = true;
	}

	
	var pagoValido = true;
	pagoValido = validarPagar();


	if (nombreSI == true && apellidosSI == true && edadSI == true && emailSI == true && paisSI == true && cpostalSI == true && direccionSI == true && pagoSI == true && pagoValido == true) {
	  	puedesComprar = true;
	}

	if (puedesComprar == true) {
		localStorage.setItem('puedesComprar', JSON.stringify(puedesComprar));
		document.getElementById('confirmado').innerHTML = "Sus datos han sido registrados con existo, "
    	+ " puede proceder a comprar nuestros productos."
    	+ "<br>¡Diríjase al <a href=\"comprar.html\">catálogo</a>!<br><br>";
    	window.scrollTo(0, 0);
	}	
}


function borrarDatos() {
  var confirmacion = confirm("¿Está seguro de que desea borrar sus datos? "
  		+ "Tendrá que volver a rellenar el formulario si desea comprar algún producto.");

  if (confirmacion == true) {
    localStorage.removeItem("puedesComprar");
    alert("Sus datos han sido borrados.");

    document.getElementById("formulario").reset();
    alert("El formulario ha sido reseteado.");

    location.reload();
  }
}





/*COMPRAR*/
var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
var suma = parseFloat(localStorage.getItem('sumaCarrito')) || 0;
var mostrandoProductos = false;


function agregarProducto(precio, nombre) {
  var puedesComprar = JSON.parse(localStorage.getItem('puedesComprar'));
  if (puedesComprar !== true) {
    alert("Introduzca sus datos para poder comprar");
    window.location.href = "comprar.html";
    return;
  }	
  if (confirm("¿Desea agregar este producto al carrito?")) {
    var producto = {precio: precio, nombre: nombre};
    carrito.push(producto);
    suma += precio;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    localStorage.setItem('sumaCarrito', suma.toFixed(2));
    
    if (mostrandoProductos) {
      var productoHTML = '<li class="producto_item"><span class="producto_nombre">' + nombre + '</span><span class="producto_precio">' + precio + '€</span></li><hr class="producto_separador">';
      document.getElementById('carrito_listado').innerHTML += productoHTML;
    }
    else {
      mostrarCarrito();
    }

    document.getElementById('importe').innerHTML = suma.toFixed(2) + "€";
    window.scrollTo(0, 0);
  }
}


function mostrarCarrito() {
  var puedesComprar = JSON.parse(localStorage.getItem('puedesComprar'));

  if (puedesComprar === null) {
    document.getElementById('carrito_mostrar').innerHTML = "Introduzca <a href=\"registrarse.html\">aquí</a> sus datos para poder comprar";
  }
  
  if (puedesComprar == true) {
    document.getElementById('carrito_mostrar').innerHTML = 
      "Importe de su carrito: "
      + "<br><br><div id=\"importe\" class=\"importe\">" + suma.toFixed(2) + "€</div>"
      + "<div id=\"carrito_listado\" class=\"carrito_listado\"></div>"
      + "<br><div class=\"buttons_productos\"><button class=\"mostrar_productos\" id=\"mostrar_productos\" onclick=\"mostrarProductos();\">MOSTRAR PRODUCTOS</button>"
      + "<button class=\"eliminar_productos\" id=\"eliminar_productos\" onclick=\"eliminarProductos();\">ELIMINAR PRODUCTOS</button></div>"
      + "<button class=\"confirmar_compra\" id=\"confirmar_compra\" onclick=\"confirmarCompra();\">CONFIRMAR COMPRA</button>";

    localStorage.setItem('sumaCarrito', suma.toFixed(2));
  }
}


function mostrarProductos() {
  var listadoProductos = '';
  if (!mostrandoProductos) {
    mostrandoProductos = true;
    document.getElementById('mostrar_productos').innerHTML = 'OCULTAR PRODUCTOS';
    document.getElementById('mostrar_productos').setAttribute('onclick', 'ocultarProductos();');
    listadoProductos += '<ol class="productos_lista">';
    for (var i = 0; i < carrito.length; i++) {
      var nombre = carrito[i].nombre;
      var precio = carrito[i].precio.toFixed(2);
      var productoHTML = '<li class="producto_item"><span class="producto_nombre">' + nombre + '</span><span class="producto_precio">' + precio + '€</span></li><hr class="producto_separador">';
      listadoProductos += productoHTML;
    }
    listadoProductos += '</ol>';
    document.getElementById('carrito_listado').innerHTML = listadoProductos;
  }
}


function ocultarProductos() {
  mostrandoProductos = false;
  document.getElementById('mostrar_productos').innerHTML = 'MOSTRAR PRODUCTOS';
  document.getElementById('mostrar_productos').setAttribute('onclick', 'mostrarProductos();');
  document.getElementById('carrito_listado').innerHTML = '';
}


function eliminarProductos() {
  if (carrito.length === 0 || suma === 0) {
    alert("Su carrito está vacío.");
    return;
  }
  if (confirm("¿Desea eliminar todos los productos del carrito?")) {
    carrito = [];
    suma = 0;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    localStorage.setItem('sumaCarrito', 0);
    mostrandoProductos = false;
    mostrarCarrito();
  }
}


function confirmarCompra() {
  if (carrito.length === 0 || suma === 0) {
  	alert("Su carrito está vacío.");
    return;
  }

  if (confirm("¿Desea realizar la compra de " + carrito.length + " " + (carrito.length > 1 ? "productos" : "producto") + " por un importe de " + suma.toFixed(2) + "€?")) {
    alert("¡Gracias por su compra! Esperamos que vuelva pronto.");
    alert("A continuación, se mostrarán más detalles sobre la entrega de su pedido.");
    window.location.href = "https://www.youtube.com/watch?v=mx86-rTclzA&themeRefresh=1";
    carrito = [];
    suma = 0;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    localStorage.setItem('sumaCarrito', 0);
    mostrandoProductos = false;
    mostrarCarrito();
  }
}


