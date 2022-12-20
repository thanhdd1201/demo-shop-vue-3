<template>
  <div class="header">
    <h1 class="title">LTS Interview</h1>
  </div>
</template>
  
<script>
export default {
  name: 'DefaultHeader',
}
</script>

<style lang="scss" scoped>
.header {

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .7rem 1.5rem .7rem 4rem;

  .title {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c3e50;
  }
}
</style>

  