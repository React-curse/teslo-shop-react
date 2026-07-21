import { TableHeader, TableRow, TableHead, TableBody, Table } from "@/components/ui/table"
import type { Product } from "@/interfaces/product.interface"
import { ProductRow } from "./ProductRow"

interface Props {
    products: Product[]
}


export const ProductsTable = ({ products }: Props) => {
    return (
        <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-20">
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Imagen</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Precio</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Inventario</TableHead>
                    <TableHead>Tallas</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>


                {
                    products.map(product => (
                        <ProductRow product={product} />
                    ))
                }

            </TableBody>
        </Table>
    )
}

