<template>
    <div class="grid-layout">
        <filter-panel :filter-attributes="filterAttributes" />
        <product-list :products="products" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import { getFilterOptions, getProducts } from '../common/apis/api-service';
import { Filter } from '../common/interfaces/FilterAttribute';
import FilterPanel from '../components/FilterPanel.vue';
import ProductList from '../components/ProductList.vue';

export default defineComponent({
    name: 'LandingPage',
    components: {
        FilterPanel, ProductList
    },
    data() {
        return {
            perPage: 20,
            page: 1,
            products: [],
            filterAttributes: [] as Filter[]
        }
    },
    async mounted() {
        this.products = await getProducts()
        const filterAttrs = await getFilterOptions() as any[]

        this.filterAttributes = filterAttrs?.map((attr: Filter) => ({ ...attr, options: attr.options.map(opt => ({ value: opt, selected: false })) }))
    },
    computed: {
        paginatedPage() {
            return this.products.slice((this.page - 1) * this.perPage, this.page * this.perPage)
        }
    },
    methods: {
        nextPage() {
            if (this.page !== Math.ceil(this.products.length / this.perPage)) {
                this.page++;
            }
        },

        backPage() {
            if (this.page !== 1) {
                this.page -= 1;
            }
        },

        goToPage(numPage: number) {
            this.page = numPage;
        }
    }
})
</script>
  
<style scoped>
.grid-layout {
    display: grid;
    grid-template-columns: 200px 1fr;
    background-color: #f5f5f5;
}
</style>
  