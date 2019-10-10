export function passwordValidator(password) {
    if (!(new RegExp("^(?=.*[a-z])(?=.*[A-Z])").test(password))) return "* Password  must contain at least 1 lowercase and upparcase alphabetical character!";
    else if (!(new RegExp("^(?=.*[0-9])").test(password))) return "* Password must contain at least 1 numeric character!";
    else if (!(new RegExp("^(?=.{6,})").test(password))) return "* Password must be 6 characters or longer!";
    else if (!(/[a-zA-Z0-9]/.test(password))) return "* Password can contain only a-z, A-Z ,0-9 characters!";

    return "";
}

export function emailValidator(email) {
    // eslint-disable-next-line no-useless-escape
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(regex.test(String(email).toLowerCase()))
         return "";
     return "* Email address is not correct!"
}

export function nameValidator(name) {
    if (/^[a-zA-Z]{4,}$/.test(name))
        return "";

    return "* Name must be 4 characters or longer and contain only a-z A-Z characters";
}
