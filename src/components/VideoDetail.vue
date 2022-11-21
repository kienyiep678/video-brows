<template>
  <!-- if the v-if directive looks at the video value, if it is a falsy value, then it will not render this div or anything inside this div -->

  <div v-if="video" class="col-md-8">
    <!-- to get the video player show up inside our application -->
    <!-- embed a video into our video browser application -->
    <!-- everytime we want to communicate some dynamic value down to some child element, we will use the prop system or v-bind experession -->
    <div class="ratio ratio-16x9">
      <iframe v-bind:src="videoUrl" allowfullscreen></iframe>
    </div>
    <div class="details">
      <h4>{{ video.snippet.title }}</h4>
      <p>{{ video.snippet.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  props: ["video"],
  computed: {
    videoUrl() {
      // const videoId = this.video.id.videoId;
      const { videoId } = this.video.id;
      return `https://www.youtube.com/embed/${videoId}`;
    },
  },
};
</script>

<style scoped>
.details {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
