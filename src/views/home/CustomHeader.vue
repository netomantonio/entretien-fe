<template>
  <header class="header">
    <div class="header-group">
      <div class="flex items-center justify-between py-10">
        <div class="w26 lg:w-36 md:w-26">
          <img alt="logo" class="w-full" src="../../assets/images/logo_white.png">
        </div>
        <div class="flex">
          <button
            class="px-6 py-2 font-bold rounded-full text-white focus:outline-none"
            @click="() => emit('create-account')">
            Crie uma conta
          </button>
          <button
            class="px-6 py-2 font-bold bg-white rounded-full text-brand-main focus:outline-none"
            @click="() => emit('login')">
            Entrar
          </button>
        </div>
      </div>
      <div id="banner" class="flex flex-col mt-28">
        <h1 class="text-4xl font-black text-white">
          Aumente a eficácia <br>
          <div style="margin-bottom: 5px;"></div>
          do seu processo seletivo! <br>
        </h1>
        <h1 class="text-3xl font-black text-white">
          <div style="margin-bottom: 20px;"></div>
          Entrevistas com profissionais <br>
          ESPECIALIZADOS <br class="hidden lg:inline-block">
        </h1>
        <div style="margin-bottom: 20px;"></div>
        <p class="text-lg font-bold text-white">
          Candidato com autonomia para <br> escolherem o melhor horário! <br>
          E mais economia para sua empresa.
        </p>
        <div>
          <button class="px-6 py-2 mt-10 font-bold bg-white rounded-full text-brand-main focus:outline-none">
            Descubra como otimizar suas contratações agora!
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  setup(_, {emit}) {
    return {emit}
  }
}
</script>
<style lang="postcss" scoped>
.header {
  @apply bg-brand-main w-full flex justify-center;
  height: 700px;
}

.header-group {
  @apply flex flex-col w-4/5 max-w-6xl;
}


@media (min-width: 1078px) {
  .header-group {
    background-image: url("@/assets/images/bg_scenery_home.png");
    background-size: 600px;
    background-position: 90% 100%;
    background-repeat: no-repeat;
  }
}

</style>
