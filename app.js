// init github instance
const github = new Github();

// init UI instance
const ui = new UI();

// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // make the call
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        // show error alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
