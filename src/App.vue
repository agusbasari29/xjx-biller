<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'

/*

*/

const clients = ref([
  /*  {
      id: 'id',
      name: 'name',
      price: 10000,
      status: 'offline',
      lastOnline: '2023-03-02T'
    },
  */
])

onMounted(async () => {
  const querySnapshoot = await getDocs(collection(db, 'xjx - biller'))
  let fbXjxBiller = []
  querySnapshoot.forEach((doc) => {

  })
})


</script>

<template>
  <div class="field is-grouped">
    <p class="control is-expanded">
      <input type="text" class="input" placeholder="Find">
    </p>
    <p class="control">
      <a class="button is-info">Search</a>
    </p>
  </div>
</template>

<style scoped>
@import 'bulma/css/bulma.min.css';
</style>
