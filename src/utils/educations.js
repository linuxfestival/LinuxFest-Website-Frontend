export const education_types = [
    { value: 'bsc', text: 'Undergraduated (BSc)' },
    { value: 'msc', text: 'Graduated (MSc)' }
]

export function getOptionName(value) {
    for (var key in education_types) {
        const option_val = education_types[key]
        if (option_val.value === value) {
            return option_val.text
        }
    }
}