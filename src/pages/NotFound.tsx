import { Component } from "solid-js";
import { useLocation, A } from "@solidjs/router";

const NotFound: Component = () => {
  const location = useLocation();

  return (
    <div class="min-h-screen flex items-center justify-center px-4">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p class="text-xl text-gray-600 mb-8">
          Page "{location.pathname}" not found
        </p>
        <A 
          href="/" 
          class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go back home
        </A>
      </div>
    </div>
  );
};

export default NotFound;
