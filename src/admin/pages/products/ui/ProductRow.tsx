import { TableRow, TableCell } from "@/components/ui/table"
import type { Product } from "@/interfaces/product.interface"
import { currencyFormatter } from "@/lib/curency-formatter"
import { PencilIcon } from "lucide-react"
import { Link } from "react-router"


interface Props {
    product: Product
}
export const ProductRow = ({ product }: Props) => {
    return (
        <TableRow key={product.id}>
            <TableCell className="font-medium">{product.id.substring(0, 8)}</TableCell>
            <TableCell>
                <img src={product.images[0]} alt={product.title}
                    className="w-20 h-20 object-cover rounded-md"
                />
            </TableCell>
            <TableCell>
                <Link to={`/admin/products/${product.id}`}>
                    {product.title}
                </Link>
            </TableCell>
            <TableCell>{currencyFormatter(product.price)}</TableCell>
            <TableCell>{product.gender}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>{product.sizes.join(',')}</TableCell>
            <TableCell className="text-right">
                <Link to={`/admin/products/${product.id}`}>
                    <PencilIcon
                        className="w-4 h-4 text-blue-500"
                    />
                </Link>
            </TableCell>
        </TableRow>
    )
}

