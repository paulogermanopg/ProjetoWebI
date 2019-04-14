$(function () {
    $("input[name=numero]").click(function () {
        $("#tela").val($("#tela").val() + $(this).val());
    });
});