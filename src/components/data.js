import gallery1 from '../image/gallery01.png'
import gallery2 from '../image/gallery02.png'
import gallery3 from '../image/gallery03.png'
import gallery4 from '../image/gallery04.png'
import gallery5 from '../image/homeImg.jpeg'
import gallery6 from '../image/chickenwings.jpeg'
import gallery7 from '../image/steak.jpeg'
import gallery8 from '../image/sushi.jpeg'

const wines = [
    {
        title: 'Chapel Hill Shiraz',
        price: '$56',
        tags: 'AU | Bottle',
    },
    {
        title: 'Catena Malbee',
        price: '$59',
        tags: 'AU | Bottle',
    },
    {
        title: 'La Vieillw Rose',
        price: '$44',
        tags: 'FR | 750 ml',
    },
    {
        title: 'Rhino Pale Ale',
        price: '$31',
        tags: 'CA | 750 ml',
    },
    {
        title: 'Irish Guinness',
        price: '$26',
        tags: 'IE | 750 ml',
    },
];

const foods = [
    {
        title: 'French Fries',
        price: '$30',
        tags: 'BEL | Dish',
    },
    {
        title: 'Chicken Wings',
        price: '$59',
        tags: 'US | Dish',
    },
    {
        title: 'Cha Gio',
        price: '$44',
        tags: 'VN | Dish',
    },
    {
        title: 'Iberico Ham',
        price: '$31',
        tags: 'SP | Dish',
    },
    {
        title: 'Lay chip',
        price: '$26',
        tags: 'US | Dish',
    }
];

const footerData = {
    contact: {
        title: 'Contact location',
        address: '3784 patterson road, #8 new york, CA 69000',
        phone: '(201)256-3689',
    },
    hours: {
        title: 'Working hours',
        program: [
            {
                days: 'monday - friday',
                hours: '09:00 AM - 10:00 PM',
            },
            {
                days: 'saturday - sunday',
                hours: '09:00 AM - 11:00 PM',
            },
        ],
    }
}
const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8]
const data = { foods, wines, images, footerData }
export default data 