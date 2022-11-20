<template>
  <div class="loadMore">
    <div class="central-meta item" v-for="(feed, index) in feeds" :key="index">
      <div class="user-post">
        <feed-writer :feed="feed" />
        <feed-contents :feed="feed" />
        <feed-comments :feed="feed" />
      </div>
    </div>
    <!-- 
      <div class="central-meta item">
      v-for="(feed, index) in feeds" :key="index"
      :feed="feed"

      <div class="user-post">
        <div class="friend-info">
          <figure>
            <img src="/images/resources/nearly1.jpg" alt="" />
          </figure>
          <div class="friend-name">
            <ins><a href="time-line.html" title="">Sara Grey</a></ins>
            <span>published: june,2 2018 19:PM</span>
          </div>
          <div class="post-meta">
            <iframe
              width=""
              height="315"
              src="https://www.youtube.com/embed/5JJ_jqqpTMY"
              allow="autoplay;"
              allowfullscreen
            ></iframe>
            <div class="we-video-info">
              <ul>
                <li>
                  <span class="views" data-toggle="tooltip" title="views">
                    <i class="fa fa-eye"></i>
                    <ins>1.2k</ins>
                  </span>
                </li>
                <li>
                  <span class="comment" data-toggle="tooltip" title="Comments">
                    <i class="fa fa-comments-o"></i>
                    <ins>52</ins>
                  </span>
                </li>
                <li>
                  <span class="like" data-toggle="tooltip" title="like">
                    <i class="ti-heart"></i>
                    <ins>2.2k</ins>
                  </span>
                </li>
                <li>
                  <span class="dislike" data-toggle="tooltip" title="dislike">
                    <i class="ti-heart-broken"></i>
                    <ins>200</ins>
                  </span>
                </li>
                <li class="social-media">
                  <div class="menu">
                    <div class="btn trigger">
                      <i class="fa fa-share-alt"></i>
                    </div>
                    <div class="rotater">
                      <div class="btn btn-icon">
                        <a href="#" title=""><i class="fa fa-html5"></i></a>
                      </div>
                    </div>
                    <div class="rotater">
                      <div class="btn btn-icon">
                        <a href="#" title=""><i class="fa fa-facebook"></i></a>
                      </div>
                    </div>
                    <div class="rotater">
                      <div class="btn btn-icon">
                        <a href="#" title=""
                          ><i class="fa fa-google-plus"></i
                        ></a>
                      </div>
                    </div>
                    <div class="rotater">
                      <div class="btn btn-icon">
                        <a href="#" title=""><i class="fa fa-twitter"></i></a>
                      </div>
                    </div>
                    <div class="rotater">
                      <div class="btn btn-icon">
                        <a href="#" title=""><i class="fa fa-css3"></i></a>
                      </div>
                    </div>
                    <div class="rotater">
                      <div class="btn btn-icon">
                        <a href="#" title=""><i class="fa fa-instagram"></i></a>
                      </div>
                    </div>
                    <div class="rotater">
                      <div class="btn btn-icon">
                        <a href="#" title=""><i class="fa fa-dribbble"></i></a>
                      </div>
                    </div>
                    <div class="rotater">
                      <div class="btn btn-icon">
                        <a href="#" title=""><i class="fa fa-pinterest"></i></a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="description">
              <p>
                Lonely Cat Enjoying in Summer Curabitur
                <a href="#" title="">#mypage</a> ullamcorper ultricies nisi. Nam
                eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                condimentum rhoncus, sem quam semper libero, sit amet adipiscing
                sem neque sed ipsum. Nam quam nunc,
              </p>
            </div>
          </div>
        </div>
        <div class="coment-area">
          <ul class="we-comet">
            <li>
              <div class="comet-avatar">
                <img src="/images/resources/comet-1.jpg" alt="" />
              </div>
              <div class="we-comment">
                <div class="coment-head">
                  <h5>
                    <a href="time-line.html" title="">Jason borne</a>
                  </h5>
                  <span>1 year ago</span>
                  <a class="we-reply" href="#" title="Reply"
                    ><i class="fa fa-reply"></i
                  ></a>
                </div>
                <p>
                  we are working for the dance and sing songs. this video is
                  very awesome for the youngster. please vote this video and
                  like our channel
                </p>
              </div>
            </li>
            <li>
              <div class="comet-avatar">
                <img src="/images/resources/comet-2.jpg" alt="" />
              </div>
              <div class="we-comment">
                <div class="coment-head">
                  <h5>
                    <a href="time-line.html" title="">Sophia</a>
                  </h5>
                  <span>1 week ago</span>
                  <a class="we-reply" href="#" title="Reply"
                    ><i class="fa fa-reply"></i
                  ></a>
                </div>
                <p>
                  we are working for the dance and sing songs. this video is
                  very awesome for the youngster.
                  <i class="em em-smiley"></i>
                </p>
              </div>
            </li>
            <li>
              <a href="#" title="" class="showmore underline">more comments</a>
            </li>
            <li class="post-comment">
              <div class="comet-avatar">
                <img src="/images/resources/comet-2.jpg" alt="" />
              </div>
              <div class="post-comt-box">
                <form method="post">
                  <textarea placeholder="Post your comment"></textarea>
                  <div class="add-smiles">
                    <span class="em em-expressionless" title="add icon"></span>
                  </div>
                  <div class="smiles-bunch">
                    <i class="em em---1"></i>
                    <i class="em em-smiley"></i>
                    <i class="em em-anguished"></i>
                    <i class="em em-laughing"></i>
                    <i class="em em-angry"></i>
                    <i class="em em-astonished"></i>
                    <i class="em em-blush"></i>
                    <i class="em em-disappointed"></i>
                    <i class="em em-worried"></i>
                    <i class="em em-kissing_heart"></i>
                    <i class="em em-rage"></i>
                    <i class="em em-stuck_out_tongue"></i>
                  </div>
                  <button type="submit"></button>
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="central-meta item">
      <div class="user-post">
        <div class="friend-info">
          <figure>
            <img src="/images/resources/nearly6.jpg" alt="" />
          </figure>
          <div class="friend-name">
            <ins><a href="time-line.html" title="">Sophia</a></ins>
            <span>published: january,5 2018 19:PM</span>
          </div>
          <div class="post-meta">
            <div class="post-map">
              <div class="nearby-map">
                <div id="map-canvas"></div>
              </div>
            </div>
            <div class="we-video-info">
              <ul>
                <li>
                  <span class="views" data-toggle="tooltip" title="views">
                    <i class="fa fa-eye"></i>
                    <ins>1.2k</ins>
                  </span>
                </li>
                <li>
                  <span class="comment" data-toggle="tooltip" title="Comments">
                    <i class="fa fa-comments-o"></i>
                    <ins>52</ins>
                  </span>
                </li>
                <li>
                  <span class="like" data-toggle="tooltip" title="like">
                    <i class="ti-heart"></i>
                    <ins>2.2k</ins>
                  </span>
                </li>
                <li>
                  <span class="dislike" data-toggle="tooltip" title="dislike">
                    <i class="ti-heart-broken"></i>
                    <ins>200</ins>
                  </span>
                </li>
                <li class="social-media">
                  <div class="menu">
                    <div class="btn trigger">
                      <i class="fa fa-share-alt"></i>
                    </div>
                    <div class="rotater">
                      <div class="btn btn-icon">
                        <a href="#" title=""><i class="fa fa-html5"></i></a>
                      </div>
                    </div>
                    <div class="rotater">
                      <div class="btn btn-icon">
                        <a href="#" title=""><i class="fa fa-facebook"></i></a>
                      </div>
                    </div>
                    <div class="rotater">
                      <div class="btn btn-icon">
                        <a href="#" title=""
                          ><i class="fa fa-google-plus"></i
                        ></a>
                      </div>
                    </div>
                    <div class="rotater">
                      <div class="btn btn-icon">
                        <a href="#" title=""><i class="fa fa-twitter"></i></a>
                      </div>
                    </div>
                    <div class="rotater">
                      <div class="btn btn-icon">
                        <a href="#" title=""><i class="fa fa-css3"></i></a>
                      </div>
                    </div>
                    <div class="rotater">
                      <div class="btn btn-icon">
                        <a href="#" title=""><i class="fa fa-instagram"></i></a>
                      </div>
                    </div>
                    <div class="rotater">
                      <div class="btn btn-icon">
                        <a href="#" title=""><i class="fa fa-dribbble"></i></a>
                      </div>
                    </div>
                    <div class="rotater">
                      <div class="btn btn-icon">
                        <a href="#" title=""><i class="fa fa-pinterest"></i></a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="description">
              <p>
                Curabitur Lonely Cat Enjoying in Summer
                <a href="#" title="">#mypage</a> ullamcorper ultricies nisi. Nam
                eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                condimentum rhoncus, sem quam semper libero, sit amet adipiscing
                sem neque sed ipsum. Nam quam nunc,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
  <button v-if="!isLast" @click="readMore" class="btn-view btn-load-more">
    Load More
  </button>
  <span v-else>마지막 글 입니다.</span>
</template>

<script>
import feedComments from "@/components/newsFeed/feedItems/feedComments.vue";
import feedContents from "./feedItems/feedContents.vue";
import feedWriter from "./feedItems/feedWriter.vue";
import { toRaw } from "vue";
export default {
  components: {
    feedComments,
    feedContents,
    feedWriter,
  },
  props: {
    dataReload: null,
  },
  data() {
    return {
      feeds: [],
      paging: {
        page: 0,
        size: 5,
      },
      isinit: false,
      isLast: false,
    };
  },

  watch: {
    dataReload() {
      // 게시글 등록 완료
      this.isinit = true;
      this.getPostList();
    },
  },
  async created() {
    this.isinit = true;
    this.getPostList();
  },
  mounted() {},
  methods: {
    readMore() {
      // 게시글 더보기
      this.isinit = false;
      this.paging.page += 1;
      this.getPostList();
    },
    async getPostList() {
      return await this.$axios
        .get(`v1/board?page=${this.paging.page}&size=${this.paging.size}`)
        .then((response) => {
          const board_list = response.data.data.board_list;
          this.isLast = response.data.data.last;
          if (this.isinit) {
            this.feeds = toRaw(board_list);
          } else {
            this.feeds = this.feeds.concat(toRaw(board_list));
          }
          this.$forceUpdate();
        });
    },
  },
};
</script>