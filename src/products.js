import product1 from './assets/1.png';
import product2 from './assets/2.png';
import product3 from './assets/3.png';
import product4 from './assets/4.png';
import product5 from './assets/5.png';
import product6 from './assets/6.png';

export const HEADPHONES = [
    {
        id: 1,
        title: 'Apple BYZ S852I',
        price: 2927,
        sale: 3527,
        rate: 4.7,
        img: product1,
    },
    {
        id: 2,
        title: 'Apple EarPods',
        price: 2327,
        sale: 2927,
        rate: 4.5,
        img: product2,
    },
    {
        id: 3,
        title: 'Apple EarPods',
        price: 2327,
        sale: 2927,
        rate: 4.5,
        img: product3,
    }
]

export const WIRELESS = [
    {
        id: 4,
        title: 'Apple AirPods',
        price: 9527,
        sale: 10127,
        rate: 4.7,
        img: product4,
    },
    {
        id: 5,
        title: 'GERLAX GH-04',
        price: 6527,
        sale: 7127,
        rate: 4.7,
        img: product5,
    },
    {
        id: 6,
        title: 'BOROFONE BO4',
        price: 7527,
        sale: 8127,
        rate: 4.7,
        img: product6,
    }
]

export const PRODUCTS = [...HEADPHONES, ...WIRELESS];