<template>
  <div>
    <h1>Safeer Project</h1>
    <h2>Find Location in Amman</h2>
    <div class="search-section">
      <input
        class="search-field"
        placeholder="search place here"
        v-model="placeName"
        @input="getPlaces()"
      />
      <ul class="predictions">
        <li
          class="item"
          :key="result"
          v-for="result in results"
          @click="autoComplete(result)"
        >
          {{ result }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Results from "./components/Results.vue";

export default {
  name: "App",
  components: { Results },
  data() {
    return {
      results: [],
      placeName: "",
    };
  },
  methods: {
    async getPlaces() {
      if (this.placeName === "" || this.placeName === " ")
        return (this.results = []);
      console.log(this.placeName);
      this.results = await (
        await fetch(`http://localhost:3000/locations/${this.placeName}`)
      ).json();
    },
    autoComplete(prediction) {
      this.placeName = prediction;
      this.results = [];
    },
  },
};
</script>

<style>
body {
  margin: 0;
  background-image: url("body2.jpg");
}
h1,
h2 {
  text-align: center;
  margin: 50px;
  color: whitesmoke;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 100px;
  height: 100vh;
}
.search-section {
  width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.search-field {
  height: 30px;
  font-weight: bold;
  font-size: 1rem;
  padding: 0 0 0 7px;
  width: 589px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.predictions {
  margin: 15px 0;
  list-style-type: none;
  padding: 0px;
  background-color: #6a7f9e;
  border-radius: 5px;
}
.item {
  padding: 10px 10px 10px 10px;
}
.item:hover {
  cursor: pointer;
  background-color: #3C5576;
  color: whitesmoke;
}
</style>
