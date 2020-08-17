<template>
  <div class="post">
    <header class="header section">
      <div class="header-author">
        <Avatar :size="32" />
        <div class="header-author-info">
          <div>
            <CustomText tag="b">chsdwn</CustomText>
          </div>
          <div>
            <CustomText size="xsmall">Turkey</CustomText>
          </div>
        </div>
      </div>
      <div class="header-more">
        <button type="button"><IconMore /></button>
      </div>
    </header>

    <div class="post-media">
      <img :src="require('@/assets/post.jpg')" alt="Post" />
    </div>

    <div class="action-buttons section">
      <button type="button">
        <IconLike />
      </button>
      <button type="button">
        <IconComment />
      </button>
      <button type="button">
        <IconDirect />
      </button>
      <button type="button">
        <IconSave />
      </button>
    </div>

    <div class="view-count section">
      <CustomText tag="b">1,984 likes</CustomText>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import Avatar from '@/components/Avatar.vue';
import CustomText from '@/components/CustomText.vue';

import IconComment from '@/icons/comment.svg';
import IconDirect from '@/icons/direct.svg';
import IconLike from '@/icons/like.svg';
import IconMore from '@/icons/more.svg';
import IconSave from '@/icons/save.svg';

const Post = Vue.extend({
  name: 'Post',
  components: {
    Avatar,
    CustomText,
    IconComment,
    IconDirect,
    IconLike,
    IconMore,
    IconSave,
  },
});

export default Post;
</script>

<style lang="postcss" scoped>
.section {
  padding-left: 16px;
  padding-right: 16px;
}

.post {
  border-radius: 3px;
  border: 1px solid rgb(var(--b6a));
  background-color: white;
}

.header {
  height: 60px;

  display: flex;
  align-items: center;

  &-author {
    display: flex;
    align-items: center;

    &-info {
      margin-left: 8px;
    }
  }

  &-more {
    margin-left: auto;
  }
}

.action-buttons {
  height: 45px;

  display: flex;
  align-items: center;

  button {
    margin-right: 16px;

    &:last-child {
      margin-left: auto;
      margin-right: 0;
    }
  }
}
</style>
