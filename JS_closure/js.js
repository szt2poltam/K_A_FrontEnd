const UsernameChecker = (() => {
    const existingUsernames = []; 
  
    const checkUsername = (username) => {
      return existingUsernames.includes(username);
    };
  
    const addUsername = (username) => {
      if (!checkUsername(username)) {
        existingUsernames.push(username);
        console.log(`Felhasználónév hozzáadva: ${username}`);
      } else {
        console.log(`Hiba: A felhasználónév már létezik!`);
      }
    };
  
    return {
      checkUsername,
      addUsername
    };
  })();
  
  UsernameChecker.addUsername('user1');
  console.log(UsernameChecker.checkUsername('user1')); 
  console.log(UsernameChecker.checkUsername('user2')); 
  UsernameChecker.addUsername('user2'); 
  