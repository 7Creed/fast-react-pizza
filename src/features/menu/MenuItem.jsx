import Button from '../../ui/Button';
import { formatCurrency } from '../../utilities/helpers';

import PropTypes from 'prop-types';

function MenuItem({ pizza }) {
  const {
    // id,
    name,
    unitPrice,
    ingredients,
    soldOut,
    imageUrl,
  } = pizza;
  // console.log(id, name, unitPrice, ingredients, soldOut, imageUrl);

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

MenuItem.propTypes = {
  // id: PropTypes.number,
  // name: PropTypes.string,
  // unitPrice: PropTypes.number,
  // ingredients: PropTypes.arrayOf(PropTypes.object),
  // soldOut: PropTypes.bool,
  // imageUrl: PropTypes.string,
  pizza: PropTypes.object,
};
