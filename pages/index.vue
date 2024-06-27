<template>
  <div class="flex flex-row justify-center h-[90vh] my-8">
    <div class=" flex w-[50vh] h-[93vh]">
      <Panel header="Items" class="overflow-scroll flex flex-col w-[50vh] " id="listOfItemsPanel">
        <div v-for="category in listofitems" :key="category.id">
          <h2 class="text-xl dark:text-white text-black">
            {{ category.category_name }}
          </h2>

          <div v-for="item in category.items" @click="addItem(item)" :key="item.id"
            class="mt-5 hover:bg-gray-100 p-2 cursor-pointer bg-white shadow-sm ">
            <span>{{ item.name }}</span>
          </div>
        </div>
      </Panel>
    </div>
    <div>
      <div class="overflow-scroll h-[93vh]">

        <Panel id="missingItemsModal" v-model:visible="showMissingItemsModal" class="">
          <div v-for="item in missingItems" :key="item.id" class="shadow-sm backdrop-blur-none mb-2 shadow-smp-2">
            <span>{{ item.name }} </span>
            <Button icon="pi pi-minus w-3 h-3" class="bg-red-600 w-3 h-3" @click="changeItemQuantity(item.id, -6)" label="6" />
            <Button icon="pi pi-minus" class="bg-red-600" @click="changeItemQuantity(item.id, -1)" label="1" />
            <Tag severity="success">{{item.quantity}}</Tag>
            <Button icon="pi pi-plus" class="bg-green-600 ml-1 mr-1" @click="changeItemQuantity(item.id, 1)" label="1" />
            <Button icon="pi pi-plus" class="bg-green-600" @click="changeItemQuantity(item.id, 6)" label="6" />

            <Button icon="pi pi-trash ml-2" @click="removeItem(item.id)" />
          </div>
          <InputText v-model="newItemName" placeholder="Add item by name" />
          <Button label="Add" @click="addItemByName(newItemName)" />
        </Panel>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import items from "~/database/items.js"; // Importing items from a JSON file

const listofitems = items;
const showMissingItemsModal = ref(false);
const missingItems = ref([]);
const newItemName = ref("");

const addItem = (item) => {
  if (!showMissingItemsModal.value) {
    showMissingItemsModal.value = true;
  }
  const existingItem = missingItems.value.find((i) => i.id === item.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    missingItems.value.push({ ...item, quantity: 1 });
  }
  newItemName.value = ""; // Clear input after adding
};

const addItemByName = (name) => {
  const item = { id: Date.now(), name, quantity: 1 }; // Simplified item creation
  addItem(item);
};

const changeItemQuantity = (id, change) => {
  const item = missingItems.value.find((i) => i.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeItem(id); // Remove item if quantity is 0 or less
    }
  }
};

const removeItem = (id) => {
  missingItems.value = missingItems.value.filter((i) => i.id !== id);
};

const submitMissingItems = async () => {
  try {
    await $fetch("YOUR_ENDPOINT_URL", missingItems.value);
    missingItems.value = []; // Clear list after submission
  } catch (error) {
    console.error("Failed to submit missing items:", error);
  }
};
</script>

<style>
/* Add your styles here */
</style>
