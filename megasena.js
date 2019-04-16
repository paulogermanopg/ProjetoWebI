$(function () {
    $("input[name=sorte]").click(function () {
        var mega = [];
        var numero;
        for(var i = 1; i <= 6; i++){
            var numero = Math.floor((Math.random() * 100) + 1);
            if((numero < 61) && (numero > 0)){
                if(i != 1){
                    var contador = 0;
                    for(var j=1; j <= mega.length; j++){
                        if(numero == mega[j]){
                            contador ++;
                        }
                    }
                    if(contador == 0){
                        mega[i] = numero;
                    }else{
                        i--;
                    }
                }else{
                    mega[i] = numero;
                }

            }else{
                i--;
            }

        }
        $("#n1").html(mega[1]);
        $("#n2").html(mega[2]);
        $("#n3").html(mega[3]);
        $("#n4").html(mega[4]);
        $("#n5").html(mega[5]);
        $("#n6").html(mega[6]);
        $("#div1").fadeIn(1000);
        $("#div2").fadeIn(2000);
        $("#div3").fadeIn(3000);
        $("#div01").fadeIn(1000);
        $("#div02").fadeIn(2000);
        $("#div03").fadeIn(3000);

    });
    $("input[name=limpar]").click(function () {
        $("#div1").fadeOut(1500);
        $("#div2").fadeOut(1000);
        $("#div3").fadeOut(500);
        $("#div01").fadeOut(1500);
        $("#div02").fadeOut(1000);
        $("#div03").fadeOut(500);
    });

});
