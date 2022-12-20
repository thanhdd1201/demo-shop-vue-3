import { transformData } from "../../utils/helpers";
import service from "./api-base";
import { apiRoutes } from "./api-routes";

export function getProducts() {
    const url = apiRoutes.products.fetchProducts()
    return transformData(
        service({
            method: "get",
            url,
        })
    );
}

export function getFilterOptions<T>() {
    const url = apiRoutes.filterOption.getFilterOptions()
    return transformData<T>(
        service({
            method: "get",
            url
        })
    );
}

export function getProductDetail(id: string) {
    const url = apiRoutes.products.fetchProduct(id)
    return transformData(
        service({
            method: "get",
            url,
        })
    );
}

export function getProductOptions(id: string) {
    const url = apiRoutes.options.getProductOptions(id)
    return transformData(
        service({
            method: "get",
            url,
        })
    );
}
