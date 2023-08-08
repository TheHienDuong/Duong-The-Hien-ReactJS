import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import { CardImage } from './common/Card';
import Link from './common/Link';
import Typography from './common/Typography';
import FavoriteButton from './common/Button/ButtonFavorite';
import Popover from './common/Popover';

/**
 * Product Details components.
 *
 *  A reusable component that displays product information in a details.
 *
 * @param product - The product product object.
 * @param favoriteProductIDs - An array of product IDs marked as favorites.
 * @param onToggleProductFavorite - Function to handle toggling a product as favorite
 * @param onClosePopover - Callback function to close the product details.
 * @returns {JSX.Element} Product Details content.
 */
const ProductDetails = ({
  product = [],
  favoriteProductIDs = [],
  onToggleProductFavorite = () => {},
  onClosePopover = () => {},
}) => {
  const selectedProduct = product;

  const imageUrls = Object.values(selectedProduct.images);

  const [isPopoverOpen, setIsPopoverOpen] = useState(true);

  const handleButtonClick = () => {
    setIsPopoverOpen((prevState) => {
      onClosePopover();
      return !prevState;
    });
  };

  const handleFavoriteToggle = () => {
    onToggleProductFavorite(product.id);
  };

  return (
    <section
      className={`fixed inset-0 bg-opacity-70 backdrop-filter backdrop-blur-lg flex items-center justify-center z-50 ${
        isPopoverOpen ? 'bg-gray-800' : 'hidden'
      }`}
    >
      <div className="container min-h-screen w-[50%] h-[30%] flex justify-center items-center">
        <Popover
          closeButtonoo
          isOpen={isPopoverOpen}
          onClosePopover={handleButtonClick}
          popoverClassName="relative bg-white rounded-2xl max-h-[700x] overflow-x-auto shadow-2xl p-10 m-2 "
          arrowPopover={false}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-none items-center">
            <div className="grid grid-cols-3 grid-rows-auto gap-3 mr-5">
              {imageUrls.map((imageUrl, index) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  className={`border rounded-2xl ${index === 0 ? 'active col-span-3' : ''}`}
                >
                  <CardImage src={imageUrl} alt={`Color ${index + 1} styles for phones `} />
                </div>
              ))}
            </div>
            <div>
              <div className="basic-info flex flex-col gap-4 relative">
                <div className="flex justify-between hover:text-blue-700">
                  <Typography className="text-3xl" size="xl">
                    {selectedProduct.name}
                  </Typography>
                  <FavoriteButton
                    isFavorite={favoriteProductIDs.includes(product.id)}
                    onClick={handleFavoriteToggle}
                  />
                </div>
                <div className="inline-block">
                  {selectedProduct.installment && (
                    <Typography color="black" size="md" variant="solid">
                      {selectedProduct.installment}
                    </Typography>
                  )}
                </div>
                <div className="card-compare flex gap-2">
                  <Typography color="black" size="md" variant="solid">
                    {selectedProduct.version}
                  </Typography>
                  <Typography color="black" size="md" variant="solid">
                    {selectedProduct.resolution}
                  </Typography>
                </div>
                <Typography size="xl" color="red" variant="plain">
                  {selectedProduct.price}
                  &#8363;
                </Typography>
                <Typography className="leading-6" color="gray-300" size="md" variant="plain">
                  {selectedProduct.description}
                </Typography>
                <Link
                  href="/shopping-cart"
                  variant="bg-secondary py-2 px-4 rounded font-semibold text-sm"
                  disabled
                  color="white"
                  underline={false}
                  size="xl"
                >
                  Buy It Now
                </Link>
              </div>
            </div>
          </div>
        </Popover>
      </div>
    </section>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.shape({
    installment: PropTypes.string,
    id: PropTypes.string.isRequired,
    images: PropTypes.objectOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    version: PropTypes.string,
    resolution: PropTypes.string,
    price: PropTypes.string.isRequired,
  }).isRequired,
  favoriteProductIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClosePopover: PropTypes.func,
  onToggleProductFavorite: PropTypes.func.isRequired,
};

export default ProductDetails;
