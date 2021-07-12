<template>
  <div class="articles-component-container">
    <div class="articles-component-block">
      <div class="line"></div>
      <div class="title">青春留鄉</div>
      <div class="description">
        透過深度報導，帶你了解台灣有許多青年洄游到各地貢獻外，也在不同領域翻轉地方逆境的故事。
      </div>
      <div class="buttons-container">
        <div class="position">
          <div class="position-all" @click="handlePositionClick(null)" :class="{ active: positionActive === null}">全</div>
          <div class="position-north" @click="handlePositionClick('north')" :class="{ active: positionActive === 'north'}">北</div>
          <div class="position-central" @click="handlePositionClick('central')" :class="{ active: positionActive === 'central'}">中</div>
          <div class="position-south" @click="handlePositionClick('south')" :class="{ active: positionActive === 'south'}">南</div>
          <div class="position-east" @click="handlePositionClick('east')" :class="{ active: positionActive === 'east'}">東</div>
        </div>
        <div class="type">
          <div class="education" @click="handleTypeClick('education')" :class="{ active: typeActive === 'education'}">教育</div>
          <div class="argiculture" @click="handleTypeClick('argiculture')" :class="{ active: typeActive === 'argiculture'}">友善農業</div>
          <div class="local" @click="handleTypeClick('local')" :class="{ active: typeActive === 'local'}">地方文化</div>
          <div class="economy" @click="handleTypeClick('economy')" :class="{ active: typeActive === 'economy'}">循環經濟</div>
        </div>
      </div>
      <div class="articles-container">
        <div class="article-block-container" v-for="(article, index) in articlesData" :key="index" v-show="articleFilter(article.position, article.type) && checkArticleShow(article.id)">
          <div class="article-block" v-if="articleFilter(article.position, article.type)">
            <a :href="article.url"><img :src="article.image"/></a>
            <div class="article-title">
              <div>{{ article.title[0] }}</div>
              <div>{{ article.title[1] }}</div>
              <div class="article-description">
                {{ article.description }}
              </div>
              <div class="tag">{{ typeTranslate(article.type) }}</div>
              {{ calculateId(article.id) }}
            </div>
          </div>
        </div>
        <div class="blank"></div>
        <div class="blank"></div>
      </div>
      <div class="read-more" v-show="articlesNum > showArticlesNum" @click="handleReadMoreClick">閱讀更多</div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { articlesData } from '@/data/data-articles.js'

export default {
  data() {
    return {
      typeActive: null,
      articlesData,
      showArticlesNum: 6,
      articlesNum: 0,
      tempNum: []
    }
  },
  methods: {
    handlePositionClick(position) {
      this.showArticlesNum = 6
      this.articlesNum = 0
      this.tempNum = []
      this.positionChange(position)
    },
    handleTypeClick(type) {
      this.showArticlesNum = 6
      this.articlesNum = 0
      this.tempNum = []
      this.typeActive = type
    },
    ...mapMutations([
      'positionChange'
    ]),
    typeTranslate(type) {
      const typeMap = { 'education': '教育', 'argiculture': '友善農業', 'local': '地方文化', 'economy': '循環經濟' }
      return typeMap[type]
    },
    articleFilter(position, type) {
      const positionCheck = (this.positionActive === null) || (this.positionActive === position)
      const typeCheck = (this.typeActive === null) || (this.typeActive === type)
      return positionCheck && typeCheck
    },
    checkArticleShow(id) {
      if(this.articlesNum <= this.showArticlesNum) return true
      const lastArticle = this.tempNum[this.showArticlesNum - 1]
      return id <= lastArticle
    },
    calculateId(id) {
      if((id > this.tempNum[this.articlesNum - 1]) || this.articlesNum === 0) {
        this.tempNum.push(id)
        this.articlesNum += 1
      }
    },
    handleReadMoreClick() {
      this.showArticlesNum += 6
    }
  },
  computed: {
    ...mapState([
      'positionActive'
    ])
  }
}
</script>

<style lang="scss" scoped>
.articles-component-container {
  background: #828ab0;
  padding-top: 73px;
  padding-bottom: 87px;
  @media screen and (min-width: 768px) {
    padding-bottom: 97px;
  }
  @media screen and (min-width: 1280px) {
    padding-bottom: 99px;
  }
}
.articles-component-block {
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
.description {
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
.position {
  display: flex;
  justify-content: center;
  margin-top: 25px;
  @media screen and (min-width: 768px) {
    margin-top: 28px;
  }
  & > div {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1px solid #eeedfc;
    background: #828ab0;
    color: #eeedfc;
    font-size: 22px;
    opacity: 0.99;
    text-align: center;
    line-height: 35px;
    font-weight: 500;
    cursor: pointer;
    @media screen and (min-width: 768px) {
      width: 48px;
      height: 48px;
      line-height: 45px;
    }
    @media (hover: hover) {
      &:hover {
        background:#eeedfc;
        color: #828ab0;
      }
    }
    &.active {
      background:#eeedfc;
      color: #828ab0;
    }
  }
  & > div + div {
    margin-left: 15px;
    @media screen and (min-width: 768px) {
      margin-left: 7px;
    }
  }
}
.type {
  display: flex;
  justify-content: center;
  margin-top: 16px;
  @media screen and (min-width: 768px) {
    margin-top: 23px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 18px;
  }
  & > div {
    height: 22px;
    padding: 3px 8px 3px 8px;
    border-radius: 10px;
    border: solid 1px #eeedfc;
    background-color: #828ab0;
    color: #eeedfc;
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    cursor: pointer;
    @media screen and (min-width: 768px) {
      height: 32px;
      padding: 3px 20px 3px 20px;
      font-size: 22px;
      line-height: 30px;
    }
    @media (hover: hover) {
      &:hover {
        background:#eeedfc;
        color: #828ab0;
      }
    }
    &.active {
      background:#eeedfc;
      color: #828ab0;
    }
  }
  & > div + div {
    margin-left: 7px;
    @media screen and (min-width: 768px) {
      margin-left: 20px;
    }
  }
}
.articles-container {
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    padding: 0 50px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 85px;
    width: 1110px;
    margin: 0 auto;
  }
}
.article-block {
  display: flex;
  position: relative;
  padding: 30px 15px 0 15px;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    padding: 43px 0 0 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 41px 0 0 0;
  }
  & > a > img {
    width: 124px;
    height: 97px;
    border-radius: 10px;
    @media screen and (min-width: 768px) {
      width: 319px;
      height: 248px;
    }
    @media screen and (min-width: 1280px) {
      width: 330px;
      height: 250px;
    }
  }
}
.article-title {
  font-size: 16px;
  color: #eeedfc;
  font-family: 'Noto Sans TC', sans-serif;
  padding: 7px 0 0 13px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    padding: 29.2px 0 0 0;
    width: 319px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 27px;
    width: 330px;
  }
}
.article-description {
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    color: #41403d;
    font-size: 16px;
    text-align: left;
    padding: 11px 0 27px 0;
    line-height: 1.7;
  }
  @media screen and (min-width: 1280px) {
    padding-bottom: 37px;
  }
}
.tag {
  display: inline-block;
  padding: 2px 12px;
  height: 22px;
  background-color: #eeedfc;
  color: #828ab0;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 14px;
  text-align: center;
  line-height: 22px;
  font-weight: 400;
  margin-top: 14px;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 257px;
    height: 33px;
    font-size: 20px;
    line-height: 33px;
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
.blank {
  @media screen and (min-width: 768px) {
    width: 320px;
  }
}
</style>