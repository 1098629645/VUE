<template>

<!-- news -->
<div class="container-fluid">
   <newsSection></newsSection>
</div>

</template>

<script>
// @ is an alias to /src
import NewsSection from '@/components/NewsSection.vue'

export default {
  name: 'Noticias',
  components: {
    NewsSection
  }
}
</script>
