const members = {
    campbell : {
        name: 'Reagan Campbell',
        photo: '/teamphotos/campbell.png',
        number: '991-268-1104',
        bio: ''
    },
    gwynn : {
        name: 'Thomas Gwynn',
        photo: '/teamphotos/gwynn.jpg',
        number: '991-268-1103',
        bio: ''
    },
    mays : {
        name: 'Wilma Mays',
        photo: '/teamphotos/mays.jpg',
        number: '991-268-1102',
        bio: ''
    },
    park : {
        name: 'Maxwell Park',
        photo: '/teamphotos/park.jpg',
        number: '991-268-1101',
        bio: ''
    },
    robinson : {
        name: 'Jacqueline Robinson', 
        photo: '/teamphotos/robinson.jfif',
        number: '991-268-1105',
        bio: ''
    },
    kamalnathan : {
        name: 'Jasmine Kamalnathan',
        photo: '/teamphotos/kamalnathan.jpg',
        number: '991-268-1106',
        bio: ''
    },
    muldrow : {
        name: 'Nasier Muldrow',
        photo: '/teamphotos/muldrow.jpg',
        number: '991-268-1109',
        bio: ''
    },
    mundell : {
        name: 'Gil Mundell',
        photo: '/teamphotos/garmoe.jfif',
        number: '991-268-1107',
        bio: ''
    },
    tiernee : {
        name: 'Jo Tiernee',
        photo: '/teamphotos/Jacob Tierney.jpg',
        number: '991-268-1108',
        bio: ''
    },
    young : {
        name: 'Loretta Young',
        photo: '/teamphotos/young.jpg',
        number: '991-268-1110',
        bio: ''
    },
    lange : {
        name: 'Stevie Lange',
        photo: '/teamphotos/lange.jfif',
        number: '991-268-1111',
        bio: ''
    },
    steinberg : {
        name: 'Rebecca Steinberg',
        photo: '/teamphotos/steinberg.jpg',
        number: '991-268-1112',
        bio: ''
    },
    zheng : {
        name: 'Mandy Zheng',
        photo: '/teamphotos/zheng.jpg',
        number: '991-268-1113',
        bio: ''
    },
    azari : {
        name: 'Terry Azari', 
        photo: '/teamphotos/azari.png',
        number: '991-286-1115',
        bio: ''
    },
    garmoe : {
        name: 'Barry Garmoe',
        photo: '/teamphotos/garmoe.png',
        number: '991-268-1114',
        bio: ''
    },
    gaskins : {
        name: 'Sammy Gaskins',
        photo: '/teamphotos/gaskins.png',
        number: '991-268-1116',
        bio: ''
    },
    lee : {
        name: 'Fenix Lee',
        photo: '/teamphotos/lee.jpg',
        number: '991-268-1117',
        bio: ''
    },
    moon : {
        name: 'Andrew Moon',
        photo: '/teamphotos/moon.jpg',
        number: '991-268-1119',
        bio: ''
    },
    fields : {
        name: 'Zachary Fields',
        photo: '/teamphotos/fields.jpg',
        number: '991-268-1118',
        bio: ''
    }
}

export default function handler(req, res) {
    if(req.method=="GET") {
        res.status(200).json({ members });
    } else {
        res.status(501);
    }
}
