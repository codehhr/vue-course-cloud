<template>
  <div class="page-footer">
    <div class="friend-link">
      <div class="friend-link-title">友情链接 :</div>
      <div class="friendslinks">
        <a
          v-for="(item, index) in footerData"
          :key="index"
          class="friendslink"
          :href="item.dictValue"
          >{{ item.dictLabel }}</a
        >
      </div>
      <div class="footer-line"></div>
      <div class="copyright">
        Copyright &copy; 2017-2025 石家庄天亮教育科技有限公司
        备案号:冀ICP备17020003号
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
  data() {
    return {
      footerApi: "/system/dict/data/list/open",
      footerData: [],
    };
  },
  methods: {
    getFooterData() {
      let formData = new FormData();
      formData.append("dictType", "blogroll");
      formData.append("pageNum", 1);
      formData.append("pageSize", 10);
      formData.append("orderByColumn", "dictSort");
      formData.append("isAsc", "asc");
      this.$axios
        .post(`${this.$domain}${this.footerApi}`, formData)
        .then((res) => {
          this.footerData = res.data.rows;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getFooterData();
  },
};
</script>

<style scoped lang="less">
@main-width: 1200px;
@main-color: #999999;
@footer-bg-color: #444545;
@page-footer-padding: 10px 0;
@page-footer-height: 200px;
@friend-link-title-margin: 20px auto 18px;
@friend-link-title-font-size: 24px;

/* footer start */
.page-footer {
  padding: @page-footer-padding;
  height: @page-footer-height;
  background-color: @footer-bg-color;
  color: @main-color;
  overflow: hidden;
  .friend-link-title {
    margin: @friend-link-title-margin;
    width: @main-width;
    font-size: @friend-link-title-font-size;
    text-align: left;
  }
  .friendslinks {
    margin: 0 auto;
    width: @main-width;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    a.friendslink {
      color: @main-color;
      margin-right: 20px;
    }
  }

  .footer-line {
    margin: 36px auto;
    padding: 0 100px;
    width: calc(@main-width - 200px);
    height: 1px;
    background-color: #686868;
  }
  .copyright {
    text-align: center;
  }
}
/* footer end */
</style>
