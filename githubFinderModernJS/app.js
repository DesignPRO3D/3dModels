// Init Github
const github = new Github;
// Init UI
const ui = new UI;

// Search input
const searhUser = document.getElementById('searchUser');

// Search input event listener
searhUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if (userText !== '') {
    // Make http call
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
        return;
      }

      // SHO PROFILE --------------
      ui.showProfile(data.profile);
      ui.showRepos(data.repos);

    }).catch((err) => {
      console.log(err);
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});