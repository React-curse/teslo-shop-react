import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getProductByIdAction } from "../actions/get-product-by-id.actions"
import { createUpdateProductsAction } from "../actions/create-update-products.action";
import type { Product } from "@/interfaces/product.interface";

export const useProducts = (id: string) => {


    const queryClient = useQueryClient();

    const query = useQuery({
        queryKey: ['product', { id }],
        queryFn: () => getProductByIdAction(id),
        retry: false,
        staleTime: 1000 * 60 * 5,
        enabled: !!id
    })


    const mutation = useMutation({
        mutationFn: createUpdateProductsAction,
        onSuccess: (product: Product) => {
            // Invalidar cache
            queryClient.invalidateQueries({ queryKey: ['products'] });
            queryClient.invalidateQueries({ queryKey: ['product', { id: product.id }] });
            // Actualizar query Data
            queryClient.setQueryData(['products', { id: product.id }], product)
        },

    });


    return {
        ...query,
        mutation
    }
}

