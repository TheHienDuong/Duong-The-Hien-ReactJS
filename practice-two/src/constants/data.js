import arrowDown from '../../public/images/down.png';
import filterIcon from '../../public/images/Filter-icon.png';
import heartIcon from '../../public/images/heart.png';
import cartIcon from '../../public/images/shopping-cart.png';

const ICON = {
  filter: filterIcon,
  dropdown: arrowDown,
  heart: heartIcon,
  cart: cartIcon,
};

const PRICES = [
  {
    id: 1,
    text: '2-4 million',
    minPrice: '2000000',
    maxPrice: '4000000',
  },
  {
    id: 2,
    text: '4-8 million',
    minPrice: '4000000',
    maxPrice: '8000000',
  },
  {
    id: 3,
    text: '8-15 million',
    minPrice: '8000000',
    maxPrice: '15000000',
  },
  {
    id: 4,
    text: 'Over 15 million',
    minPrice: '15000000',
  },
];
const CATEGORIES = [
  { id: 1, value: 'Filter' },
  { id: 2, value: 'ManuFacture' },
  { id: 3, value: 'Price' },
];

// Database
const PRODUCT_DATABASE = '../../database/products.json';

export { PRICES, CATEGORIES, PRODUCT_DATABASE, ICON };
