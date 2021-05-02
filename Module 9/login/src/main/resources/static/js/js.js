$(document).ready(function() {
		var path = window.location.pathname;
    $("#" + path.substring(1,path.length)).addClass("active");
		
		var category = getUrlParam("category");
		var product = getUrlParam("product");
		$('#categoryField option[value='+category+']').prop({defaultSelected: true});
		$('#productField option[value='+product+']').prop({defaultSelected: true});
});

function getUrlParam(name){
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function getProducts(){
	($("#categoryField").val() == "" ? ($("#productField").prop('disabled', true), $("#quantityField").prop('disabled', true)) : setProducts());
}

function setProducts(){
	var category = $("#categoryField").val();
	window.location.href = "/home?category=" + category;
}

function getQuantity(){
	($("#productField").val() == "" ? ($("#quantityField").prop('disabled', true), $("#submit").prop('disabled', true)) : setQuantity());
}

function setQuantity(){
  var category = $("#categoryField").val();
  var product = $("#productField").val();
	window.location.href = "/home?category=" + category + "&product=" + product;
}

function updateQuantity(object, pid){
  var quantity = $("#selectedquantity" + object.name).val();
	window.location.href = "/cart?sqty=" + quantity + "&pid=" + pid;
}

function enableSubmit(){
	($("#quantityField").val() == "" ? $("#submit").prop('disabled', true) : $("#submit").prop('disabled', false));
}

function resolveTicket(ticket_id){
	window.location.href = "/ticket?t=" + ticket_id;
}

function deleteProduct(pid){
	window.location.href = "/cart?sqty=0&pid=" + pid;
}