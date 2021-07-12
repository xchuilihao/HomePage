<template>
  <div class="home">
    <div class="home-nav">
      <div
        class="home-nav-item"
        v-for="nav in navItems"
        :key="nav.code"
        @mouseenter="handleMouseenter(nav)"
        @mouseleave="handleMouseleave"
      >
        <vue-icon :icon="nav.icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      jumpInterval: {},
      navItems: [
        {
          code: 1001,
          icon: "github",
        },
        {
          code: 1002,
          icon: "blog",
        },
        {
          code: 1003,
          icon: "notes",
        },
        {
          code: 1004,
          icon: "twitter",
        },
      ],
    };
  },
  methods: {
    handleMouseenter(nav) {
      if (nav.code !== 1001) return;
      this.jumpInterval = setTimeout(() => {
        this.$router.push("/about");
      }, 750);
    },
    handleMouseleave() {
      clearInterval(this.jumpInterval);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;

  &-nav {
    display: flex;
    width: 20vw;
    justify-content: space-between;
    color: #333;
    border-radius: 2rem;

    &-item {
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      position: relative;
      box-shadow: inset 0 0 0 3px #fafafa;
      transition: color 1s;
      overflow: hidden;
      cursor: pointer;

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        top: 0;
        left: 0;
        box-sizing: border-box;
        border: 3px solid transparent;
      }
      &::before,
      &::after {
        border-radius: 50%;
      }

      &:hover {
        color: #409eff;

        &::before {
          width: 3rem;
          height: 3rem;
          border-color: #409eff;
          transition: border-top-color 0.25s linear,
            border-right-color 0.25s linear, border-bottom-color 0.25s linear,
            border-left-color 0.25s linear;
          transition-delay: 0s, 0.25s, 0.5s, 0.75s;
        }

        &::after {
          width: 3rem;
          height: 3rem;
          border-top: 3px solid #409eff;
          transform: rotate(270deg);
          transition: transform 0.75s linear;
          transition-delay: 0s;
        }
      }
    }
  }
}
</style>
