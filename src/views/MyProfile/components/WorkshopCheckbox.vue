<script setup>
    import { computed } from 'vue';

    import { WORKSHOP } from '@/router/paths.js'
    import MaterialIcon from '@/components/MaterialIcon.vue';
    import { generatePath } from '@/utils/route-paths.js';

    const emit = defineEmits(['update:modelValue'])
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        isFree: {
            type: Boolean,
            required: true
        },
        isRegOpen: {
            type: Boolean,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        modelValue: {
            type: Array,
            required: true,
        },
        selectable: {
            type: Boolean,
        }
    })

    const model = computed({
        get() {
            return props.modelValue
        },
        set(value) {
            emit('update:modelValue', value)
        }
    })

    const isChecked = computed(() => model.value.includes(props.id))
    const holderClasses = computed(() => ({'checkbox-holder--checked': isChecked }))

    const priceText = computed(() => {
        if(props.isFree) {
            return 'رایگان'
        } 

        return `${props.price} تومان`
    })
    const workshopRoute = computed(() => generatePath(WORKSHOP.path, { id: props.id }))
    const canSelect = computed(() => props.selectable && props.isRegOpen)

    const classes = computed(() => ({ 
        'workshop-checkbox--checked': isChecked.value,
        'workshop-checkbox--selectable': canSelect.value,
    }))

    console.log({
        isChecked: isChecked.value,
        canSelect: canSelect.value,
        selectable: props.selectable,
        isRegOpen: props.isRegOpen
    })
</script>

<template>
    <label :title="title" :for="id" class="workshop-checkbox" :class="classes">
        <input 
            v-if="canSelect"
            name="workshops"
            type="checkbox" 
            :id="id" 
            :value="id"
            :disabled="!canSelect"
            v-model="model"
            class="workshop-checkbox__controller"
        />
        <span v-if="canSelect" class="checkbox-holder" :class="holderClasses">
            <MaterialIcon v-if="isChecked" name="done" />
        </span>
        <p class="workshop-checkbox__title">{{ title }}</p>
        <p class="workshop-checkbox__price">{{ priceText }}</p>
        <RouterLink :to="workshopRoute" class="workshop-checkbox__button">اطلاعات بیشتر</RouterLink>
    </label>
</template>

<style scoped>
    .workshop-checkbox {
        display: flex;
        align-items: center;
        height: 52px;
        border-radius: 4px;
        background-color: #444;
        direction: rtl;
        color: white;

        transition: all 0.2s ease-in-out;
    }

    .workshop-checkbox:hover {
        background-color: #252040;
        color: #fcc113;
    }

    .workshop-checkbox--selectable {
        cursor: pointer;
    }

    .workshop-checkbox:not(:first-of-type) {
        margin-top: 8px;
    }

    .workshop-checkbox__title {
        margin-right: 8px;
        font-size: 1.2rem;
        max-width: 400px;

        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .workshop-checkbox__controller {
        display: none;
    }

    .checkbox-holder {
        width: 24px;
        height: 24px;
        border-radius: 2px;
        background-color: white;
        margin: 0 16px 0 4px;
        font-weight: 700;
        color: #252040;

        transition: all .1s ease-in-out;
    }

    .checkbox-holder:hover {
        box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.3);
    }

    .workshop-checkbox__price {
        margin-right: auto;
    }

    .workshop-checkbox__button {
        color: #252040;
        background-color: #fcc113;
        padding: 8px 12px;
        border-radius: 2px;
        margin: 0 16px;
    }
</style>