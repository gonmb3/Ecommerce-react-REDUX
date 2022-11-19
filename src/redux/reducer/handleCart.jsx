const cart = [];

const handleCart = (state = cart, action) => {

    const product = action.payload;

    switch (action.type) {
        case "ADD_TO_CART":
            const exist = state.find(item => item.id === product.id);
            if(exist){
                return state.map(item => item.id === product.id ?
                     {...item, qty: item.qty + 1} : item)
            }else{
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty:1,
                    }
                ]
            }
            break;
            case "DELETE_FROM_CART":
                const existOne = state.find(item => item.id === product.id);
                if(existOne.qty === 1){
                    return state.filter(item => item.id !== existOne.id)
                }else{
                    return state.map(item => item.id === product.id ? {...item, qty: item.qty -1 } : item)
                }

                break;
         
    
        default:
            return state
            break;
    }

}

export default handleCart