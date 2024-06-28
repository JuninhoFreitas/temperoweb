<template>
  <div class="flex lg:flex-row lg:justify-center lg:h-[90vh] lg:my-8 sm:my-0 sm:h-[100vh] xss:flex-col xss:gap-5">
    <div class=" flex w-[50vh] h-[85vh] shadow-2xl sm:h-[100vh] sm:w-[100vh] xss:w-[100vw]">
      <Panel header="Items" class="overflow-scroll flex flex-col w-[50vh] sm:w-[100vh]" id="listOfItemsPanel">
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
      <div class="overflow-scroll h-[93vh] sm:h-[100vh]">
        <!-- When using in mobile, this panel should be hidden until some item is clicked,
        and then it should be displayed in a modal, and the user should be able to close it by clicking outside the modal
        -->
        <Panel id="missingItemsModal" v-model:visible="showMissingItemsModal">
          <div v-for="item in missingItems" :key="item.id" 
            class="shadow-sm backdrop-blur-none mb-2 shadow-smp-2 flex-row">
            <div class="flex flex-row justify-between">
              <span class="sm:text-sm sm:text-balance text-slate-950 xss:text-sm xss:text-wrap">{{ item.name }} </span>
              <div class="flex flex-row">
                <Button class="bg-red-600 w-8 h-8 text-nowrap text-base ml-1 sm:w-4 sm:h-4" @click="changeItemQuantity(item.id, -6)"
                  label="- 6" />
                <Button class="bg-red-600 w-8 h-8 text-nowrap text-base ml-1 sm:w-4 sm:h-4" @click="changeItemQuantity(item.id, -1)"
                  label="- 1" />
                <InputNumber inputClass="w-12 mx-auto text-center p-0" class="ml-2" v-model="item.quantity" />
                <Button class="bg-green-600 w-8 h-8 text-nowrap text-base ml-2 sm:w-4 sm:h-4" @click="changeItemQuantity(item.id, 1)"
                  label="+ 1" />
                <Button class="bg-green-600 w-8 h-8 text-nowrap text-base ml-2 sm:w-4 sm:h-4" @click="changeItemQuantity(item.id, 6)"
                  label="+ 6" />
                <Button icon="pi pi-trash" class="ml-2 w-8 h-8 text-nowrap text-base bg-black sm:w-4 sm:h-4"
                  @click="removeItem(item.id)" />
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div>
              <InputText v-model="newItemName" placeholder="Adicione um item customizado" class="w-[70%]" />
              <Button label="Add" @click="addItemByName(newItemName)" class="w-[20%] ml-3" />
            </div>
            <!-- Criar um campo de Observaçes -->
            <Textarea v-model="newItemObservation" placeholder="Observaçoes" />
            <!-- Criar um botão para Enviar as informaçes -->
            <Button label="Enviar" @click="submitMissingItems" class="w-[70%] bg-blue-600 ml-auto mr-auto" />
          </div>
        </Panel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import items from '~/database/items.js' // Importing items from a JSON file

const listofitems = items
const showMissingItemsModal = ref(false)
const missingItems = ref([])
const newItemName = ref('')
const newItemObservation = ref('')


const addItem = (item) => {
  if (!showMissingItemsModal.value) {
    showMissingItemsModal.value = true
  }
  const existingItem = missingItems.value.find((i) => i.id === item.id)
  if (existingItem) {
    existingItem.quantity += 1
  } else {
    missingItems.value.push({ ...item, quantity: 1 })
  }
  newItemName.value = '' // Clear input after adding
}

const addItemByName = (name) => {
  const item = { id: Date.now(), name, quantity: 1 } // Simplified item creation
  addItem(item)
}

const changeItemQuantity = (id, change) => {
  const item = missingItems.value.find((i) => i.id === id)
  if (item) {
    item.quantity += change
    if (item.quantity <= 0) {
      removeItem(id) // Remove item if quantity is 0 or less
    }
  }
}

const removeItem = (id) => {
  missingItems.value = missingItems.value.filter((i) => i.id !== id)
}

const submitMissingItems = async () => {
  const observation = newItemObservation.value

  let categorizedItems = {
    NATURAIS: [],
    MOLHOS: [],
    SAIS: [],
    TAGS: []
  }

  // Organizar os itens por categoria
  missingItems.value.forEach(item => {
    const foodName = item.name
    const itemCount = item.quantity

    // Determinar a categoria do item adicionado
    if (foodName.startsWith('Molho')) {
      categorizedItems.MOLHOS.push({ name: foodName, count: itemCount })
    } else if (foodName.startsWith('Sal')) {
      categorizedItems.SAIS.push({ name: foodName, count: itemCount })
    } else if (foodName.startsWith('Tag')) {
      categorizedItems.TAGS.push({ name: foodName, count: itemCount })
    } else {
      categorizedItems.NATURAIS.push({ name: foodName, count: itemCount })
    }
  })

  // Ordenar os itens dentro de cada categoria por nome
  Object.keys(categorizedItems).forEach(category => {
    categorizedItems[category].sort((a, b) => a.name.localeCompare(b.name))
  })

  // Construir o conteúdo do email categorizado
  let emailContent = ''
  ;['NATURAIS', 'MOLHOS', 'SAIS', 'TAGS'].forEach(category => {
    if (categorizedItems[category].length > 0) {
      emailContent += `\n${category}:\n`
      categorizedItems[category].forEach(item => {
        emailContent += `${item.name}: ${item.count}\n`
      })
    }
  })

  // Adicionar observação se houver
  if (observation.trim() !== '') {
    emailContent += `\nObservação:\n${observation}`
  }

  // Criar um formulário e enviar os dados
  const form = document.createElement('form')
  form.action = 'https://formspree.io/f/mvgppjvj'
  form.method = 'POST'
  form.enctype = 'multipart/form-data'

  const subjectInput = document.createElement('input')
  subjectInput.type = 'hidden'
  subjectInput.name = 'subject'
  subjectInput.value = 'Lista de Alimentos Selecionados'
  form.appendChild(subjectInput)

  const emailContentInput = document.createElement('input')
  emailContentInput.type = 'hidden'
  emailContentInput.name = 'emailContent'
  emailContentInput.value = emailContent
  form.appendChild(emailContentInput)

  const observationInput = document.createElement('input')
  observationInput.type = 'hidden'
  observationInput.name = 'observation'
  observationInput.value = observation
  form.appendChild(observationInput)

  document.body.appendChild(form)
  form.submit()
  missingItems.value = []
  newItemObservation.value = ''
}
</script>

<style>
/* Add your styles here */
</style>