function getAllBowties(){
	$.ajax({
		method: 'GET',
		url: '/api/bowties'
	}).done(function(resp){
		buildBowtieList(resp);
	})	
}


function getOneBowtie(id){
	$.ajax({
		method: 'GET',
		url: '/api/bowties/' + id
	}).done(function(resp){
		modalGenerate(resp);
	})
}

function addBowtieEventListener(){
	$('.bowtie').click(function(event){
		getOneBowtie(event.currentTarget.dataset.id);
	})
}

function modalGenerate(bowtieObject){
	$('#modalDisplay').empty();
	var modalId = 'modal_' + bowtieObject.id;
	var newElem = 	"<div class='modal fade' id=" + modalId + ">" +
						"<div class='modal-dialog' role='document'>" +
							"<div class='modal-content'>" +
      							"<div class='modal-header'>" +
        							"<button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
          								"<span aria-hidden='true'>&times;</span>" +
									"</button>" +
        							"<h4 class='modal-title'>" + bowtieObject.material + ' ' + bowtieObject.style + "</h4>" +
 							    "</div>" +
								"<div class='modal-body'>" +
									"<div id='view'>" +
										"<p>Material: " + bowtieObject.material + "</p>" +
										"<p>Pattern: " + bowtieObject.pattern + "</p>" +
										"<p>Style: " + bowtieObject.style + "</p>" +
										"<p>Wholsale Price: $" + bowtieObject.wholesale_price + "</p>" +
										"<p>Retail Price: $" + bowtieObject.retail_price + "</p>" +
										"<p>Image URL: " + bowtieObject.image_url + "</p>" +
									"</div>" +
									"<div id='edit' class='hide'>" +
										"<div class='form-group'>" +
											"<label for='inputMaterial'>Material</label>" +
											"<input type='text' class='form-control' id='inputMaterial' value=" + bowtieObject.material + ">" +
										"</div>" +
										"<div class='form-group'>" +
											"<label for='inputPattern'>Pattern</label>" +
											"<input type='text' class='form-control' id='inputPattern' value=" + bowtieObject.pattern + ">" +
										"</div>" +
										"<div class='form-group'>" +
											"<label for='inputStyle'>Style</label>" +
											"<input type='text' class='form-control' id='inputStyle' value=" + bowtieObject.style + ">" +
										"</div>" +
										"<div class='form-group'>" +
											"<label for='inputWholesalePrice'>Wholesale Price</label>" +
											"<input type='number' class='form-control' id='inputWholesalePrice' value=" + bowtieObject.wholesale_price + ">" +
										"</div>" +
										"<div class='form-group'>" +
											"<label for='inputRetailPrice'>Retail Price</label>" +
											"<input type='number' class='form-control' id='inputRetailPrice' value=" + bowtieObject.retail_price + ">" +
										"</div>" +
										"<div class='form-group'>" +
											"<label for='inputImageUrl'>Image URL</label>" +
											"<input type='text' class='form-control' id='inputImageUrl' value=" + bowtieObject.image_url + ">" +
										"</div>" +
									"</div>" +
								"</div>" +
								"<div class='modal-footer'>" +
									"<button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>" +
									"<button type='button' class='btn btn-primary' id='launchEditModal' data-id="+bowtieObject.id+">Make changes</button>" +
									"<button type='button' class='btn btn-primary hide' id='saveChanges' data-dismiss='modal' data-id="+bowtieObject.id+">Save changes</button>" +
								"</div>" +
							"</div>" +
						"</div>" +
					"</div>";
	$('#modalDisplay').append(newElem);
	var target = '#modal_'+bowtieObject.id;
	$(target).modal('show')
	addBowtieEditEventListener();
}

function addBowtieEditEventListener(){
	$('#launchEditModal').click(function(){
		$('#view').addClass('hide');
		$('#edit').removeClass('hide');
		$('#launchEditModal').addClass('hide');
		$('#saveChanges').removeClass('hide');
	})
	$('#saveChanges').click(function(event){
		//function to compile a new object and send it back
		var updatedBowtie = {
			// id: event.currentTarget.dataset.id,
			material: $('#inputMaterial').val(),
			pattern: $('#inputPattern').val(),
			style: $('#inputStyle').val(),
			wholesale_price: parseFloat($('#inputWholesalePrice').val()),
			retail_price: parseFloat($('#inputRetailPrice').val()),
			image_url: $('#inputImageUrl').val()
		}
		console.log(updatedBowtie);
		$.ajax({
			method: 'PATCH',
			url: '/api/bowties/' + event.currentTarget.dataset.id,
			data: updatedBowtie
		}).done(function(){
			window.location.href = '/bowties'
		})
	})
}

function buildBowtieList(array){
	var newElem = ""
	for(var i = 0; i < array.length; i++){
		newElem += "<div class='col-xs-4'><div class='bowtie' data-id="+array[i].id+"><h3>"+array[i].pattern+" "+array[i].style+"</h3><p>"+array[i].retail_price+"</p></div></div>"
	}
	$('#list-display').append(newElem);
	addBowtieEventListener();
}

function generateModalForNewBowtie(){
	console.log('new');
	$('#modalDisplay').empty();
	var newElem = 	"<div class='modal fade' id=newModal>" +
						"<div class='modal-dialog' role='document'>" +
							"<div class='modal-content'>" +
      							"<div class='modal-header'>" +
        							"<button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
          								"<span aria-hidden='true'>&times;</span>" +
									"</button>" +
        							"<h4 class='modal-title'>New Bowtie Details</h4>" +
 							    "</div>" +
								"<div class='modal-body'>" +
									"<div id='new'>" +
										"<div class='form-group'>" +
											"<label for='inputMaterial'>Material</label>" +
											"<input type='text' class='form-control' id='inputMaterial'>" +
										"</div>" +
										"<div class='form-group'>" +
											"<label for='inputPattern'>Pattern</label>" +
											"<input type='text' class='form-control' id='inputPattern'>" +
										"</div>" +
										"<div class='form-group'>" +
											"<label for='inputStyle'>Style</label>" +
											"<input type='text' class='form-control' id='inputStyle'>" +
										"</div>" +
										"<div class='form-group'>" +
											"<label for='inputWholesalePrice'>Wholesale Price</label>" +
											"<input type='number' class='form-control' id='inputWholesalePrice'>" +
										"</div>" +
										"<div class='form-group'>" +
											"<label for='inputRetailPrice'>Retail Price</label>" +
											"<input type='number' class='form-control' id='inputRetailPrice'>" +
										"</div>" +
										"<div class='form-group'>" +
											"<label for='inputImageUrl'>Image URL</label>" +
											"<input type='text' class='form-control' id='inputImageUrl'>" +
										"</div>" +
									"</div>" +
								"</div>" +
								"<div class='modal-footer'>" +
									"<button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>" +
									"<button type='button' class='btn btn-primary' id='createNewBowtieBtn' data-dismiss='modal'>Create New Bowtie</button>" +
								"</div>" +
							"</div>" +
						"</div>" +
					"</div>";
	$('#modalDisplay').append(newElem);
	$('#newModal').modal('show')
	addNewBowtieEventListener();
}

function addNewBowtieEventListener(){
	$('#createNewBowtieBtn').click(function(){
		var newBowtie = {
			// id: event.currentTarget.dataset.id,
			material: $('#inputMaterial').val(),
			pattern: $('#inputPattern').val(),
			style: $('#inputStyle').val(),
			wholesale_price: parseFloat($('#inputWholesalePrice').val()),
			retail_price: parseFloat($('#inputRetailPrice').val()),
			image_url: $('#inputImageUrl').val()
		}
		$.ajax({
			method: 'POST',
			url: '/api/bowties/',
			data: newBowtie
		}).done(function(){
			window.location.href = '/bowties'
		})
	})
}

$(document).ready(function(){
	//function to read the json and build the list of bowties
	getAllBowties();
	//event listener to launch 'new' modal function
	$('#newBowtieButton').click(function(){
		generateModalForNewBowtie();
	})
})