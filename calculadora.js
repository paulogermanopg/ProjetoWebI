$(function () {

    var valor01, valor02, operacao;

    $("input[name=numero]").click(function () {
        $("#tela").val($("#tela").val() + $(this).val());
    });
    $("input[name=ce]").click(function () {
        $("#tela").val('');
        $("#operacao").text('');
    });
    $("input[name=soma]").click(function () {
        if($("#tela").val() != ''){
            valor01 = parseFloat($("#tela").val());
            $("#tela").val('');
            operacao = "soma";
            $("#operacao").text($(this).val());
        }else {
            alert('Não se calcula algo vazio!');
        }
    });
    $("input[name=subtracao]").click(function () {
        if($("#tela").val() != ''){
            valor01 = parseFloat($("#tela").val());
            $("#tela").val('');
            operacao = "subtracao";
            $("#operacao").text($(this).val());
        }else {
            alert('Não se calcula algo vazio!');
        }
    });
    $("input[name=vezes]").click(function () {
        if($("#tela").val() != ''){
            valor01 = parseFloat($("#tela").val());
            $("#tela").val('');
            operacao = "vezes";
            $("#operacao").text($(this).val());
        }else {
            alert('Não se calcula algo vazio!');
        }
    });
    $("input[name=divisao]").click(function () {
        if($("#tela").val() != ''){
            valor01 = parseFloat($("#tela").val());
            $("#tela").val('');
            operacao = "divisao";
            $("#operacao").text($(this).val());
        }else {
            alert('Não se calcula algo vazio!');
        }
    });
    $("input[name=igual]").click(function () {
        if($("#tela").val() != ''){
            valor02 = parseFloat($("#tela").val());
            if(operacao == "soma"){
                $("#tela").val(valor01 + valor02);
            }
            else if(operacao == "subtracao"){
                $("#tela").val(valor01 - valor02);
            }
            else if(operacao == "vezes"){
                $("#tela").val(valor01 * valor02);
            }
            else if(operacao == "divisao"){
                $("#tela").val(valor01 / valor02);
            }
            else{

            }
        }else {
            alert('Não se calcula algo vazio!');
        }
    });
    $("input[name=apagar]").click(function () {
        var total_caracteres = $("#tela").val().length;
        var valor = $("#tela").val();

       valor = valor.replace(valor.charAt(total_caracteres - 1), "");
        $("#tela").val(valor);
    });
});
