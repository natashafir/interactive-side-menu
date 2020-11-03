const info = [
    {
        id: 0,
        name: 'Mexico City',
        img_url: './img/cdmx.jpeg'
    },
    {
        id: 1,
        name: 'Guadalajara',
        img_url: './img/gdl.jpg'
    },
    {
        id: 2,
        name: 'Cancún',
        img_url: './img/cancun.jpg'
    },
    {
        id: 3,
        name: 'Tulum',
        img_url: './img/tulum.jpg'
    },
    {
        id: 4,
        name: 'Los Colorados',
        img_url: './img/colorados.jpg'
    },
    {
        id: 5,
        name: 'Puebla',
        img_url: './img/puebla.jpg'
    },
    {
        id: 6,
        name: 'La Playa del Amor',
        img_url: './img/amor.jpg'
    },
    {
        id: 7,
        name: 'Cenote Suytun',
        img_url: './img/suytun.jpg'
    }
];

let places = document.getElementById('main');
let navItems = document.getElementById('nav__wrapper');
let img = document.createElement('img');
img.src = info[0].img_url;
places.appendChild(img);

info.forEach(function (element, index) {
    const but = document.createElement('button');
    but.id = info[index].id;
    but.innerHTML = info[index].name;
    navItems.appendChild(but);
    const buter = document.getElementById(info[index].id);
    buter.addEventListener('click', event => {
        places.removeChild(places.lastChild);
        img.src = info[index].img_url;
        places.appendChild(img);
    });
});

