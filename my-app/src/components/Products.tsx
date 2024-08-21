import { useAppDispatch } from "../store/store";
import { products } from "../dummyData";
import { addToCart } from "../store/features/cartSlice";

export default function Products() {
    const dispatch = useAppDispatch();
  
    return (
        <div className="rounded-md shadow flex gap-3">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="rounded-md border shadow cursor-pointer w-40 p-2 flex  justify-center items-center"
                >
                    <img src="data:image/jpeg;base64,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" className="w-32 h-32 object-cover rounded-md"/>
                    <p className="text-gray-700">{product.name}</p>
                    <p className="text-green-500">{product.price}</p>
                    <button
                        className="rounded-md shadow bg-blue-950 text-white cursor-pointer py-2 px-4"
                        onClick={() => dispatch(addToCart({ product, quantity: 1 }))}
                    >
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
}
