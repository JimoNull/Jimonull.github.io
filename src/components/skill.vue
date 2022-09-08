<template>
  <div>
    <section class="text-center m-10">
      <h2 class="text-3xl font-extralight">
        Skill
      </h2>
      <p class="text-center m-2">
        <span class="material-icons text-6xl">
          settings
        </span>
      </p>


      <div class="text-base text-center m-auto max-w-xs md:hidden">
        <p class="bg-gray-200 text-xl font-semibold">言語</p>
        <div class="p-3">
          <p class="text-base p-1">HTML/CSS</p>
          <p>60%</p>
          <progress class="progress progress-primary mr-10" value="60" max="100" />
        </div>

        <div class="p-3">
          <p class="text-base p-1">PHP</p>
          <p>30%</p>
          <progress class="progress progress-primary mr-10" value="50" max="100" />
        </div>

        <div class="p-3">
          <p class="text-base p-1">Javascript</p>
          <p>30%</p>
          <progress class="progress progress-primary mr-10" value="30" max="100" />
        </div>

        <div class="p-3">
          <p class="text-base p-1">Java</p>
          <p>20%</p>
          <progress class="progress progress-primary mr-10" value="20" max="100"/>
        </div>

        <p class="bg-gray-200 text-xl font-semibold mt-5">その他</p>
        <div class="p-3">
          <p class="text-base p-1">SEO</p>
          <p>70%</p>
          <progress class="progress progress-primary w-56 mr-10" value="70" max="100"/>
        </div>
      </div>

      <div class="overflow-x-auto max-w-2xl m-auto p-5 hidden md:block">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th class="text-base min-w-[10em]">言語 / FW</th>
              <th class="text-base">スキルレベル(自信度合い)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>HTML/CSS</th>
              <td><progress class="progress progress-primary w-56 mr-10" value="60" max="100"></progress>60%</td>
            </tr>
            <tr>
              <th>Javascript</th>
              <td><progress class="progress progress-primary w-56 mr-10" value="30" max="100"></progress>30%</td>
            </tr>
            <tr>
              <th>PHP</th>
              <td><progress class="progress progress-primary w-56 mr-10" value="30" max="100"></progress>30%</td>
            </tr>
            <tr>
              <th>Java</th>
              <td><progress class="progress progress-primary w-56 mr-10" value="20" max="100"></progress>20%</td>
            </tr>
          </tbody>
        </table>
        <table class="table w-full">
          <thead>
            <tr>
              <th class="text-base min-w-[10em]">その他</th>
              <th class="text-base"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>SEO</th>
              <td><progress class="progress progress-primary w-56 mr-10" value="70" max="100"></progress>70%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
      </div>
    </section>
  </div>
</template>

<script>
</script>

<style>
</style>