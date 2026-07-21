import { tesloApi } from "@/api/tesloApi"
import type { ProductsResponse } from "@/interfaces/product.response";



interface Options {
    limit?: number | string;
    offset?: number | string;
    gender?: string;
    sizes?: string;
    minPrice?: number | string;
    maxPrice?: number | string;
    q?: string;
};


export const getProductsAction = async (options: Options): Promise<ProductsResponse> => {

    const { limit, offset, gender, sizes, minPrice, maxPrice, q } = options;

    console.log({ q })

    const { data } = await tesloApi.get<ProductsResponse>('/products', {
        params: {
            limit,
            offset,
            gender,
            sizes,
            maxPrice,
            minPrice,
            q
        }
    });


    const productsWithImageUrl = data.products.map(product => ({
        ...product,
        images: product.images.map((image) => `${import.meta.env.VITE_API_URL}/files/product/${image}`)
    }));



    return {
        ...data,
        products: productsWithImageUrl
    };

}