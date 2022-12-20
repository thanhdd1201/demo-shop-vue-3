<template>
    <div class="container">
        This product has {{ productOptions.length }} {{ productOptions.length ? 'options' : 'option' }}
        and the most expensive option is {{ mostExpensive }} VND
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getProductDetail, getProductOptions } from '../common/apis/api-service';

const route = useRoute()

const product = ref({})
const productOptions = ref([])
const productId = ref(route.params.id)

const mostExpensive = computed(() => Math.max(...productOptions.value.map((opt: any) => opt.price)))
onMounted(async () => {
    product.value = await getProductDetail(productId.value as string)
    productOptions.value = await getProductOptions(productId.value as string)
})

</script>

<style scoped>

</style>