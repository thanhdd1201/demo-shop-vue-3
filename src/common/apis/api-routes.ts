export const apiRoutes = {
    products: {
        fetchProducts: () => 'products',
        fetchProduct: (id: string) => `products/${id}`
    },
    filterOption: {
        getFilterOptions: () => 'filterOption'
    },
    options: {
        getProductOptions: (productId: string) => `options?productId=${productId}`
    }
}