<template>
  <form @submit.prevent="translateIt" class="well">
    <textarea
      v-model="translateText"
      cols="30"
      rows="5"
      class="form-control"
      placeholder="Çevirmek istediğiniz kelime/cümle yazınız."
    ></textarea>
    <select v-model="translateTo" class="form-control">
      <option v-for="(value,key) in languages" :key="key" :value="key">{{value}}</option>
    </select>
    <br />
    <div class="text-left">
      <strong>Tespit Edilen Dil :</strong>
    </div>
    <br />
    <button type="submit" class="btn btn-primary btn-block">Çevir Gelsin!</button>
  </form>
</template>

<script>
import { CONST, httpAxios } from "../const";

export default {
  data() {
    return {
      translateText: "",
      translateTo: "",
      languages: {}
    };
  },
  methods: {
    translateIt() {
      const link =
        "/translate?key=" +
        CONST.APIKEY +
        "&text=" +
        this.translateText +
        "&lang='en'";
      console.log(link);
      httpAxios
        .post(
          "/translate?key=" +
            CONST.APIKEY +
            "&text=" +
            this.translateText +
            "&lang=" +
            this.translateTo
        )
        .then(response => {
          console.log(response);
        })
        .catch(e => console.log(e));
    }
  },
  created() {
    httpAxios.post("/getLangs?ui=tr&key=" + CONST.APIKEY).then(response => {
      this.languages = response.data.langs;
    });
  }
};
</script>

<style>
</style>