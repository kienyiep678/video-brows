<template>
  <ul class="list-group col-md-4">
    <!-- :key is used whenever our list is updated, the value of the :key  is unique and consistent to the individual record that we are rendering -->
    <!--  usually when we are rendering out a list of records of  sorts like in the case a list of videos, we will use the ID of the record that we will render as the key property  -->
    <!-- etag property is an ID of sorts and it is unique to every video inside the collection of videos -->
    <VideoListItem
      v-for="mySingleVideo in myVideoList"
      :key="mySingleVideo.etag"
      :video="mySingleVideo"
      @videoSelect="onVideoSelects"
    >
    </VideoListItem>
    <!-- {{
      myVideoList.length
    }} -->
  </ul>
</template>

<script>
import VideoListItems from "./VideoListItem";
export default {
  name: "VideoList",
  components: {
    VideoListItem: VideoListItems,
  },
  // props: ["myVideoList"],
  // instead of provide array, we can provide object and specify need to be array type, if the property type recevied is not array, it will have error
  props: {
    myVideoList: Array,
  },
  methods: {
    onVideoSelects(videos) {
      this.$emit("videoSelects", videos);
    },
  },
};
</script>

<style></style>
