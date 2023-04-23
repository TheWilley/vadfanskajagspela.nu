<template>
  <header id="header" ref="header" class="text-center p-2">
    <p class="text-center"> Skapat med ❤️ av <a href="https://github.com/TheWilley/vadfanskajagspela.nu"
        class="text-info">TheWilley</a> - Inspererat av <a href="https://vadfanskajaglagatillmiddag.nu"
        class="text-info">vadfanskajaglagatillmiddag.nu</a>
    </p>

    <select class="form-select p-2" aria-label="Default select example">
      <option value="0">Alla Spel</option>
      <option value="1">Betalda Spel</option>
      <option value="2">Gratis Spel</option>
    </select>
  </header>
</template>

<style scoped lang="sass">
    #header
      width: 100%
      height: auto
      position: fixed
      top: 0
      background: black
      margin: 0
      transition: 0.2s cubic-bezier(0.25,0.80,1,1)
      margin-top: -120px
      background: black
      z-index: 3

      .form-select
        background: none
        border-radius: 5px

</style>

<script lang="ts">
export default {
  async mounted() {
    this.handleScroll()
    this.handleSwipe()
    this.handleSelect()
  },
  methods: {
    handleScroll() {
      window.addEventListener("wheel", (e: WheelEvent) => {
        if (e.deltaY < 0) {
          (this.$refs.header as HTMLElement).style.marginTop = '-120px';
        }
        else if (e.deltaY > 0) {
          (this.$refs.header as HTMLElement).style.marginTop = '0px';
        }
      });

    },
    handleSwipe() {
      let touchstartY = 0;
      let touchendY = 0;

      window.addEventListener('touchstart', e => {
        touchstartY = e.changedTouches[0].screenY
      })

      window.addEventListener('touchend', e => {
        touchendY = e.changedTouches[0].screenY
        if (touchendY < touchstartY) {
          (this.$refs.header as HTMLElement).style.marginTop = '-120px';
        }
        if (touchendY > touchstartY) {
          (this.$refs.header as HTMLElement).style.marginTop = '0px';
        }
      })
    },
    handleSelect() {
      let select = document.querySelector('.form-select') as HTMLSelectElement
      if (window.location.href.includes('free')) {
        select.value = '2'
      } else if (window.location.href.includes('paid')) {
        select.value = '1'
      } else {
        select.value = '0'
      }
      
      select.addEventListener('change', e => {
        const target = (e.target) as HTMLSelectElement
        if (target.value === '1') {
          window.location.href = '/filter/paid'
        } else if(target.value === '2') {
          window.location.href = '/filter/free'
        } else {
          window.location.href = '/'
        }
      })
    }
  }
}
</script>