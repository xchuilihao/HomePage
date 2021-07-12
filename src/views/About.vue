<template>
  <div class="items">
    <div class="item">不可思议的CSS</div>
    <div class="item">导航栏</div>
    <div class="item">光标下划线跟随</div>
    <div class="item">PURE CSS</div>
    <div class="item">Coco</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.items {
  display: flex;
}

.item {
  position: relative;
  padding: 20px;
  color: #000;
  transition: 0.2s all linear;
  cursor: pointer;
}

.item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 100%;
  width: 0;
  height: 100%;
  border-bottom: 2px solid #000;
  transition: 0.2s all linear;
}

.item:hover::before {
  width: 100%;
  top: 0;
  left: 0;
  transition-delay: 0.1s;
  border-bottom-color: #000;
  z-index: -1;
}

.item:hover ~ .item::before {
  left: 0;
}

.item:active {
  background: #000;
  color: #fff;
}
</style>
