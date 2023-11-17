<template>
  <div>
    <div class="container relative">
      <h3 class="text-2xl font-bold text-left py-2">User Profile</h3>
      <div class="overflow-x-auto relative sm:rounded-lg">
        <table
          class="w-full text-lg text-left text-gray-600"
        >
          <!-- <thead>
            <tr>
            <th class="py-2 px-4 border-b">Attribute</th>
            <th class="py-2 px-4 border-b">Value</th>
            </tr>
        </thead> -->
          <tbody>
            <tr class="bg-white border-b border-gray-700">
              <td class="py-4 px-6 border-b font-bold">User Name</td>
              <td class="py-4 px-6 border-b">{{ userName }}</td>
            </tr>
            <tr class="bg-white border-b border-gray-700">
              <td class="py-4 px-6 border-b font-bold">Phone Number</td>
              <td class="py-4 px-6 border-b">{{ phoneNumber }}</td>
            </tr>
            <tr class="bg-white border-b border-gray-700">
              <td class="py-4 px-6 border-b font-bold">Address</td>
              <td class="py-4 px-6 border-b">{{ address }}</td>
            </tr>
            <tr class="bg-white border-b border-gray-700">
              <td class="py-4 px-6 border-b font-bold">Score</td>
              <td class="py-4 px-6 border-b">{{ score }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "John Doe",
      phoneNumber: "123-456-7890",
      address: "123 Main St, City, Country",
      score: 100,
    };
  },
};
</script>
