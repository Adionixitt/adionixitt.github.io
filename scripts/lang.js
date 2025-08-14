// let lang = navigator.language || navigator.userLanguage;
let lang = "en";
let langBtn = document.querySelector('#lang-btn');

let langDict = {
    'en': {
        'lang': 'EN',
        'title': 'My name is <b>Egor Ivashkov</b>',
        'description': 'this is my personal website that is <i>currently under development</i>.',
        'telegram': 'Telegram',
        'github': 'GitHub',
        'email': 'Email'
    },
    'ru': {
        'lang': 'RU',
        'title': 'Меня зовут <b>Ивашков Егор</b>',
        'description': 'это мой личный сайт, который <i>в настоящее время находится в разработке</i>.',
        'telegram': 'Телеграм',
        'github': 'GitHub',
        'email': 'Электронная почта'
    }
};

langBtn.addEventListener('click', () => {
    lang = lang === 'en' ? 'ru' : 'en';
    document.querySelectorAll('*[data-lang]').forEach(langItem => {
        langItem.innerHTML = langDict[lang][langItem.getAttribute('data-lang')];
    });
});