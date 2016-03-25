/**
 * Created by Brandon Marshall on 4/20/2015.
 */

//Function To Display Popup
function popupShow() {
  $("#popupForm").show();
}

//Function to Hide Popup
function popupHide() {
  $("#popupForm").hide();
}

// Validating Field and POSTing Data.
function submitForm() {
  var empty = false;
  var status = "";
  // get values from fields
  var email = $("#email").val();
  //var firstName = $("#firstName").val();
  //var lastName = $("#lastName").val();
  var token = $("#token").val();
  var type = $("#contact").val();
  // check for empty fields
  //if (firstName === null || firstName === "") {
  //    status += "First Name must be filled out.\r\n";
  //    empty = true;
  //}
  //if (lastName === null || lastName === "") {
  //    status += "Last Name must be filled out.\r\n";
  //    empty = true;
  //}
  if (email === null || email === "") {
    status += "Email must be filled out.\r\n";
    empty = true;
  }
  if (token === null || token === "") {
    status += "Session Error, please refresh page.\r\n";
    empty = true;
  }
  // if field if empty show alert with empty field
  if (empty === true) {
    alert(status);
    return false;
  }
  // submit sign up values to database
  $.post("http://www.surrealindustries.net/email_list.html", {
      email: email,
      //fName: firstName,
      //lName: lastName,
      token: token,
      type: type
    },
    function(data) {
      if (data) {
        // show results of sign up
        alert(data);
        // hide form after sign up
        popupHide();
      } else {
        alert("Error, could not communicate to server.\r\nPlease try again later.");
      }
    }
  );
  // return false to avoid changing pages
  return false;
}