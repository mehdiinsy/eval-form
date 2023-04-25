//======================================================= limite a la date du jour
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //Janvier est 0
var yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("date").setAttribute("max", today);

// ============================================================= chiffre jauge

$(function() {
	$('.jauge').next().text('--'); // Valeur par défaut
	$('.jauge').on('input', function() {
		var $set = $(this).val();
		$(this).next().text($set);
	});
});

// ============================================================== afficher mot de passe ou masquer

$(".af").click(function(){
    if($(this).is(":checked")){
        $(".mdp").attr("type", "text");
    }
        else{
            $(".mdp").attr("type", "password");
        }
});

// =============================================================== boutons disabled champs vide (pas bon)

// $(document).ready(function() {
//     $('.sub').attr('disabled', 'disabled');
 
//     $('#inp').on('input', function() {
//         if ($(this).val() !== '') {
//             $('.sub').removeAttr("disabled");
//         }
//         else {
//             $('.sub').attr('disabled', 'disabled');
//         }
//     });
// });

// ================================================================mdp et confirm mdp (pas bon)

// function checkPasswordMatch() {
//     var password = $("#pass").val();
//     var confirmPassword = $("#cpass").val();
//     if (password != confirmPassword)
//         $("#CheckPasswordMatch").html("Passwords does not match!");
//     else
//         $("#CheckPasswordMatch").html("Passwords match.");
// }
// $(document).ready(function () {
//    $("#txtConfirmPassword").keyup(checkPasswordMatch);
// });