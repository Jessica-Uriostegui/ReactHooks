import React, { useReducer } from 'react';

interface ShoppingCartItem {
    id: number;
    name: string;
    price: number;
}

type ShoppingCartAction = 
    | { type: 'ADD_ITEM'; payload: ShoppingCartItem }
    | { type: 'REMOVE_ITEM'; payload: number };

const shoppingCartReducer = (
    state: ShoppingCartItem[],
    action: ShoppingCartAction
): ShoppingCartItem[] => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
};

const initialCartState: ShoppingCartItem[] = [];

const ShoppingCart: React.FC = () => {
    const [cart, dispatch] = useReducer(shoppingCartReducer, initialCartState);

    const addItemToCart = (item: ShoppingCartItem) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    };
    
    const removeItemFromCart = (itemId: number) => {
        dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    };

    const calculateTotal = (): number => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price.toFixed(2)}
                        <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h2>Total: ${calculateTotal().toFixed(2)}</h2>
            <button onClick={() => addItemToCart({ id: Date.now(), name: 'New Item', price: 10})
                }
            >
                Add Item
            </button>
        </div>
    );
    
};

export default ShoppingCart;