function validate() {
  // use const because these vars will never be overwritten and it is self documenting and will help debugging
  // Try to always declare all vars for a function at top of scope if their scope is function-wide.
  // (about the next line) This could just as easily be '/dashboard.html'. No need to access window if you dont want.
  const redirectTo = `${window.location.origin}/../dashboard.html`;
  const username = document.getElementById("userName").value;
  const password = document.getElementById("passWord").value;

  // Always use === equal over ==. == will coerce values from one type to another if they are true.
  // For example (0 == false) => true but (0 === false) => false
  if (username === "admin" && password === "password") {
    window.location = redirectTo; // Redirecting to other page.
    Notiflix.Notify.Success("You will be redirected shortly.");
    return false; // you dont have to return since you will redirect
  } else {
    Notiflix.Notify.Failure("Username password incorrect!");
  }
}
