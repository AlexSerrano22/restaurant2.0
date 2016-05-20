/**
 * Created by alex on 30/01/2016.
 */

(function ($, global){

    global.items = {};
    /*** -----------------------------------------Beging Elements of Menu------------------------------------   */
//------------------------------- ITEMS ----------------------------
    items.getItems = function(){
        return $.when(
                $.ajax({
                    type : "GET",
                    url : "./services/services.php", //"./services/services.php",
                    data : {service : "100"},
                    datatype : "json"
                })).then(function (data) {
                return $.parseJSON(data);
            });
    };


    items.addItems = function(name, cost, subMenu){
        $.when($.ajax({
                method : "POST",
                url : "./services/services.php", //"./services/services.php", //"./services/addItems.php",
                data : {service : "200",name : name, cost : cost, subMenu : subMenu},
                datatype : "json"
            }
        )).then(function (data){
            alert(data);
        });
    };

    items.updateItems = function(id, name, cost, subMenu) {
        $.when($.ajax({
            method : "POST",
            url : "./services/services.php", //"./services/updateItems.php",
            data : {service : "300",id : id, name: name, cost : cost, subMenu : subMenu},
            datatype : "json"
        }
        )).then(function(data){
                alert(data);
            }
        );
    };

    items.deleteItems = function(id) {
        $.when($.ajax({
                method : "POST",
                url : "./services/services.php", //"./services/deleteItems.php",
                data : {service : "400",id : id},
                datatype : "json"
            }
        )).then(function(data){
                alert(data);
            }
        );
    };
    //------------------------------- END ITEMS ----------------------------

    //-----------------------------SUBMENU--------------------------------
    items.getSubMenu = function(){
        return $.when(
            $.ajax({
                type : "GET",
                url : "./services/services.php", //"./services/services.php",
                data : {service : "101"},
                datatype : "json"
            })).then(function (data) {
                return $.parseJSON(data);
            });
    };


    items.addSubMenu = function(name, cost, subMenu){
        $.when($.ajax({
                method : "POST",
                url : "./services/services.php", //"./services/addSubMenu.php",
                data : {service : "201",name : name, cost : cost, subMenu : subMenu},
                datatype : "json"
            }
        )).then(function (data){
            alert(data);
        });
    };

    items.updateSubMenu = function(id, name, cost, subMenu) {
        $.when($.ajax({
                method : "POST",
                url : "./services/services.php", //"./services/updateSubMenu.php",
                data : {service : "301",id : id, name: name, cost : cost, subMenu : subMenu},
                datatype : "json"
            }
        )).then(function(data){
                alert(data);
            }
        );
    };

    items.deleteSubMenu = function(id) {
        $.when($.ajax({
                method : "POST",
                url : "./services/services.php", //"./services/deleteSubMenu.php",
                data : {service : "401",id : id},
                datatype : "json"
            }
        )).then(function(data){
                alert(data);
            }
        );
    };
    //-----------------------------END SUBMENU--------------------------------

    //----------------------------MENU---------------------------------------------
    items.getMenu = function(){
        return $.when(
            $.ajax({
                type : "GET",
                url : "./services/services.php", //"./services/services.php",
                data : {service : "102"},
                datatype : "json"
            })).then(function (data) {
                return $.parseJSON(data);
            });
    };

    items.addMenu = function(name, cost, subMenu){
        $.when($.ajax({
                method : "POST",
                url : "./services/services.php", //"./services/addMenu.php",
                data : {service : "202",name : name, cost : cost, subMenu : subMenu},
                datatype : "json"
            }
        )).then(function (data){
            alert(data);
        });
    };

    items.updateMenu = function(id, name, cost, subMenu) {
        $.when($.ajax({
                method : "POST",
                url : "./services/services.php", //"./services/updateMenu.php",
                data : {service : "302",id : id, name: name, cost : cost, subMenu : subMenu},
                datatype : "json"
            }
        )).then(function(data){
                alert(data);
            }
        );
    };

    items.deleteMenu = function(id) {
        $.when($.ajax({
                method : "POST",
                url : "./services/services.php", //"./services/deleteMenu.php",
                data : {service : "402",id : id},
                datatype : "json"
            }
        )).then(function(data){
                alert(data);
            }
        );
    };
    //----------------------------END MENU---------------------------------------------


    /*** -----------------------------------------End Elements of Menu------------------------------------   */

    /*** ��������������������������������������������������������������������������������������������������   */

    /*** -----------------------------------------Beging Elements of orden------------------------------------   */

        //------------------------------- ITEMS ----------------------------
    items.getOrderItems = function(){
        return $.when(
            $.ajax({
                type : "GET",
                url : "./services/services.php", //"./services/services.php",
                data : {service : "103"},
                datatype : "json"
            })).then(function (data) {
                return $.parseJSON(data);
            });
    };


    items.addOrderItems = function(name, cost, subMenu){
        $.when($.ajax({
                method : "POST",
                url : "./services/services.php", //"./services/services.php", //"./services/addItems.php",
                data : {service : "203",name : name, cost : cost, subMenu : subMenu},
                datatype : "json"
            }
        )).then(function (data){
            alert(data);
        });
    };

    items.updateOrderItems = function(id, name, cost, subMenu) {
        $.when($.ajax({
                method : "POST",
                url : "./services/services.php", //"./services/updateItems.php",
                data : {service : "303",id : id, name: name, cost : cost, subMenu : subMenu},
                datatype : "json"
            }
        )).then(function(data){
                alert(data);
            }
        );
    };

    items.deleteOrderItems = function(id) {
        $.when($.ajax({
                method : "POST",
                url : "./services/services.php", //"./services/deleteItems.php",
                data : {service : "403",id : id},
                datatype : "json"
            }
        )).then(function(data){
                alert(data);
            }
        );
    };
    //------------------------------- END ITEMS ----------------------------

    items.createPlaces = function(number){
            var table=[];
            var comb = [];
            var numbers = [];
            for(var i = 0 ; i<number ; i++){
                table[i] = {'num' : i};
                comb[i] = {'num' : i};
                numbers[i] = {'num' : i};
            }
            return [{"id": "Mesas","elements":table },{"id": "Peine","elements":comb },{"id": "Personas","elements":numbers }];
    };

    /*** -----------------------------------------End Elements of orden------------------------------------   */
    /*** �����������������������������������������������������������������������������������              ���������������   */

    /*** -----------------------------------------Beging Tables Actives -----------------------------------   */

    items.getTables = function(){
        return $.when(
            $.ajax({
                type : "GET",
                url : "./services/services.php", //"./services/services.php",
                data : {service : "104"},
                datatype : "json"
            })).then(function (data) {
            return $.parseJSON(data);
        });
    };

    /*** -----------------------------------------End  Tables Actives ------------------------------------   */
    /*** ��������������������������������������������������������������������������������������������������   */

    /*** -----------------------------------------Start new Order Actions ------------------------------------   */
    /*** ������������������������������������������������������������������            ��������������������������������   */

    items.exist = function(table, comb){
        return $.when(
            $.ajax({
                type : "GET",
                url : "./services/services.php", //"./services/services.php",
                data : {service : "999", table:table, comb:comb},
                datatype : "json"
            })).then(function (data) {
            return $.parseJSON(data);
        });
    };

    items.newOrder = function(table, comb, waiter, people, idOrder){
        return $.when(
            $.ajax({
                type : "GET",
                url : "./services/services.php", //"./services/services.php",
                data : {service : "901", table:table, comb:comb, waiter:waiter, people:people, order:idOrder},
                datatype : "json"
            })).then(function (data) {
            return $.parseJSON(data);
        });
    };

    items.nextOrder = function(){
        return $.when(
            $.ajax({
                type : "GET",
                url : "./services/services.php", //"./services/services.php",
                data : {service : "998"},
                datatype : "json"
            })).then(function (data) {
            return $.parseJSON(data);
        });
    };

    /*** -----------------------------------------Start new Order Actions ------------------------------------   */
    /*** ������������������������������������������������������������������            ��������������������������������   */

})(jQuery, window);


