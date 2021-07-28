<template>
  <div class="page">
    <div class="detailpage-header-outer">
      <PageHeader>
        <template v-slot:in>
          <div>
            <HeaderNav></HeaderNav>
          </div>
        </template>
      </PageHeader>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageHeader from "../PageHeader/PageHeader";
import HeaderNav from "../PageHeader/HeaderNav";
import PageFooter from "../PageFooter";

export default {
  name: "CourseDetail",
  components: {
    PageHeader,
    HeaderNav,
    PageFooter,
  },
};
</script>

<style scoped lang="less">
.page {
  font-size: 16px;
  background-color: #f4f4f4;
  .detailpage-header-outer {
    height: 80px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
}
</style>
<style lang="less">
.page {
  .detailpage-header-outer {
    a.index {
      color: #000000;
      &::before {
        background-color: transparent;
      }
    }
  }
}
</style>
