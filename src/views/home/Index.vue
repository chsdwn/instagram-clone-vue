<template>
  <div class="home">
    <div class="timeline">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue
        ligula nisl, et bibendum ipsum egestas in. Cras ornare magna in ipsum
        aliquet condimentum. Sed libero turpis, posuere eu euismod eu, molestie
        vel augue. Suspendisse mi augue, molestie et orci nec, volutpat feugiat
        libero. Nunc sollicitudin lacus porttitor felis elementum, ac laoreet
        lacus venenatis. Vestibulum non neque pulvinar, ultricies nibh vitae,
        volutpat magna. Curabitur laoreet, neque eget auctor iaculis, magna nibh
        mattis purus, nec porta lorem tellus nec metus. Vestibulum dignissim
        libero ut dolor condimentum ornare. Phasellus rutrum lacus et fermentum
        rhoncus. Pellentesque cursus augue vel lacinia tempus. Aliquam erat
        volutpat. Fusce id finibus risus, vel fringilla justo.
      </p>
      <br />
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Donec pretium ligula nisi, molestie finibus
        elit ornare et. Aenean et faucibus tortor. Aenean imperdiet sem ut
        viverra maximus. Fusce eu mattis elit. Maecenas libero tortor,
        sollicitudin ac placerat non, tempus ac lectus. Curabitur eget posuere
        nisi, sit amet cursus arcu.
      </p>
      <br />

      <p>
        Morbi fringilla quam eu nisl malesuada, et laoreet sem iaculis. Proin
        facilisis magna lobortis justo convallis fermentum. Aliquam est dolor,
        viverra a mollis at, facilisis eu velit. Maecenas euismod dolor eget
        quam gravida accumsan. Curabitur pharetra ullamcorper placerat. Aenean
        dapibus mauris in consequat consectetur. Suspendisse ac eros ac nunc
        cursus pretium at sed augue. Fusce velit tellus, auctor sed ex eget,
        varius bibendum dui. Proin ultricies, arcu vitae vehicula accumsan, elit
        libero ornare erat, ac ultricies ligula nisi nec risus. Proin ac augue
        ac libero pretium aliquet.
      </p>
      <br />

      <p>
        Integer id massa enim. Quisque erat lacus, posuere ullamcorper iaculis
        vitae, convallis sed massa. Aenean faucibus non mauris id dictum. Sed
        dignissim pulvinar bibendum. Nam tempus justo vel ante viverra tempus.
        Proin ante ipsum, aliquet vitae venenatis quis, feugiat eget magna.
        Vivamus venenatis suscipit mauris vitae sollicitudin. Mauris nec est sit
        amet enim euismod hendrerit. Quisque velit metus, commodo id malesuada
        quis, ullamcorper non metus.
      </p>
      <br />

      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Vestibulum consequat tortor mollis urna cursus
        volutpat. Sed egestas dolor sit amet lorem feugiat, at eleifend dolor
        interdum. Maecenas vulputate feugiat lectus, non aliquet erat blandit
        eget. Integer cursus lacus aliquam, feugiat urna ut, tempor metus.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Duis in velit non odio semper gravida
        vitae quis leo. Suspendisse sit amet sem nulla. Praesent nec fringilla
        purus, vel gravida lorem. Curabitur porttitor risus ac urna placerat, a
        vestibulum odio pretium. Donec faucibus ex eget lobortis maximus. Donec
        non venenatis urna, sed egestas eros. Nulla placerat, leo non dapibus
        sollicitudin, ex ligula aliquet ligula, sed ullamcorper leo odio a nunc.
        Nulla eget leo scelerisque, aliquet risus in, varius eros. Nunc rutrum
        elit sem, sit amet sollicitudin metus tempus quis.
      </p>
    </div>

    <div class="sidebar">
      <p>
        Suspendisse sit amet sem nulla. Praesent nec fringilla purus, vel
        gravida lorem. Curabitur porttitor risus ac urna placerat, a vestibulum
        odio pretium. Donec faucibus ex eget lobortis maximus. Donec non
        venenatis urna, sed egestas eros. Nulla placerat, leo non dapibus
        sollicitudin, ex ligula aliquet ligula, sed ullamcorper leo odio a nunc.
      </p>
      <br />
      <p>
        Proin ante ipsum, aliquet vitae venenatis quis, feugiat eget magna.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
});
</script>

<style lang="postcss" scoped>
.home {
  max-width: 605px;
  margin-left: auto;
  margin-right: auto;

  @media (--t) {
    max-width: none;

    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
}

.sidebar {
  display: none;

  @media (--t) {
    display: block;
  }
}
</style>
