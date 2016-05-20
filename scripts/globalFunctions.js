/**
 * Created by alex on 21/03/2016.
 */
(function() {

    dust.onLoad = function(name, callback) {
        console.log("load: " + name);
        $.ajax("./tpl/" + name + ".tpl.html", {
            success: function(data) {
                callback(undefined, data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                callback(textStatus, undefined);
            }
        });
    };

    $("#ordenNumber").val = 5 ;

    $("body").on("click", ".select-order", function(e){
        id = $(e.currentTarget).data("order");
    })

})();

function saveElement(id){
    var Jid = $("#Element"+id);
    var name = Jid.data("namea");
    var price = Jid.data("cost");
    var order =  $("#ordenNumber").val();

    console.log(name+" "+price+" "+order);


}

function createCokkie(obj){
    for(var i in obj) {
        $.cookie(obj[i].id,obj[i].value);
    }
}

function setValue(table, comb, people, order){
    table.text($.cookie("table"));
    comb.text($.cookie("comb"));
    people.text($.cookie("people"));
    order.text($.cookie("idOrder"));

}

function deleteValue(){
    $.removeCookie("table");
    $.removeCookie("comb");
    $.removeCookie("people");
    $.removeCookie("idOrder");

    location.href = "./index.html";
}
function AllValue(table, comb, people){
    var obj = [];
    var waiter="Victor";
    if (table.val().length > 0 && parseInt(table.val()) > 0 ){
        if(comb.val().length > 0 && parseInt(comb.val()) > 0 ){
            if(people.val().length > 0 && parseInt(people.val()) > 0 ){

                items.exist(parseInt(table.val()),  parseInt(comb.val())).then(function(result){
                    if(result.exist == true){
                        alert("Esta mesa esta Atendida por: "+result.waiter);
                    }else{
                        var idOrder = $("#ordenNumber").val();
                        items.newOrder( parseInt(table.val()),  parseInt(comb.val()), waiter,  parseInt(people.val()), parseInt(idOrder)).then(function(newOrder){
                            console.log(newOrder);
                            if(newOrder.value == true){
                                obj = [{"id":"idOrder","value":parseInt(newOrder.idOrder)},{"id":"table","value":parseInt(table.val())},{"id":"comb","value":parseInt(comb.val())},{"id":"people","value":parseInt(people.val())}];
                                createCokkie(obj);
                                location.href = "./menu.html";
                            }else{
                                alert("Hubo un Error");
                            }
                        });
                    }
                });

            }else{
                alert("Ingresar Numero de Personas");
            }
        }else{
            alert("Ingresar Numero de Peine");
        }
    }else{
        alert("Ingresar Numero de Mesa");
    }
}

function getTables(){

}

function numbers(){
    $(".active-tables").toggleClass("toggled");
    $(".numbers").toggleClass("toggled");
}



