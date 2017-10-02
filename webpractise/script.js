$(document).ready(function(){


		$('#registration-form').validate({
	    rules: {
	      
		  
	      email: {
	        required: true,
	        email: true,
			
	      },
		  
	     agree: "required"
		  
	    },
			highlight: function(element) {
				$(element).closest('.control-group').removeClass('success').addClass('error');
						document.getElementById("email").style.borderBottomColor = "white";
				
				
			},
			success: function(element) {
				$(element).text('OK!').addClass('valid').closest('.control-group').removeClass('error').addClass('success');
				document.getElementById("email").style.borderBottomColor = "#35AEE3";
				document.getElementById("email").style.borderTopColor = "white";
				document.getElementById("email").style.borderLeftColor = "white";
				document.getElementById("email").style.borderRightColor = "white";
			}
	  });

}); // end document.ready
//
$(document).ready(function(){


		$('#registration-form2').validate({
		 rules: {


				  email: {
				   required: true,
				   email: true,

				  },

				 agree: "required"

				},
					highlight: function(element) {
						$(element).closest('.control-group').removeClass('success').addClass('error');
								document.getElementById("email1").style.borderBottomColor = "white";


					},
					success: function(element) {
						$(element).text('OK!').addClass('valid').closest('.control-group').removeClass('error').addClass('success');
						document.getElementById("email1").style.borderBottomColor = "#35AEE3";
						document.getElementById("email1").style.borderTopColor = "white";
						document.getElementById("email1").style.borderLeftColor = "white";
						document.getElementById("email1").style.borderRightColor = "white";
					}
			  });

}); // end document.ready
//
////function validateEmail(inputEmail){
////	
////	var emailFormat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
////	
////	if(inputEmail.value.match(emailFormat)){
////			document.form.email.focus();
////			return true;
////	}
////	else{
////		alert("You have entered an invalid email address!");
////		document.form.email.focus();
////		return false;
////	}
////}
////
