<template>
  <div class="we-video-info">
    <ul>
      <li>
        <span class="comment" data-toggle="tooltip" title="Comments">
          <i class="fa fa-comments-o"></i>
          <ins>{{ feed.comments?.length || 0 }}</ins>
        </span>
      </li>
      <li>
        <span class="like" data-toggle="tooltip" title="like">
          <i class="ti-heart"></i>
          <ins>{{ feed.heart }}</ins>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    feed: {
      type: [Object, Array],
      default: () => {},
    },
  },
};
</script>