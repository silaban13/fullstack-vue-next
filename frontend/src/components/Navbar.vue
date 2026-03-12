
 <template>
  <nav class="flex items-center justify-between bg-gray-800 px-8 py-4">
    <div class="text-white text-xl font-bold"> M | S </div>
    <ul class="flex gap-6 lg:mr-[90px]">
      <li>
        <RouterLink to="/" class="text-gray-300 hover:text-white" > Home </RouterLink>
      </li>
      <li>
        <RouterLink to="/about" class="text-gray-300 hover:text-white"> About </RouterLink>
      </li>
      <li>
        <RouterLink to="/login" class="text-gray-300 hover:text-white"> Login </RouterLink>
      </li>
      <li>
        <RouterLink to="/register" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md" > Register </RouterLink>
      </li>
    </ul>
  </nav>
  <RouterView />
</template>

 

<style>

</style>