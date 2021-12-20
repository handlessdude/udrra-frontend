import {computed, reactive} from 'vue'
import {useField} from './useField'

export function useForm(init = {}) {
    const form = reactive({})

    for (const [key, value] of Object.entries(init)) {
        form[key] = useField(value)
    }

    const validKey = 'valid'
    const withoutValid = k => k !== validKey

    form[validKey] = computed(() => Object.keys(form).filter(withoutValid).every(k => form[k].valid))

    const resetForm = () => {
        for (const [key, value] of Object.entries(init)) {
            form[key].value = value
        }
    }
    const isFormValid = computed(() =>
        Object.keys(form).filter(withoutValid).every(k => form[k].valid)
    )
    return { form, isFormValid, resetForm }
}
