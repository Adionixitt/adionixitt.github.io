let lang = navigator.language.split('-')[0] || navigator.userLanguage;
let langBtn = document.querySelector('#lang-btn');

let langDict = {
    'en': {
        'lang': 'EN',
        'title': 'Hi, it\'s <b>Egor Ivashkov</b>',
        'description': 'and this is my personal website that is <i>currently under development</i>.',
        'telegram': 'Telegram',
        'email': 'Email'
    },
    'ru': {
        'lang': 'RU',
        'title': 'Привет, меня зовут <b>Ивашков Егор</b>',
        'description': 'и это мой личный сайт, который <i>в настоящее время находится в разработке</i>.',
        'telegram': 'Телеграм',
        'email': 'Электронная почта'
    }
};

langBtn.addEventListener('click', () => {
    lang = lang === 'en' ? 'ru' : 'en';
    document.querySelectorAll('*[data-lang]').forEach(langItem => {
        langItem.innerHTML = langDict[lang][langItem.getAttribute('data-lang')];
    });
});