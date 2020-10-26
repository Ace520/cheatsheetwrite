<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-col items-center py-20">
      <div class="text-xl">话题：123，文章：12312</div>
      <div class="w-40 border border-teal-400 rounded-lg py-2 cursor-pointer text-center mt-8">
        新建话题
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <div v-for="(item, k) in list" :key="k" class="p-3">
        <div class="border rounded">
          <div
            class="bg-local w-full h-48 rounded bg-cover bg-center"
            :style="'background-image: url(' + item.pic + ')'"
          ></div>
          <div class="p-2">
            <router-link class="mb-2" :to="'/d/' + item.id">{{
              item.title
            }}</router-link>
            <div class="mb-2">
              <span
                class="border border-teal-400 rounded-md text-xs px-2 mr-2"
                v-for="(tag, k1) in item.tags"
                :key="k1"
                >{{ tag }}</span
              >
            </div>
            <div class="text-xs text-gray-600 truncate">{{ item.summary }}</div>
          </div>
          <div class="p-2 border-t text-sm flex justify-end">
            <span class="mr-2 cursor-pointer text-blue-700">修改</span>
            <span class="cursor-pointer text-red-700">删除</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2';

export default {
  data: function () {
    return {
      list: [
        {
          title: "测试",
          summary: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
          pic:
            "https://cdn.pixabay.com/photo/2016/11/22/06/27/girl-1848472_960_720.jpg",
          tags: ["php", "laravel"],
        },
        {
          title: "测试",
          summary: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
          pic:
            "https://cdn.pixabay.com/photo/2016/11/22/06/27/girl-1848472_960_720.jpg",
          tags: ["php", "laravel"],
        },
        {
          title: "测试",
          summary: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
          pic:
            "https://cdn.pixabay.com/photo/2016/11/22/06/27/girl-1848472_960_720.jpg",
          tags: ["php", "laravel"],
        },
        {
          title: "测试",
          summary: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
          pic:
            "https://cdn.pixabay.com/photo/2016/11/22/06/27/girl-1848472_960_720.jpg",
          tags: ["php", "laravel"],
        },
        {
          title: "测试",
          summary: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
          pic:
            "https://cdn.pixabay.com/photo/2016/11/22/06/27/girl-1848472_960_720.jpg",
          tags: ["php", "laravel"],
        },
        {
          title: "测试",
          summary: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
          pic:
            "https://cdn.pixabay.com/photo/2016/11/22/06/27/girl-1848472_960_720.jpg",
          tags: ["php", "laravel"],
        },
        {
          title: "测试",
          summary: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
          pic:
            "https://cdn.pixabay.com/photo/2016/11/22/06/27/girl-1848472_960_720.jpg",
          tags: ["php", "laravel"],
        },
        {
          title: "测试",
          summary: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
          pic:
            "https://cdn.pixabay.com/photo/2016/11/22/06/27/girl-1848472_960_720.jpg",
          tags: ["php", "laravel"],
        },
        {
          title: "测试",
          summary: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
          pic:
            "https://cdn.pixabay.com/photo/2016/11/22/06/27/girl-1848472_960_720.jpg",
          tags: ["php", "laravel"],
        },

        {
          title: "测试",
          summary: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
          pic:
            "https://cdn.pixabay.com/photo/2016/11/22/06/27/girl-1848472_960_720.jpg",
          tags: ["php", "laravel"],
        },
        {
          title: "测试",
          summary: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
          pic:
            "https://cdn.pixabay.com/photo/2016/11/22/06/27/girl-1848472_960_720.jpg",
          tags: ["php", "laravel"],
        },
      ],
    };
  },
  mounted() {
    Swal.fire('Any fool can use a computer')
  },
};
</script>