<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-md-12 text-center">
        <app-translator-form></app-translator-form>
        <app-search-history-form></app-search-history-form>
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
  }
};
</script>

<style>
body {
  background-color: #dedede;
}
</style>
