(function () {
    var data = [
        {
            name: 'GitHub',
            link: 'https://github.com',
            icon: 'https://github.com/apple-touch-icon-144.png'
        },
        {
            name: 'Habrahabr',
            link: 'http://habrahabr.ru',
            icon: 'http://hsto.org/storage/habrastock/i/habralogo.jpg'
        },
        {
            name: 'Toster',
            link: 'http://toster.ru',
            icon: 'https://toster.ru/images/toster_share.png'
        },
        {
            name: 'Stack Overflow',
            link: 'http://stackoverflow.com/',
            icon: 'http://cdn.sstatic.net/stackoverflow/img/apple-touch-icon.png'
        },
        {
            name: 'PhpClub',
            link: 'http://phpclub.ru/talk',
            icon: 'http://phpclub.ru/talk/styles/default/russian/logotransp.gif',
            color: '#176093'
        },
        {
            name: 'Digital Ocean',
            link: 'https://www.digitalocean.com',
            icon: 'https://www.digitalocean.com/assets/images/logo-3b02463b.jpg'
        }
    ];
    var items = document.createDocumentFragment();
    data.forEach(function (item) {
        var link = document.createElement('a');
        link.title = item.name;
        link.className = 'item';
        link.href = item.link;
        link.style.backgroundImage = 'url(' + item.icon + ')';
        if (item.color) {
            link.style.backgroundColor = item.color;
        }
        items.appendChild(link);
    });
    document.getElementById('items').appendChild(items);
})();
