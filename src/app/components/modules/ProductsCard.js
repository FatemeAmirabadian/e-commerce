import Image from "next/image";

function ProductsCard(product) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-1 w-80">
      <div className="h-96 p-4">
        <Image
          className="w-3/4 h-3/4 m-auto"
          src={product.image}
          alt="Product"
          width={500}
          height={500}
        />
        <div className="px-1 py-4 mt-4 max-h-24 ">
          <div className="font-bold text-m mb-2 leading-5 ">
            {product.title}
          </div>
        </div>
      </div>
      <div className="flex justify-between px-4 pt-4 my-1">
        <p className="text-gray-700 font-bold text-xl"> $ {product.price}</p>
        <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2">
          # {product.category}
        </span>
      </div>
    </div>
  );
}

export default ProductsCard;
