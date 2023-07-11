function submit(){
    var ver_alumno_array=[];
    var nombre_alumno_array=[];

    for(var j=1; j<=4; j++){
        var nombre_alumno=document.getElementById("nombre_alumno_"+j).value;
        nombre_alumno_array.push(nombre_alumno);
    }

        var longitud_nombre_alumno_array=nombre_alumno_array.length;

        for(var k=0; k<longitud_nombre_alumno_array; k++){
            ver_alumno_array.push("<h4>NOMBRE - "+ nombre_alumno_array[k] +"</h4>");
        }

        document.getElementById("ver_nombre_con_comas").innerHTML=ver_alumno_array;

        var remove_comas=ver_alumno_array.join(" ");

        document.getElementById("ver_nombre_sin_comas").innerHTML=remove_comas;

        document.getElementById("boton_enviar").style.display= "none";
        document.getElementById("boton_ordenar").style.display= "inline-block";

    }

    function ordenar(){
        nombre_alumno_array.sort();

        var ver_alumno_array_ordenar=[];

        var longitud_nombre_alumnos_array=nombre_alumno_array.length;

        for ( var k=0; k<longitud_nombre_alumnos_array; k++){
            ver_alumno_array.push("<h4>NOMBRE - " + nombre_alumno_array[k] + "</h4");
        }

        var remove_comas=ver_alumno_array_ordenar.join(" ");

        document.getElementById("ver_nombre_sin_comas").innerHTML=remove_comas;

    }
    