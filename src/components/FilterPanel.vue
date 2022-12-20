<template>
    <div class="filter-panel">
        <div class="title">Search filter</div>
        <div v-for="filterAttr in filterAttributes" :key="filterAttr.id">
            <span class="select-option">By {{ filterAttr.type }}:</span>

            <div class="select-option" v-for="option in filterAttr.options" :key="option.value">
                <input v-model="option.selected" type="checkbox" :id="option.value" :name="option.value"
                    :value="option.value">
                <label :for="option.value">{{ option.value }}</label><br />
            </div>
        </div>
        <button @click="clearAll">Clear All</button>
    </div>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue';
import { Filter } from '../common/interfaces/FilterAttribute';

const props = defineProps({
    filterAttributes: Array as PropType<Array<Filter>>
})

let selectFilter = ref({})

function clearAll() {
    selectFilter.value = {}
}
</script>

<style lang="scss" scoped>
.filter-panel {
    flex: 0 0 300px;
    margin: 8px 20px 20px 20px;

    .title {
        font-size: 1.25rem;
        font-weight: 700;
        text-transform: uppercase;
    }

    .select-option {
        display: flex;
        justify-content: flex-start;
        padding: 0 0 0 20px;
    }
}
</style>