import { AdminTitle } from "@/admin/components/AdminTitle"
import { ProductsTable } from "@/admin/pages/products/ui/ProductsTable"
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { Button } from "@/components/ui/button"
import { useProducts } from "@/shop/hooks/useProducts"
import { PlusIcon } from "lucide-react"
import { Link } from "react-router"

export const AdminProductsPage = () => {

    const { data, isLoading } = useProducts();


    if (isLoading) return <CustomFullScreenLoading />

    console.log({ data })
    return (
        <>

            <div className="flex justify-between items-center">

                <AdminTitle
                    title="Productos"
                    subtitle="Aqui puedes ver y admnistrar tud productos"
                />
                <div className="flex justify-end mb-10 gap-4">

                    <Link to="/admin/products/new">
                        <Button>
                            <PlusIcon />
                            Nuevo producto
                        </Button>
                    </Link>
                </div>


            </div>

            <ProductsTable products={data?.products || []} />


            <CustomPagination totalPages={data?.pages || 2} />
        </>


    )
}
