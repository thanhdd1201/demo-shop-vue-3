<template>
    <div class="mx-8 d-grid grid-template-column-5">
        <div v-for="product in paginatedProducts" :key="product.id">
            <product-preview :product="product" />
        </div>
        <button @click="backPage">prev</button>
        <button v-for="item in totalPage" :key="item" @click="() => goToPage(item)">
            {{ item }}
        </button>
        <button @click="nextPage">next</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Product } from '../common/interfaces/Product';
import ProductPreview from './ProductPreview.vue';

export default defineComponent({
    name: 'ProductList',
    components: { ProductPreview },
    data() {
        return {
            perPage: 20,
            page: 1,
        }
    },
    props: {
        products: {
            type: Array as PropType<Array<Product>>,
            default: () => []
        },
    },
    computed: {
        paginatedProducts() {
            return this.products.slice((this.page - 1) * this.perPage, this.page * this.perPage)
        },
        totalPage() {
            return Math.ceil(this.products.length / this.perPage)
        }
    },
    methods: {
        backPage() {
            if (this.page !== 1) {
                this.page -= 1;
            }
        },

        goToPage(numPage: number) {
            this.page = numPage;
        },

        nextPage() {
            if (this.page !== this.totalPage) {
                this.page++
            }
        }
    }
})
</script>

<style lang="scss" scoped>

</style>