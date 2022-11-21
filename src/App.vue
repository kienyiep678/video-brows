<template>
  <div class="container">
    <!-- @ is no different to v-on: -->
    <SearchBar @termChange="onTermChange"></SearchBar>

    <div class="row">
      <VideoDetail v-bind:video="selectedVideo" />
      <!-- :videos is no different to v-bind:videos -->
      <VideoList
        @videoSelects="onVideoSelect"
        :myVideoList="myListOfVideos"
      ></VideoList>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchBars from "./components/searchBar";
import VideoLists from "./components/VideoList";
import VideoDetails from "./components/VideoDetail";
// youtube api key
const API_KEY = "AIzaSyCSwouRneF4YI4-7p4YHb0fu1CCMhMQQTg";
export default {
  name: "App",
  // this will list all the different components that will be used inside of the app template
  components: {
    SearchBar: SearchBars,
    VideoList: VideoLists,
    VideoDetail: VideoDetails,
  },

  // need to define function return object instead of just define object
  // by doing this, it will allow each app instances to refer to the seperate different data object instead of the same data object
  data: function () {
    return { myListOfVideos: [], selectedVideo: null };
  },
  methods: {
    onVideoSelect(videoTest) {
      console.log(videoTest);
      this.selectedVideo = videoTest;
    },
    // in the search bar vue component, we emit the termChange, we also specify the second argument which is event.target.value,
    // which the second argument will be the first argument in this onTermChange callback function
    onTermChange(searchTerm) {
      console.log(searchTerm);
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          // type- type of resource in the youtube that we want to execute the search for
          // part- tells the youtube api exaclty what type of information we want to get back, snippet means we just want a small piece of information about every video that is returned
          // q - query
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            q: searchTerm,
          },
        })
        .then((response) => {
          console.log(response);
          this.myListOfVideos = response.data.items;
        }); // console.log(searchTerm);
    },
  },
};
</script>
