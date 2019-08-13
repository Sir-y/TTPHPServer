<template>
  <div class="me">
    <Record></Record>
  </div>
</template>

<script>
import Record from '@/components/me/components/Record'
export default {
  name: 'Me',
  data () {
    return {
      msg: 'me'
    }
  },
  components: {
    Record
  }
}
</script>

<style>
</style>
