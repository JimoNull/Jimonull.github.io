<template>
  <div>
    <HeaderNav />
    <HeaderProfile />



    <div>
      <section class="text-center m-10">
        <h2 class="text-3xl font-extralight">
          Works
        </h2>
        <p class="text-center m-2">
          <span class="material-icons text-6xl">
            home_repair_service
          </span>
        </p>
        <div>



        </div>
        <div class="flex text-center justify-center">
          <div class="card w-96 bg-base-100 shadow-xl m-2">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl m-2">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl m-2">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div>
      <section class="text-center m-10">
        <h2 class="text-3xl font-extralight">
          Skills
        </h2>
        <p class="text-center m-2">
          <span class="material-icons text-6xl">
            info
          </span>
        </p>

        <div class="overflow-x-auto max-w-3xl m-auto">
          <table class="table w-full">
            <!-- head -->
            <thead>
              <tr>
                <th class="text-base">言語/フレームワーク</th>
                <th class="text-base">スキルレベル</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr>
                <th>HTML/CSS</th>
                <td><progress class="progress progress-primary w-56 mr-10" value="60" max="100"></progress>60%</td>
              </tr>
              <!-- row 2 -->
              <tr>
                <th>PHP</th>
                <td><progress class="progress progress-primary w-56 mr-10" value="50" max="100"></progress>50%</td>
              </tr>
              <tr>
                <th>Javascript</th>
                <td><progress class="progress progress-primary w-56 mr-10" value="30" max="100"></progress>30%</td>
              </tr>
              <!-- row 3 -->
              <tr>
                <th>Java</th>
                <td><progress class="progress progress-primary w-56 mr-10" value="20" max="100"></progress>20%</td>
              </tr>
              <!-- row 2 -->
            </tbody>
          </table>
          <table class="table w-full">
            <!-- head -->
            <thead>
              <tr>
                <th class="text-base">その他</th>
                <th class="text-base">スキルレベル</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr>
                <th>コンテンツSEO</th>
                <td><progress class="progress progress-primary w-56 mr-10" value="80" max="100"></progress>80%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
        </div>
      </section>
    </div>


    <router-view />
  </div>
</template>

<script>
  import HeaderNav from './components/HeaderNav'
  import HeaderProfile from './components/HeaderProfile'

  export default {
    components: {
      HeaderNav,
      HeaderProfile
    },
    data() {
      return {
        msg: 'Hello World!'
      }
    },
    methods: {
      clear() {
        this.msg = ''
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>