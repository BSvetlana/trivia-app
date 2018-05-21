<template>
    <div>
        <b-form-input size="sm" 
                    class="mr-sm-2" 
                    type="text" 
                    placeholder="Search Trivia"
                    @input="emitInputChangeEvent"
        />
    </div>
</template>

<script>
export default {
    name: 'SearchTerm',
    methods: {
       emitInputChangeEvent(term) {
           this.$emit('search-term-change',term)
       }
    }
    
}
</script>

<style>

</style>


