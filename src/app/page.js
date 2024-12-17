import ProductList from "./Productlist";

// src/app/page.js
export default async function HomePage() {
    // Fetch data on the server
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    return <ProductList products={data.products} />;
}



// // src/app/page.js


// import { fetchProducts } from '@/store/slices/productSlice';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// export default function HomePage() {
//     const dispatch = useDispatch();
//     const { products, status, error } = useSelector((state) => state.products);

//     useEffect(() => {
//         if (status === 'idle') {
//             dispatch(fetchProducts());
//         }

//     }, [status, dispatch]);

//     if (status === 'loading') return <p>Loading...</p>;
//     if (status === 'failed') return <p>Error: {error}</p>;

//     return (
//         <div>
//             <h1>Products</h1>
//             <ul>
//                 {products.map((product) => (
//                     <li key={product.id}>
//                         {product.title} - ${product.price}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
