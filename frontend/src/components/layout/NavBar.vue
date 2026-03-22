<script></script>
<template>
  <section id="navbar">
      <div><h2>˙𐃷˙ To do List</h2></div>
      <div>Área do Perfil</div>
      <search>
        <form action="./search/">
          <input type="search" id="movie" name="q" />
          <button type="submit">Search</button>
        </form>
      </search>
  </section>
</template>

<style scoped>
#navbar {
  background: #fff;
  border: 2px solid #e5e4e7;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-width: 300vw;
  gap: 3rem; 
}
</style>