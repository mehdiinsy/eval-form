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
//     $('.sub').attr('disabled', 'true');
 
//     $('#it').keyup('input', function() {
//         if ($(this).val().length > 0) {
//             $('.sub').removeAttr("disabled");
//             $("#labn").css("color", "black");
//             $("#labp").css("color", "black");
//         }
//         else{
//             $("#labn").css("color", "red");
//             $("#labp").css("color", "red");
//         }
        
//     });
// });

// ================================================================mdp et confirm mdp et bouton disabled si non concordance des mdp


$(document).ready(function () {
    function checkPasswordMatch() {
        var password = $("#pass").val();
        var confirmPassword = $("#cpass").val();
        if (password != confirmPassword){
            $("#labpass").css("color", "red");
            $(".sub").attr('disabled', 'true');
        }
    
            else{
                $("#labpass").css("color", "lime");
                $(".sub").removeAttr('disabled');
    }};
   $("#cpass").keyup(checkPasswordMatch);
});

// ======================================================================

// $(document).ready(function() {
//     $('input').on('keyup', function() {
//       let empty = false;
  
//       $('input').each(function() {
//         empty = $(this).val().length == 0;
//       });
  
//       if (empty)
//         $('.actions input').attr('disabled', 'disabled');
//       else
//         $('.actions input').attr('disabled', false);
//     });
//   });

//   $(document).ready(function() {
//     if($("#it").val().length == 0){
//         $(".sub").attr("disabled", "true");
//     }
// });

