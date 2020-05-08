export const addItemToCart = (cartItems, cartItemToAdd) => {
  const isCartItemExisted = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToAdd.id;
  });

  const incrementCartItem = () => {
    return cartItems.map((cartItem) => {
      return cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  };

  const addNewItemToCart = () => {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };

  return isCartItemExisted ? incrementCartItem() : addNewItemToCart();
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToRemove.id;
  });

  const decrementCartItem = () => {
    return cartItems.map((cartItem) => {
      return cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  };

  return existingCartItem.quantity === 1
    ? clearItemFromCart(cartItems, cartItemToRemove)
    : decrementCartItem();
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => {
    return cartItem.id !== cartItemToClear.id;
  });
};
