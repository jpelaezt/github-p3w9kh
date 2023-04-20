      function valideKeynombre(){
        valor = document.getElementById("nombre").value;
        if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
          alert("Debe ingresa el campo obligatorio un NOMBRE")
        return false;
        }else{
			return true;
		}
      }
      function valideKeycorreo(){
        valor = document.getElementById("correo").value;
        if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
          alert("Debe ingresa el campo obligatorio un CORREO")
        return false;
        }else{
			return true;
		}
      }
      function valideKeycelular(){
        valor = document.getElementById("celular").value;
        if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
          alert("Debe ingresa el campo obligatorio un CELULAR")
        return false;
        }else{
			return true;
		}
      }
      function valideKeyBoton(){
		var a = valideKeynombre();
        var b = valideKeycorreo();
        var c = valideKeycelular();
		if(a && b && c){
			alert("En este momento nos pondremos en comunicacion con usted")
		}
      }

	function SoloLetras(e){
		key = e.keyCode || e.which;
		tecla = String.fromCharCode(key).toString();
		letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚabcdefghijklmnopqrstuvwxyzáéíóú";

		especiales = [8,13];
		tecla_especial = false
		for(var i in especiales) {
			if(key == especiales[i]){
				tecla_especial = true;
				break;
			}
		}
		if(letras.indexOf(tecla) == -1 && !tecla_especial){
		alert("Ingresar solo letras");
		return false;
		}
	}
	
	function SoloNumeros(evt){
		if(window.event){
			keynum = evt.keyCode;
		}
		else{
			keynum = evt.which;
		}

		if((keynum > 47 && keynum < 58) || keynum == 8 || keynum== 13)
		{
			return true;
		}
		else
		{
			alert("Ingresar solo numeros");
			return false;
		}
	}