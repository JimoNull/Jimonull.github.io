<template>
  <div class="sticky top-0 z-10 bg-white">
    <header class="flex relative">
      <nav class="navbar">
        <div class="flex-1">
          <router-link to="/" class="btn btn-ghost normal-case xl:text-3xl">
            <img class="w-12 rounded-full p-1" src="@/assets/img/jimonull.jpeg">
            Jimonull's Portfolio</router-link>
        </div>
        <div class="flex-none">
          <ul class="sm:flex hidden menu menu-horizontal p-0 xl:text-2xl">
            <li>
              <router-link to="/" class="xl:mx-5">About</router-link>
            </li>
            <li>
              <router-link to="/works" class="xl:mx-5">Works</router-link>
            </li>
            <li>
              <router-link to="/career">Career</router-link>
            </li>
            <li>
              <router-link to="/skills" class="xl:mx-5">Skills</router-link>
            </li>
          </ul>
        </div>

        <div class="sm:hidden dropdown dropdown-end">
          <label tabindex="0" class="flex btn btn-ghost m-1 animate-none">
            <span class="bg-black w-4 h-px absolute top-[calc(50%_-_6px)]"></span>
            <span class="bg-black w-4 h-px absolute top-[calc(50%_-_1px)]"></span>
            <span class="bg-black w-4 h-px absolute top-[calc(50%_+_4px)]"></span>
          </label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/works">Works</router-link>
            </li>
            <li>
              <router-link to="/career">Career</router-link>
            </li>
            <li>
              <router-link to="/skills">Skills</router-link>
            </li>
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