<template>
  <!-- Estrutura principal da página, usando classes do Tailwind para estilização responsiva -->
  <div class="flex lg:flex-row lg:justify-center lg:h-[90vh] lg:my-8 sm:my-0 sm:h-[100vh] xss:flex-col xss:gap-5">
    <!-- Painel da lista de itens -->
    <div class=" flex w-[50vh] h-[85vh] shadow-2xl sm:h-[100vh] sm:w-[100vh] xss:w-[100vw]">
      <!-- Componente Panel com cabeçalho "Items" e rolagem -->
      <Panel header="Items" class="overflow-scroll flex flex-col w-[50vh] sm:w-[100vh]" id="listOfItemsPanel">
        <!-- Loop para exibir categorias de itens -->
        <div v-for="category in listofitems" :key="category.id">
          <!-- Exibe o nome da categoria, exceto se for "Customizado" -->
          <h2 class="text-xl dark:text-white text-black">
            {{ category.category_name == 'Customizado' ? '' : category.category_name }}
          </h2>

          <!-- Loop para exibir itens dentro de cada categoria -->
          <div v-for="item in category.items" @click="addItem(item, category.category_name)" :key="item.id"
            class="mt-5 hover:bg-gray-100 p-2 cursor-pointer bg-white shadow-sm ">
            <span>{{ item.name }}</span>
          </div>
        </div>
      </Panel>
    </div>
    <div>
      <!-- Painel para exibir itens faltantes -->
      <div class="overflow-scroll h-[93vh] sm:h-[100vh]">
        <Panel id="missingItemsModal" v-model:visible="showMissingItemsModal">
          <!-- Loop para exibir categorias de itens faltantes -->
          <div v-for="category in listofitems" :key="category.id">
            <!-- Exibe o nome da categoria se houver itens faltantes -->
            <h2 class="text-xl dark:text-white text-black">
              {{ missingItems.filter(i => i.category === category.category_name).length > 0 ? category.category_name : '' }}
            </h2>
            <!-- Loop para exibir itens faltantes dentro de cada categoria -->
            <div v-for="item in missingItems.filter(i => i.category === category.category_name)" :key="item.id" 
              class="shadow-sm backdrop-blur-none mb-2 shadow-smp-2 flex-row">
              <div class="flex flex-row justify-between">
                <span class="sm:text-sm sm:text-balance text-slate-950 xss:text-sm xss:text-wrap">{{ item.name }} </span>

                <!-- Botões para alterar a quantidade de itens -->
                <div class="flex flex-row">
                  <Button class="bg-red-600 w-8 h-8 text-nowrap text-base ml-1 sm:w-4 sm:h-4" @click="changeItemQuantity(item.id, -6)"
                    label="- 6" />
                  <Button class="bg-red-600 w-8 h-8 text-nowrap text-base ml-1 sm:w-4 sm:h-4" @click="changeItemQuantity(item.id, -1)"
                    label="- 1" />
                  <InputNumber inputClass="w-12 mx-auto text-center p-0" class="ml-2" v-model="item.quantity" />
                  <Button class="bg-lime-400 w-8 h-8 text-nowrap text-base ml-2 sm:w-4 sm:h-4" @click="changeItemQuantity(item.id, 1)"
                    label="+ 1" />
                  <Button class="bg-lime-400 w-8 h-8 text-nowrap text-base ml-2 sm:w-4 sm:h-4" @click="changeItemQuantity(item.id, 6)"
                    label="+ 6" />
                  <Button icon="pi pi-trash" class="ml-2 w-8 h-8 text-nowrap text-base bg-black sm:w-4 sm:h-4"
                    @click="removeItem(item.id)" />
                </div>
              </div>
            </div>
          </div>
          <!-- Campo para adicionar itens customizados -->
          <div class="flex flex-col gap-2">
            <div>
              <InputText v-model="newItemName" placeholder="Adicione um item customizado" class="w-[70%]" />
              <Button label="Add" @click="addItemByName(newItemName)" class="w-[20%] ml-3" />
            </div>
            <!-- Campo de observações -->
            <Textarea v-model="newItemObservation" placeholder="Observaçoes" />
            <!-- Botão para enviar as informações -->
            <Button label="Enviar" @click="submitMissingItems" class="w-[70%] bg-blue-600 ml-auto mr-auto" />
          </div>
        </Panel>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue' // Importa a função ref do Vue para criar referências reativas
//TODO, separra em modulos
import items from '~/database/items.js' // Importa os itens de um arquivo JSON

// Cria uma lista de itens, incluindo uma categoria customizada
const listofitems = [...items, { category_name: 'Customizado', items: [] }]
const showMissingItemsModal = ref(false) // Controle de visibilidade do modal de itens faltantes
const missingItems = ref([]) // Lista de itens faltantes
const newItemName = ref('') // Nome do novo item customizado
const newItemObservation = ref('') // Observação do novo item

// Função para adicionar um item à lista de itens faltantes
const addItem = (item, category) => {
  if (!showMissingItemsModal.value) {
    showMissingItemsModal.value = true // Abre o modal se estiver fechado
  }
  const existingItem = missingItems.value.find((i) => i.id === item.id)
  if (existingItem) {
    existingItem.quantity += 1 // Incrementa a quantidade se o item já estiver na lista
  } else {
    missingItems.value.push({ ...item, quantity: 1, category }) // Adiciona o item à lista com quantidade 1
  }
  newItemName.value = '' // Limpa o campo de entrada após adicionar
}

// Função para adicionar um item customizado pelo nome
const addItemByName = (name) => {
  const item = { id: Date.now(), name, quantity: 1 } // Cria um item simplificado
  addItem(item, 'Customizado') // Adiciona o item à categoria customizada
}

// Função para alterar a quantidade de um item
const changeItemQuantity = (id, change) => {
  const item = missingItems.value.find((i) => i.id === id)
  if (item) {
    item.quantity += change
    if (item.quantity <= 0) {
      removeItem(id) // Remove o item se a quantidade for 0 ou menor
    }
  }
}

// Função para remover um item da lista de itens faltantes
const removeItem = (id) => {
  missingItems.value = missingItems.value.filter((i) => i.id !== id)
}

// Função para enviar os itens faltantes
const submitMissingItems = async () => {
  const observation = newItemObservation.value

  // Estrutura para categorizar os itens
  let categorizedItems = {
    NATURAIS: [],
    MOLHOS: [],
    SAIS: [],
    TAGS: [],
    CUSTOMIZADO: []
  }

  // Organiza os itens por categoria
  missingItems.value.forEach(item => {
    console.log(item)
    const foodName = item.name
    const itemCount = item.quantity
    const category = item.category

    // Mapeia a categoria do item para a estrutura categorizada
    const categoryMap = {
      'Alimentos': 'NATURAIS',
      'Molhos': 'MOLHOS',
      'Sais': 'SAIS',
      'Tags': 'TAGS',
      'Customizado': 'CUSTOMIZADO'
    };

    const categoryKey = categoryMap[category] || 'CUSTOMIZADO';
    categorizedItems[categoryKey].push({ name: foodName, count: itemCount });
  })

  // Ordena os itens dentro de cada categoria por nome
  Object.keys(categorizedItems).forEach(category => {
    categorizedItems[category].sort((a, b) => a.name.localeCompare(b.name))
  })

  // Constrói o conteúdo do email categorizado
  let emailContent = Object.entries(categorizedItems)
    .filter(([, items]) => items.length > 0)
    .map(([category, items]) => {
      const itemsContent = items.map(item => `${item.name}: ${item.count}`).join('\n')
      return `\n${category}:\n${itemsContent}`
    })
    .join('')

  // Adiciona observação se houver
  if (observation.trim() !== '') {
    emailContent += `\nObservação:\n${observation}`
  }

  // Cria um formulário e envia os dados
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
/* Adicione seus estilos aqui */
</style>
