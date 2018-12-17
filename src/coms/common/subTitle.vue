<template>
  <div class="subtitle">
    <h2>{{title}}</h2>
    <p>{{tip}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    tip: String
  }
}
</script>
