<template>
  <div class="instagram-container">
    <div class="instagram-block">
      <div class="line"></div>
      <div class="title">#質青洄游</div>
      <div class="description">
        用照片說故事，在地創生也可以很多元。<br>
        你也在洄游他鄉的路上？邀請你一起分享「在地創生」的故事，在 IG post 加上 #質青洄游，就能讓更多青年與地方被看見。
      </div>
      <div class="notice">※帳號請記得設定「公開」</div>
      <div class="posts-container">
        <div v-for="(post, index) in posts" :key="index" v-show="index < showPostNum">
          <div class="post-block">
            <a :href="post.path"><img :src="post.img"/></a>
          </div>
        </div>
      </div>
      <div class="read-more" v-show="showPostNum < 24" @click="handleReadMoreClick">閱讀更多</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      showPostNum: 8,
    }
  },
  methods: {
    handleReadMoreClick() {
      this.showPostNum += 8
    }
  },
  mounted() {
    fetch('https://newmedia.udn.com.tw/active/api/ighash?flag=Placemaking')
      .then(response => {
        return response.json()
      }).then(data => {
        this.posts = data
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
.instagram-container {
  background: #828ab0;
  padding-bottom: 91px;
  @media screen and (min-width: 768px) {
    padding-bottom: 99px;
  }
  @media screen and (min-width: 1280px) {
    padding-bottom: 113px;
  }
}
.instagram-block {
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
}
.line {
  width: 50px;
  height: 1px;
  background: #eeedfc;
  margin: 0 auto;
}
.title {
  display: flex;
  justify-content: center;
  margin: 21px 0 26px 0;
  color: #eeedfc;
  font-weight: 700;
  font-size: 40px;
  @media screen and (min-width: 768px) {
    font-size: 60px;
    margin: 8px 0 26px 0;
  }
  @media screen and (min-width: 1280px) {
    margin: 8px 0 14px 0;
  }
}
.description, .notice {
  display: flex;
  justify-content: center;
  color: #eeedfc;
  font-weight: 600;
  padding: 0 15px;
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 0 50px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 285px;
  }
}
.notice {
  font-size: 16px;
  justify-content: flex-start;
  margin-top: 10px;
}
.posts-container {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
  @media screen and (min-width: 768px) {
    padding: 0 50px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 44px;
    padding: 0 86px;
  }
}
.post-block {
  width: 166px;
  height: 166px;
  border-radius: 10px;
  border: solid 1px #f0ded0;
  background-color: #ffffff;
  position: relative;
  margin-top: 21px;
  @media screen and (min-width: 768px) {
    width: 158px;
    height: 158px;
  }
  @media screen and (min-width: 1280px) {
    width: 252px;
    height: 252px;
  }
  & > a > img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    position: absolute;
    top: 8px;
    left: 8px;
    object-fit: cover;
    @media screen and (min-width: 768px) {
      width: 142px;
      height: 142px;
    }
    @media screen and (min-width: 1280px) {
      width: 228px;
      height: 228px;
      top: 12px;
      left: 12px;
    }
  }
}
.read-more {
  width: 82px;
  height: 28px;
  border-radius: 10px;
  border: solid 2px #eeedfc;
  background-color: #828ab0;
  color: #eeedfc;
  font-size: 18px;
  text-align: center;
  line-height: 28px;
  font-weight: 400;
  font-family: 'Noto Sans TC', sans-serif;
  margin: 68px auto 0 auto;
  padding: 11px 77px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-top: 50px;
    font-size: 20px;
    padding: 14px 77px;
    line-height: 29px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 36px;
  }
  @media (hover: hover) {
    &:hover {
      background:#eeedfc;
      color: #828ab0;
    }
  }
}
</style>