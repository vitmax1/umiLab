$(document).ready(function () {

	$('#textarea').attr('placeholder', 'Свой проект по созданию универсальной' + '\n' + 'инфраструктуры строительства');

	$(".phone").mask("8 (999) 999-9999");

	$('#feedback-form').validate({
		errorClass: "invalid",
		errorElement: "div",
		rules: {
			username: {
				required: true,
				minlength: 2,
				maxlength: 15
			},
			email: {
				required: true,
				email: true
			},
			phone: "required",
		},
		messages: {
			username: {
				minlength: jQuery.validator.format("от 2 до 15 символов"),
				maxlength: jQuery.validator.format("до 15 символов"),
				required: "заполните поле"
			},
			phone: {
				required: "заполните поле"
			},
			email: {
				email: "введите корректный email",
				required: "заполните поле"
			},
		},	
	});

});