import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
    resources: {
        en:{
            translations:
                {
                    "Sign Up":"Sign Up",
                    "Sign In":"Sign In",
                    "LogIn":"LogIn",
                    "Email or phone":"Email or phone",
                    "Are you here for first time?":"Are you here for first time?",
                    "password":"password",
                    "confirm password":"confirm password",
                    "Already registered?":"Already registered?"
                }
        },

        ru:{
            translations:{
                "Sign Up":"Зарегистрироватса",
                "Sign In":"Войти",
                "LogIn":"Вход",
                "Email or phone":"Ел. почта или телефон",
                "Are you here for first time?":"Вы впервые здесь?",
                "password":"пароль",
                "confirm password":"подверждайте пароль",
                "Already registered?":"Уже зарегистрированы?"
            }
        }



    },
    fallbackLng: "en",
    debug: true,


    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },

    react: {
        wait: true
    }


});

export default i18n;