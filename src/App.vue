<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-md-12 text-center">
        <app-translator-form
          @translatedEvent="translatedText=$event"
          @historyEvent="history.push($event)"
        ></app-translator-form>
        <h3 class="text-success text-center">{{translatedText}}</h3>
        <app-search-history-form :history="history"></app-search-history-form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import TranslatorForm from "./components/TranslatorForm";
import SearchHistoryForm from "./components/SearchHistoryForm";

export default {
  components: {
    appHeader: Header,
    appTranslatorForm: TranslatorForm,
    appSearchHistoryForm: SearchHistoryForm
  },
  data() {
    return {
      translatedText: "",
      history: []
    };
  }
};
</script>

<style>
body {
  background-color: #dedede;
}
</style>
