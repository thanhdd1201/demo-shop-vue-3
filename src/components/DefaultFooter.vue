<template>
  <div class="container">
    <div class="contacts">
      <div class="contacts--contact">
        <p>{{ mail }}</p>
        <p>{{ phone }}</p>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      mail: 'thanhdd1201@gmail.com',
      phone: '0969.428.577',

    }
  }
}
</script>
  
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #292354;
  color: white;
  padding-top: 20px;
}

.contacts {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  &--contact {
    text-align: right;
  }
}
</style>
  