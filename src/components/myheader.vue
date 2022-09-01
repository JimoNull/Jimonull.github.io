<template>
  <div>
    <header class="flex relative z-10 bg-blue-200">
      <nav class="navbar">
        <div class="flex-1">
          <router-link to="/" class="btn btn-ghost normal-case text-xl">
            <img class="w-12 rounded-full p-1" src="@/assets/img/jimonull.jpeg">
            Jimonull's Portfolio</router-link>
        </div>
        <div class="flex-none">
          <ul class="sm:flex hidden menu menu-horizontal p-0">
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/works">Works</router-link></li>
            <li><router-link to="/skills">Skills</router-link></li>
          </ul>
        </div>

        <div class="sm:hidden dropdown dropdown-end">
          <label tabindex="0" class="flex btn btn-ghost m-1 animate-none">
            <span class="bg-black w-4 h-px absolute top-[calc(50%_-_6px)]"></span>
            <span class="bg-black w-4 h-px absolute top-[calc(50%_-_1px)]"></span>
            <span class="bg-black w-4 h-px absolute top-[calc(50%_+_4px)]"></span>
          </label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/works">Works</router-link></li>
            <li> <router-link to="/skills">Skills</router-link></li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
  export default {}
</script>

<style>

</style>