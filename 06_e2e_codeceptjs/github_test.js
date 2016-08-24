let time = 5;

Scenario('search', (I) => {
  I.amOnPage('https://github.com/search');
  I.wait(time);
  I.fillField('Search GitHub', 'mokayo');
  I.wait(time);
  I.pressKey('Enter');
  I.wait(time);
  I.see('miiixr/mokayo', 'a');
});

// step2 進行首頁按下註冊流程
// Scenario('signin', (I) => {
//   I.amOnPage('https://github.com/');
//   I.click('Sign in');
//   I.see('Sign in to GitHub');
//   I.wait(time);
//   I.fillField('Username or email address', 'user@user.com');
//   I.wait(time);
//   I.fillField('Password', '123456');
//   I.wait(time);
//   I.click('Sign in');
//   I.wait(time);
//   I.see('Incorrect username or password.', '.flash-error');
// });

// step3 進行首頁直接註冊流程
// Scenario('register', (I) => {
//   I.amOnPage('https://github.com/');
//   within('.js-signup-form', function () {
//     I.fillField('user[login]', 'User');
//     I.wait(time);
//     I.fillField('user[email]', 'user@user.com');
//     I.wait(time);
//     I.fillField('user[password]', 'user@user.com');
//     I.wait(time);
//     I.fillField('q', 'aaa');
//     I.click('button');
//   });
//   I.see('There were problems creating your account.');
//   I.wait(time);
//   I.click('Explore');
//   I.seeInCurrentUrl('/explore');
// });