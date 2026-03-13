<script setup>
  import { ref } from "vue";
  // import axios from "axios";
  import api from "@/services/api";

  const name = ref("");
  const email = ref("");
  const password = ref("");
  const errorMessage = ref("");
  const successMessage = ref(""); 

  const handleRegister = async () => {
    errorMessage.value = "";
    successMessage.value = "";
    try {
      const res = await api.post("/api/auth/register", {
        name: name.value,
        email: email.value,
        password: password.value,
      });

      alert(`Account created for ${res.data.user.email}! Please login.`);
      window.location.href = "/login";
    } catch (err) {
      errorMessage.value = err.response?.data?.error || "Something went wrong";
      alert(err.response?.data?.message || err.message);
    }
  };

  const showPassword = ref(false);
  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };

</script>

<template>
  <div class="bg-slate-600 flex min-h-full flex-1 flex-col justify-center px-6 py-[90px] lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="handleRegister" class="space-y-6" >
        <div>
            <label for="name" class="block text-sm/6 font-medium text-gray-100"> Name </label>
            <div class="mt-2">
                <input type="text" name="name" id="name" v-model="name" autocomplete="name" required class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"/>
            </div>
        </div>
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-100">Email address</label>
          <div class="mt-2">
            <input type="email" name="email" id="email" v-model="email" autocomplete="email" required="" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-100">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2 relative">
            <input :type="showPassword ? 'text' : 'password'"  name="password" id="password" v-model="password" autocomplete="current-password" required class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"/>
            <button type="button" @click="togglePassword" class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200">
              <span v-if="showPassword">🙈</span>
              <span v-else>👁️</span>
            </button>
          </div>
        </div>
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
          <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
          <p v-if="successMessage" class="text-green-500 mt-2">{{ successMessage }}</p>
        </div>
      </form>
      <p class="mt-10 text-center text-sm/6 text-gray-400">
        Not a member?
        {{ ' ' }}
        <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300">Start a 14 day free trial</a>
      </p>
    </div>
  </div>
</template>


