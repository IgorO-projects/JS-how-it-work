function savePassword(password) {

    function checkPassword(str) {
        if(password === str) {
            return true;
        }
        return false;
    }

    return checkPassword;
}

const checkUserPassword = savePassword('qwerty');

alert(checkUserPassword(prompt('Input password')));
