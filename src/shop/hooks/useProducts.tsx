import { useQuery } from "@tanstack/react-query"
import { getProductsAction } from "../actions/get-products.action"
import { useParams, useSearchParams } from "react-router"



export const useProducts = () => {


    const [searchParams] = useSearchParams();
    const { gender } = useParams();

    const limit = searchParams.get('limit') || 9;
    const page = searchParams.get('page') || 1;
    const sizes = searchParams.get('size') || '';
    const newSizes = sizes.split(',').filter(p => p !== '');
    const query = searchParams.get('query') || undefined;

    const rangePrice = searchParams.get('price') || 'any';

    let minPrice = undefined;
    let maxPrice = undefined;

    switch (rangePrice) {
        case 'any':
            break;
        case '0-50':
            minPrice = 0;
            maxPrice = 50;
            break;
        case '50-100':
            minPrice = 50;
            maxPrice = 100;
            break;
        case '100-200':
            minPrice = 100;
            maxPrice = 200;
            break;
        case '200+':
            minPrice = 200;
            maxPrice = undefined;
            break;

    }

    const offset = (Number(page) - 1) * Number(limit)


    return useQuery({
        queryKey: ['products', { offset, limit, gender, sizes, minPrice, maxPrice, query }],
        queryFn: () => getProductsAction({
            limit: isNaN(Number(limit)) ? 9 : limit,
            offset: isNaN(offset) ? 0 : offset,
            sizes: newSizes.join(','),
            gender,
            minPrice,
            maxPrice,
            q: query

        }),
        staleTime: 1000 * 60 * 50
    })
}

