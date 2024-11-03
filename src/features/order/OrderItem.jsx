import PropTypes from 'prop-types';
import { formatCurrency } from '../../utilities/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <div className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? 'loading' : ingredients.join(', ')}
      </div>
    </li>
  );
}

export default OrderItem;

OrderItem.propTypes = {
  ingredients: PropTypes.array,
  isLoadingIngredients: PropTypes.bool,
  item: PropTypes.object,
};
