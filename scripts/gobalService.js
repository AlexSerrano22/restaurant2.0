/**
 * Created by alex on 30/01/2016.
 */

(function ($, global){
    global.items = {};
//-------------------------------ITEMS----------------------------
    items.getItems = function(){
        $.when(
            $.ajax("./services/getItems.php")
        ).then(function (data) {
            global.item = $.parseJSON(data);
        });
    };


    items.addItems = function(name, cost, subMenu){
        $.when($.ajax({
                method : "POST",
                url : "./services/addItems.php",
                data : {name : name, cost : cost, subMenu : subMenu}
            }
        )).then(function (data){
            alert(data);
        });
    };

    items.updateItems = function(id, name, cost, subMenu) {
        $.when($.ajax({
            method : "POST",
            url : "./services/updateItems.php",
            data : {id : id, name: name, cost : cost, subMenu : subMenu}
        }
        )).then(function(data){
                alert(data);
            }
        );
    }

    items.deleteItems = function(id) {
        $.when($.ajax({
                method : "POST",
                url : "./services/deleteItems.php",
                data : {id : id}
            }
        )).then(function(data){
                alert(data);
            }
        );
    }

    //-----------------------------SUBMENU--------------------------------
    items.getSubMenu = function(){
        $.when(
            $.ajax("./services/getSubMenu.php")
        ).then(function (data) {
                global.item = $.parseJSON(data);
            });
    };


    items.addSubMenu = function(name, cost, subMenu){
        $.when($.ajax({
                method : "POST",
                url : "./services/addSubMenu.php",
                data : {name : name, cost : cost, subMenu : subMenu}
            }
        )).then(function (data){
            alert(data);
        });
    };

    items.updateSubMenu = function(id, name, cost, subMenu) {
        $.when($.ajax({
                method : "POST",
                url : "./services/updateSubMenu.php",
                data : {id : id, name: name, cost : cost, subMenu : subMenu}
            }
        )).then(function(data){
                alert(data);
            }
        );
    }

    items.deleteSubMenu = function(id) {
        $.when($.ajax({
                method : "POST",
                url : "./services/deleteSubMenu.php",
                data : {id : id}
            }
        )).then(function(data){
                alert(data);
            }
        );
    }

    //----------------------------MENU---------------------------------------------
    items.getMenu = function(){
        $.when(
            $.ajax("./services/getMenu.php")
        ).then(function (data) {
                global.item = $.parseJSON(data);
            });
    };


    items.addMenu = function(name, cost, subMenu){
        $.when($.ajax({
                method : "POST",
                url : "./services/addMenu.php",
                data : {name : name, cost : cost, subMenu : subMenu}
            }
        )).then(function (data){
            alert(data);
        });
    };

    items.updateMenu = function(id, name, cost, subMenu) {
        $.when($.ajax({
                method : "POST",
                url : "./services/updateMenu.php",
                data : {id : id, name: name, cost : cost, subMenu : subMenu}
            }
        )).then(function(data){
                alert(data);
            }
        );
    }

    items.deleteMenu = function(id) {
        $.when($.ajax({
                method : "POST",
                url : "./services/deleteMenu.php",
                data : {id : id}
            }
        )).then(function(data){
                alert(data);
            }
        );
    }


items.getItems();



})(jQuery, window);