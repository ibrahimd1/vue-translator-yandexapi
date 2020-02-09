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
      <strong>Tespit Edilen Dil : {{detectedLang}}</strong>
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
      languages: {},
      detectedLang: ""
    };
  },
  methods: {
    translateIt() {
      this.detectedLang = this.languages[this.translateTo];
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
          console.log(response.data.text[0]);
          this.$emit("translatedEvent", response.data.text[0]);
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