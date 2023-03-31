import { mount } from '@vue/test-utils';
import ProductCard from './ProductCard.vue';

describe('ProductCard.vue', () => {

    const mockProps = {
        product: {
            title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            price: '109.95',
            description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'
        }
    }

    const setupTest = (options: any) => {
        return mount(ProductCard, {
            props: options
        })
    }

    it('renders component with product image, title, price, and description', () => {
        const wrapper = setupTest(mockProps);

        expect(wrapper.props().product.title).toMatch('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
        expect(wrapper.props().product.image).toMatch('https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg');
        expect(wrapper.props().product.price).toMatch('109.95');
        expect(wrapper.props().product.description).toMatch('Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday');
    });

});
