<template>
  <div>
    <h3 class="text-2xl font-bold text-left py-2">Admin Dashboard</h3>
    <div class="container mx-auto">
      <div class="grid grid-cols-3 gap-4">
        <!-- Number of Registrations -->
        <div class="bg-blue-200 p-4 rounded-md">
          <h2 class="text-lg font-bold mb-2">Registrations</h2>
          <p class="text-3xl">{{ numRegistrations }}</p>
        </div>

        <!-- Number of Customers -->
        <div class="bg-green-200 p-4 rounded-md">
          <h2 class="text-lg font-bold mb-2">Customers</h2>
          <p class="text-3xl">{{ numCustomers }}</p>
        </div>

        <!-- Number of Purchases -->
        <div class="bg-yellow-200 p-4 rounded-md">
          <h2 class="text-lg font-bold mb-2">Purchases</h2>
          <p class="text-3xl">{{ numPurchases }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numRegistrations: 100, // Replace with actual data
      numCustomers: 50, // Replace with actual data
      numPurchases: 200, // Replace with actual data
    };
  },
};
</script>
