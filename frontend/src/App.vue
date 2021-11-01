<template>
  <div>
    <h1>Safeer Project</h1>
    <h2>Find Location in Amman</h2>
    <div class="search-section">
      <div className="search-div">
        <i class="fas fa-search"></i>
        <input class="search-field" v-model="placeName" @input="getPlaces()" />
      </div>
      <ul class="predictions">
        <li
          class="item"
          :key="result"
          v-for="result in results"
          @click="autoComplete(result)"
        >
          <i class="fas fa-map-marker-alt"></i>&nbsp;
          {{ result }}
        </li>
        <img id="by-google" src="./powered_by_google_on_non_white.png" alt="powered by google">
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
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
  background-image: url("body.jpg");
}
h1,
h2 {
  text-align: center;
  margin: 8vh;
  color: whitesmoke;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 10vh;
  height: 100vh;
}
.search-section {
  width: 40%;
  margin-left: auto;
  margin-right: auto;
}
.fa-map-marker-alt {
  font-size: 20px;
  color: whitesmoke;
}
.fa-search {
  padding-right: 6px;
  font-size: 20px;
}
.search-div {
  display: flex;
  align-items: center;
  height: 40px;
  border: solid #d3d9e2 1px;
  border-radius: 5px;
  padding-left: 8px;
  padding-right: 8px;
  width: 97%;
  background-color: whitesmoke;
}
.search-div:focus-within {
  border: 2px solid #6a7f9e;
  border-radius: 5px;
}
.search-field {
  border: none;
  background-color: inherit;
  height: 95%;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
}
.search-field:focus {
  outline: none;
}

.predictions {
  margin: 15px 0;
  list-style-type: none;
  padding: 0px;
  background-color: #6a7f9e;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    position: relative;
}
.item {
  padding: 10px 10px 10px 10px;
}
.item:hover {
  cursor: pointer;
  background-color: #3c5576;
  color: whitesmoke;
}
#by-google{
  position: absolute;
  right: 0;
}
</style>
