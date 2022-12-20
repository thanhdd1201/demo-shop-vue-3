<template>
    <div class="p-5" @click="redirectProductPage">
        <div class="product-box">
            <div>
                <img class="img-standard" :src="product.thumbnail" alt="">

            </div>
            <div class="product-short-desc">
                <div class="name">{{ product.name }}</div>
                <div class="price">
                    <span class="unit">vnd </span>
                    <span>{{ product.price }}</span>
                </div>
                <div class="location">
                    <span>{{ product.location }}</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { useRouter } from 'vue-router'
import { Product } from '../common/interfaces/Product';

const router = useRouter()

const props = defineProps({
    product: {
        type: Object as PropType<Product>,
        required: true
    }
})

function redirectProductPage() {
    router.push({ name: 'productDetail', params: { id: props.product.id } })
}
</script>

<style lang="scss" scoped>
.product-box {
    text-decoration: none;
    color: rgba(0, 0, 0, .87);
    display: block;
    box-shadow: 0 0.0625rem 0.125rem 0 rgb(0 0 0 / 10%);
    border-radius: .125rem;
    overflow: hidden;
    display: grid;
    grid-template-rows: 150px 1fr;
    background: #fff;
    cursor: pointer;

    &:hover {
        border: 1px solid #ee4d2d;
        margin: -1px;
    }
}

.img-standard {
    height: 100%;
    background-color: #fff;
    width: 100%;
}

.product-short-desc {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    overflow: hidden;

    .name {
        font-size: 1.25rem;
        min-height: 3rem;
        word-wrap: break-word;
        white-space: normal;
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    .price {
        color: #ee4d2d;
    }

    .location {
        text-align: left;
    }


}
</style>