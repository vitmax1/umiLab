$(document).ready(function () {
	///////////////////// Перенос строки в textarea /////////////////////////
	$('#textarea').attr('placeholder', 'Свой проект по созданию универсальной' + '\n' + 'инфраструктуры строительства');

	/////////////////////  Валидация формы  /////////////////////////
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
				required: "Заполните поле"
			},
			phone: {
				required: "Заполните поле"
			},
			email: {
				email: "Введите корректный email",
				required: "Заполните поле"
			},
		},
		
	});
	$(".phone").mask("8 (999) 999-9999");
});