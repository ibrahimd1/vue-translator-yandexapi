<template>
  <div>
    <div class="well">
      <h3>Arama Geçmişi</h3>
      <ul class="list-group text-left">
        <li class="list-group-item" v-for="item in history" :key="item.from">
          <div>
            <strong>{{item.from}} => {{item.to}}</strong>
          </div>
          <br />
          <div>
            <strong class="text-success"></strong>
            <span class="text-info"></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["history"]
};
</script>

<style>
</style>