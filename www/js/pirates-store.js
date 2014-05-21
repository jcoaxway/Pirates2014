var PagosStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {
		$.ajax({
		dataType: "json",
		url: "http://192.168.64.133:8080/connections/v1/listafacturas?KeyId=32618093-21c0-4431-b0d3-2520b06cbe5c",
		//url: "http://192.168.64.133:8280/misfacturas",
		crossDomain: true,
		success: function (data) {
			myfacturas=data;//JSON.stringify(data);
			//alert("MyFacturas "+myfacturas);
			//return myfacturas;
		},
		error: function (data) {
			alert("Error de conexión");
		}
		});	
		//var t="MyFacturas "+myfacturas;
//alert("exists");		
//alert("MyFacturas "+myfacturas);

        callLater(callback,myfacturas);
    }
		
	this.findById = function(id, callback) {
		$.ajax({
		dataType: "json",
		url: "http://192.168.64.133:8080/connections/v1/listafacturas?KeyId=32618093-21c0-4431-b0d3-2520b06cbe5c",
		crossDomain: true,
		success: function (data) {
			myfacturas=data;
		},
		error: function (data) {
			alert("Error de conexión");
		}
		});	


		var facturas=myfacturas;
		
		var factura = null;
        var l = facturas.length;

        for (var i=0; i < l; i++) {
			if (facturas[i].id === id) {
			    factura = facturas[i];
                break;
            }
        }
        callLater(callback, factura);
    }


    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    callLater(successCallback);

}