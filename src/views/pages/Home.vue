<template>
    <div>
        <Background />
        <MainContent />
    </div>
</template>

<script>
import Background from '@/components/TheBackground.vue'
import MainContent from '@/components/TheMainContent.vue'

export default {
    components: {
        MainContent,
        Background
    }
}
</script>