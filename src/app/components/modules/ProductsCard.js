// import Image from "next/image";
// import React from "react";

// function ProductsCard(product) {
//   return (
//     <div class="max-w-sm rounded overflow-hidden shadow-lg p-4 w-80 h-96">
//       <img
//         class="w-2-/4 h-2/4 m-auto"
//         src={product.image}
//         alt="Sunset in the mountains"
//       />
//       <div class="px-6 py-4">
//         <div class="font-bold text-xl mb-2">{product.title}</div>
//         {/* <p class="text-gray-700 text-base">{product.description}</p> */}
//       </div>
//       <div class="px-6 pt-4 pb-2">
//         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//           # {product.category}
//         </span>
//       </div>
//     </div>
//   );
// }

// export default ProductsCard;
import React from "react";

function ProductsCard(product) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 w-80 h-96">
      <div className="h-5/6 p-5">
        <img
          className="w-3/4 h-3/4 m-auto"
          src={product.image}
          alt="Product"
        />
        <div className="px-1 py-4 mt-4 max-h-24 overflow-y-hidden">
          <div className="font-bold text-m mb-2 leading-5 ">{product.title}</div>
          {/* Uncomment below if you want to display product description */}
          {/* <p className="text-gray-700 text-base">{product.description}</p> */}
        </div>
      </div>
      <div className="px-6 pt-4 mt-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          # {product.category}
        </span>
      </div>
    </div>
  );
}

export default ProductsCard;
