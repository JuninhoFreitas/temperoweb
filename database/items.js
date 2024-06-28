import { v4 as uuid } from 'uuid'

const items = [
	{
		category_name: 'Alimentos',
		items: [
			{
				id: 'c012eae5-f31d-4665-94de-1962b863f7e3',
				name: 'Açucar Mascavo 1kg',
			},
			{
				id: 'c4f1b76f-1f2a-4e9e-8e84-e29390af2ae2',
				name: 'Açucar Mascavo 500g',
			},
			{
				id: 'dc49c685-200c-47de-8f12-0d20ba412995',
				name: 'Anéis de Frutas 120g',
			},
			{
				id: 'ea7659df-22ef-4f37-8da1-46e07bc1b7a9',
				name: 'Aveia em Flocos Finos 250g',
			},
			{
				id: 'f3344762-12ce-40b1-9a2d-0eb3cf329135',
				name: 'Aveia em Flocos Grossos 250g',
			},
			{
				id: '8343f289-ae8e-4e12-935e-1516dd78b4ef',
				name: 'Cacau em Pó 100g',
			},
			{
				id: 'c2407faa-6f56-4454-afcb-8d5140ae4429',
				name: 'Chocoboll 220g',
			},
			{
				id: '840a99a6-b3c6-41f5-aeba-e69eaf8de0cf',
				name: 'Farelo de Aveia 250g',
			},
			{
				id: 'fd5968fc-aeca-4182-9bd9-ffa49f9c18b8',
				name: 'Farinha de Aveia 250g',
			},
			{
				id: 'da0a7790-c7f3-467e-ab71-9caba25aafb3',
				name: 'Farinha de Arroz Branca 500g',
			},
			{
				id: '5c386e15-7597-457e-906a-1b2d7fd0cd7b',
				name: 'Farinha de Banana Verde 100g',
			},
			{
				id: '85269533-c9d7-45c4-bc92-959fd99ede45',
				name: 'Farinha de Berinjela 100g',
			},
			{
				id: 'b4ded35f-8b70-4cf6-9ccb-b88b08f93550',
				name: 'Farinha de Centeio 500g',
			},
			{
				id: '5a85a6c7-b404-42cf-9fd4-a7aebf616004',
				name: 'Farinha de Linhaça Dourada 220g',
			},
			{
				id: '332c125e-6574-481c-8f5c-31e604159271',
				name: 'Farinha de Linhaça Marrom 250g',
			},
			{
				id: '732b3696-10a8-4dbe-a0bf-39fa1d2fe732',
				name: 'Farinha de Maracujá 250g',
			},
			{
				id: '49385870-4afd-439b-983b-4bb5bec6fec8',
				name: 'Farinha de Soja 250g',
			},
			{
				id: 'd1becb63-d805-48fe-b6e5-1c41a0a402a8',
				name: 'Farinha de Trigo Integral 500g',
			},
			{
				id: 'd4cd1c26-19bf-44bd-941d-c0eb5faacc19',
				name: 'Flocos de Arroz 150g',
			},
			{
				id: '044b3086-d21a-4703-ace5-e179ddd1a31b',
				name: 'Flocos de Milho com Açucar 150g',
			},
			{
				id: '9dd1e55a-17e0-4f9a-acfa-6d10406e1bec',
				name: 'Flocos de Milho Natural 150g',
			},
			{
				id: '59e5b2d7-b859-41c0-b436-2e01da008076',
				name: 'Gergelim Descascado',
			},
			{
				id: 'a63b8333-cafa-4907-94e0-27a4b8221585',
				name: 'Gérmen de Trigo 250g',
			},
			{
				id: '5b0fde28-2fe8-437e-9c6f-dbb451eb8601',
				name: 'Granola com Adoçante Diet 1kg',
			},
			{
				id: 'da754f4f-f0d3-4873-b49c-bfc48ec56c79',
				name: 'Granola com Adoçante Diet 250g',
			},
			{
				id: '9aab7de9-0b78-47bb-90d9-752c656d9172',
				name: 'Granola com Canela 250g',
			},
			{
				id: '232b5297-eb50-416f-bd1e-53ad119b7743',
				name: 'Granola com Côco 1kg',
			},
			{
				id: 'd1ad9ddc-4690-4338-a929-3bd93f564ef7',
				name: 'Granola com Côco 250g',
			},
			{
				id: 'e7b140e9-0269-40c3-99f3-1919a5cd63c8',
				name: 'Granola Natural Light 1kg',
			},
			{
				id: 'bceccc53-5fa0-4758-9253-9938c99d46f8',
				name: 'Granola Natural Light 250g',
			},
			{
				id: '5698137d-89f2-4013-8b55-520b5d91abde',
				name: 'Granola Docemel 1kg',
			},
			{
				id: '9e408ea9-10ee-4cee-acee-efc36b3c98f6',
				name: 'Granola Docemel 250g',
			},
			{
				id: '49501743-46ea-4bfb-86d2-dd20d4dae813',
				name: 'Granola Tradicional 1kg',
			},
			{
				id: '75325f19-f092-4ec8-b7ee-13b254cbfd2b',
				name: 'Granola Tradicional 250g',
			},
			{
				id: '52f1ac4f-7f35-41f1-9429-a76313b63ca7',
				name: 'Proteína de Soja Escura 250g',
			},
			{
				id: '14278688-4daf-4b7f-98df-c77bccb759d4',
				name: 'Proteína de Soja Graúda 250g',
			},
			{
				id: 'd577f02c-8d28-4636-97a4-ee3103941a6b',
				name: 'Proteína de Soja Miúda Clara 250g',
			},
			{
				id: 'cd72ba2d-ce8d-48a5-93f5-c3b58a1a23b8',
				name: 'Ameixa Preta sem Caroço 100g',
			},
			{
				id: 'ce2ff95e-0cce-479b-a4c8-21216f091c8f',
				name: 'Ameixa Preta com Caroço 100g',
			},
			{
				id: '91076fe4-25ce-44f6-938d-4a7352d34c45',
				name: 'Ameixa sem Caroço POTE',
			},
			{
				id: '212f1eb2-25c9-4ec6-9c5b-b306ef4e758f',
				name: 'Ameixa com Caroço POTE',
			},
			{
				id: '9db76221-30f9-4958-9530-8ba8c287f2fa',
				name: 'Frutas Cristalizadas Sachê',
			},
			{
				id: '38269689-49fe-48e6-9a51-5a06f0814370',
				name: 'Frutas Cristalizadas POTE',
			},
			{
				id: 'b84c0859-cf59-4d49-a7a0-8c6be51c0b40',
				name: 'Tag Ameixa Preta sem Caroço',
			},
			{
				id: 'b80d9998-bfba-4921-80a4-8e8c17f3ba4b',
				name: 'Tag Ameixa Preta com Caroço',
			},
			{
				id: 'bdca69db-c2c7-4e22-8fa9-4c3211e6f396',
				name: 'Tag Uva Passa Preta',
			},
			{
				id: '9e799be7-edc6-4500-9f06-43ff289bd18e',
				name: 'Uva Passa Preta Sachê',
			},
			{
				id: '8bdb4885-2f1f-4eaa-ac24-92edefb17751',
				name: 'Uva Passa Branca Sachê',
			},
			{
				id: 'c5e402fb-c9db-4cd2-93b9-81f69cacebf8',
				name: 'Uva Passa Preta POTE',
			},
			{
				id: 'dc86e521-6fdb-41cf-80b6-207e4b8a85af',
				name: 'Uva Passa Branca POTE',
			},
			{
				id: '5b988637-becd-41d9-9506-bc1a3fdec966',
				name: 'Côco Seco Ralado Grosso 100g',
			},
			{
				id: '090fb42e-fdd1-4d21-9632-1a24bbd65679',
				name: 'Côco Seco Ralado Fino 100g',
			},
			{
				id: 'a498ec40-76f7-4df6-8110-00b9382df120',
				name: 'Côco Seco Ralado Adoçado 100g',
			},
			{
				id: '6baff1b9-afec-44b4-b879-d1da0eb1ee1a',
				name: 'Semente de Chia 100g',
			},
			{
				id: '9bab632f-7503-4f09-9a12-91a97cf2efb6',
				name: 'Quinoa em Flocos 100g',
			},
			{
				id: 'e3cccc7c-7e99-44f2-8c9d-f6c325fe72f7',
				name: 'Quinoa em Grãos 100g',
			},
			{
				id: '58bb0625-2b84-40b9-a59a-224b49eec1a9',
				name: 'Levedo de Cerveja',
			},
			{
				id: '20fef073-6bcc-4ee2-bfea-0552155930c6',
				name: 'Semente de Girassol 100g',
			},
			{
				id: '02d3d5e5-3ffe-4443-bc46-d502aa291e24',
				name: 'Semente de Linhaça Dourada 200g',
			},
			{
				id: '3f55572e-b3bd-4098-857d-26fc254a159c',
				name: 'Semente de Linhaça Marrom 250g',
			},
			{
				id: 'c3a037b9-1249-4861-b590-b070d853f410',
				name: 'Soja em Grão 500g',
			},
			{
				id: '5fb5857a-c361-4e28-bdf0-ea7082941a1e',
				name: 'Trigo em Grão 500g',
			},
			{
				id: '3f081565-205c-443b-98bd-4faaf176b6d0',
				name: 'Açucar de Baunilha 80g',
			},
			{
				id: '5a24d944-26fa-4ee6-97d0-6221251ae547',
				name: 'Açucar Colorido Vermelho',
			},
			{
				id: 'fb82d538-ce4d-45cc-a79b-43e6e8106fff',
				name: 'Açucar Colorido Rosa',
			},
			{
				id: 'e37b1faf-4d9c-4c24-9e6a-804aef81965e',
				name: 'Açucar Colorido Verde',
			},
			{
				id: 'a93d2461-7761-42bb-be9b-b7ac9e7d13dc',
				name: 'Açucar Colorido Azul',
			},
			{
				id: 'a7e07ed8-2487-447a-9b3d-8a82881fc8c2',
				name: 'Açucar Colorido Amarelo',
			},
			{
				id: '7f47508f-9564-4056-a223-2a1c77721d69',
				name: 'Confeito Miçanga Colorido',
			},
			{
				id: '421c56ea-1d74-4d4f-877c-11fd8dbb14bc',
				name: 'Confeito Granulado Colorido',
			},
			{
				id: '891fc706-eb79-43e5-8661-ffa6dbe19331',
				name: 'Chocolate Granulado 80g',
			},
			{
				id: 'cbe72d8e-fcee-4f5e-afbf-013a90f18d7d',
				name: 'Chocolate Granulado 200g',
			},
			{
				id: '9ecd5680-ef8d-4271-9037-091f62b3af12',
				name: 'Chocolate Granulado Misto 80g',
			},
			{
				id: '0ccdaccb-ddbd-44d0-a5f9-5c74ee9809e3',
				name: 'Chocolate Granulado Misto 200g',
			},
			{
				id: '94edba67-14b9-4409-928a-fe23b215aaf5',
				name: 'Sal Amoníaco',
			},
			{
				id: 'f71f092f-9509-4307-9a2c-084faf41abc9',
				name: 'Colorau 500g',
			},
			{
				id: '01fc3f66-6178-4f31-9c51-d041e263a1d4',
				name: 'Colorau 90g',
			},
			{
				id: 'a9f23692-104d-41b4-aa5d-58038b2ec403',
				name: 'Bicarbonato de Sódio 500g',
			},
			{
				id: '3ce6a51b-b2ba-46f2-8168-17073618986d',
				name: 'Bicarbnato de Sódio 250g',
			},
			{
				id: 'b241285e-e97f-477f-878f-e69742d59109',
				name: 'Bicarbonato de Sódio 90g',
			},
		],
	},
	{
		category_name: 'Molhos',
		items: [
			{
				id: '985c37f0-0c88-4bb1-ab9a-b14318db65d5',
				name: 'Alho com Ervas Finas 190g pote',
			},
			{
				id: '83fcca1c-2059-446e-8236-422f412071c8',
				name: 'Alho com Orégano 190g pote',
			},
			{
				id: '48c13e66-d59a-4925-8d5f-37810e6ca092',
				name: 'Alho, Cebola e Salsa 190g pote',
			},
			{
				id: '838d97e0-2415-4e06-9641-4452070dddc4',
				name: 'Alho Picado 190g',
			},
			{
				id: '48800001-1069-4c8c-abd7-c86a90c85237',
				name: 'Alho Picado 1kg',
			},
			{
				id: 'a53a91bc-d6e1-4b9a-a292-8848ef77fa9d',
				name: 'Alho em Pasta 190g',
			},
			{
				id: '72531ea4-9195-43ba-bc03-0801bc7f8a3b',
				name: 'Alho em Pasta 1kg',
			},
			{
				id: 'f4bd3cfd-e585-4a75-9af5-07286d7a3fd7',
				name: 'Alho, Salsa e Páprica 190g pote',
			},
			{
				id: '4b2a780e-df64-476a-9bbb-93e07fbe722b',
				name: 'Molho de Alho 150ml',
			},
			{
				id: '53fc6bee-ecf7-43e6-a61f-7cea76d4b414',
				name: 'Molho de Alho 900ml',
			},
			{
				id: '1b5e7911-d087-443c-a53d-f159391bcdfb',
				name: 'Molho de Pimenta 150ml',
			},
			{
				id: '5caa0ced-585a-4762-99d8-1756bacdf7ed',
				name: 'Molho de Pimenta 900ml',
			},
			{
				id: 'ab5e427f-c804-413b-9bc0-7a7646a25525',
				name: 'Molho de Pimenta Malagueta 70g',
			},
			{
				id: 'fd99a835-60cc-4881-90d4-4e29aca3efdb',
				name: 'Molho de Cebola Defumada 150ml',
			},
			{
				id: '9ea75551-bede-4110-89e6-9e6afc48588a',
				name: 'Molho de Cebola Defumada 900ml',
			},
			{
				id: 'f475a9b0-7600-49e6-945a-c2eddbabe5f5',
				name: 'Molho Inglês 150ml',
			},
			{
				id: 'c633325e-3062-464c-a2ff-ec753db6a1b8',
				name: 'Molho Inglês 900ml',
			},
			{
				id: 'c0216b4c-cc48-4af2-92b2-bd73d0dddb35',
				name: 'Molho Shoyu 150ml',
			},
			{
				id: '00b1b901-82f8-4e5a-83d9-6fb6fec470a7',
				name: 'Molho Shoyu 900ml',
			},
			{
				id: 'e08fd497-3e63-4a71-9927-6b5ee74ee3bf',
				name: 'Molho de Pimenta Defumada 150ml',
			},
		],
	},
	{
		category_name: 'Sais',
		items: [
			{
				id: 'c753beb2-2707-4bf2-89d3-115922b42113',
				name: 'Sal Marinho 1kg',
			},
			{
				id: 'b9105433-1e83-4a91-9c98-e505250ccfc8',
				name: 'Sal Completo sem Pimenta 500g',
			},
			{
				id: 'd30bbb1d-02a5-4b00-b20a-44139a55ef1e',
				name: 'Sal Completo com Pimenta 500g',
			},
			{
				id: '227e8e78-090f-4ff5-94fe-a3d1086c4607',
				name: 'Sal para Churrasco sem Pimenta 1kg',
			},
			{
				id: '8982d992-1ddb-416d-93cb-1d01913f1ee4',
				name: 'Sal para Churrasco com Pimenta 1kg',
			},
			{
				id: 'd0ef8fb2-32c9-4152-a1a3-c85b86da2907',
				name: 'Sal para Churrasco 500g',
			},
			{
				id: 'ed3a50f5-d468-439d-b37f-5512799451b8',
				name: 'Sal para Galeto sem Pimenta 1kg',
			},
			{
				id: 'abc4359e-3d7f-4e10-8991-1da981889570',
				name: 'Sal para Galeto sem Pimenta 500g',
			},
			{
				id: '79bdaa63-057c-44ce-aa0f-89fad1bc462e',
				name: 'Sal para Galeto com Pimenta 500g',
			},
			{
				id: '19866c6f-e6c5-4c26-a4e4-24a744d95a04',
				name: 'Tempero Alho e Sal 1,01kg',
			},
			{
				id: 'cdb30b13-60bc-44cc-9665-6627f4ccd272',
				name: 'Tempero Completo com Pimenta 1,01kg',
			},
			{
				id: 'f97c0d9a-cc0f-4d4f-a43d-1d56fdcbd6f7',
				name: 'Tempero Completo sem Pimenta 1,01kg',
			},
			{
				id: '0ec9b920-11b5-4986-a4d7-518606673c93',
				name: 'Tempero para Aves 1,01kg',
			},
			{
				id: '74facf8b-a844-4d90-8553-bcb5d6fbea3b',
				name: 'Tempero Alho e Sal 250g',
			},
			{
				id: '1a2fadc7-e788-4e73-8858-5a11cfc33d4e',
				name: 'Tempero Completo com Pimenta 250g',
			},
			{
				id: 'c1d67330-aded-44f4-ab48-15dc189f469e',
				name: 'Tempero Completo sem Pimenta 250g',
			},
			{
				id: 'af072d28-8a44-4970-a796-1a203b91aaa0',
				name: 'Tempero para Aves 250g',
			},
			{
				id: '5f629873-5a20-421c-8710-1671c69385e6',
				name: 'Parrilla Alho 600g',
			},
			{
				id: '4c3e3719-c730-466d-9262-980f1d0e99f3',
				name: 'Parrilla Chimichurri 600g',
			},
			{
				id: '630e8bf1-fd4e-44a8-8b4f-b9ea4940840a',
				name: 'Parrilha Cordeiro 600g',
			},
			{
				id: '6a706cd8-f03b-4b5a-9dd1-36e66b4f0606',
				name: 'Parrilla Lemon Pepper 600g',
			},
			{
				id: '793e1f4b-3d41-4698-beae-66c49d0907e5',
				name: 'Parrilla Tradicional 600g',
			},
		],
	},
	{
		category_name: 'Tags',
		items: [
			{
				id: '451b3d15-cc8d-4ead-9e29-a5f1a6743840',
				name: 'Tag Açafrão',
			},
			{
				id: '99c0e291-8f9b-4b7d-b6f5-630345521068',
				name: 'Tag Adobo',
			},
			{
				id: '4ff49158-0c67-482a-b054-fb887e5d3a04',
				name: 'Tag Alecrim',
			},
			{
				id: '98dd5b88-67da-417d-b23c-b1cd6df54811',
				name: 'Tag Alho, Cebola e Salsa',
			},
			{
				id: '4b673d04-636b-4271-ac54-6bb0fee9d0c5',
				name: 'Tag Alho, Cebola e Salsa Defumado',
			},
			{
				id: '8a8ad227-0897-4e25-8da7-ce0fce9a71d2',
				name: 'Tag Alho Granulado',
			},
			{
				id: '06b87671-31c7-4f05-b486-f39dfa8271c3',
				name: 'Tag Amaciante de Carne',
			},
			{
				id: 'e2a78f9c-5e36-440b-8e68-ead93595c9b5',
				name: 'Tag Anis Estrelado',
			},
			{
				id: '4b874871-32ff-4105-b138-6b72c5b3bd86',
				name: 'Tag Boldo',
			},
			{
				id: '10cbcf46-e1f3-4828-b526-cf85735c166e',
				name: 'Tag Camomila',
			},
			{
				id: '5230929c-e59e-43d0-abf5-3a4a063002e2',
				name: 'Tag Canela em Pó',
			},
			{
				id: '81592792-738d-4013-89f4-786f4f2bf088',
				name: 'Tag Canela em Casca',
			},
			{
				id: '835e25b3-cfd4-4e4d-9266-d19e1efdfc48',
				name: 'Tag Capim Cidro',
			},
			{
				id: 'ee0bffb9-7c9e-4f14-8040-d087ac953a90',
				name: 'Tag Carqueja',
			},
			{
				id: '90e9e4fb-5aff-4fce-88c5-f03020056b8a',
				name: 'Tag Cavalinha',
			},
			{
				id: 'afee4288-4369-49a7-b399-d8fe92d8693a',
				name: 'Tag Cebola Granulada',
			},
			{
				id: '9306e319-c67e-43a3-aa68-db1bd3a79542',
				name: 'Tag Chá Verde',
			},
			{
				id: 'f81f11f1-77a1-421a-ad4e-e8259a2cb3b6',
				name: 'Tag Chimichurri',
			},
			{
				id: 'a8635181-c64f-4a48-a3d5-8a6370bf60fc',
				name: 'Tag Chimichurri Defumado',
			},
			{
				id: '4b1c5335-31fe-4c96-a1c6-eb396c46e312',
				name: 'Tag Chimichurri sem Pimenta',
			},
			{
				id: 'b4fda5e0-1443-452e-a972-09fd0a72fdde',
				name: 'Tag Coentro',
			},
			{
				id: '876d977f-f4ef-458a-ba56-b28f8dff0bee',
				name: 'Tag Cominho em Pó',
			},
			{
				id: '8a8e00ab-06d8-437c-826a-15f4ea473858',
				name: 'Tag Composto para Chimarrao',
			},
			{
				id: '8e869635-48e2-4bbb-b3d5-f6b29aa40a0b',
				name: 'Tag Cravo',
			},
			{
				id: 'e9a690a6-b032-4278-9d83-25ae993035db',
				name: 'Tag Curry',
			},
			{
				id: '7e2d551f-c2ca-477d-a374-d0743dd47f67',
				name: 'Tag Endro',
			},
			{
				id: '99b7265d-b255-4333-b774-67dd9831f9dc',
				name: 'Tag Erva Doce',
			},
			{
				id: '986be9be-ab5c-4a3e-b021-b39515abcdfc',
				name: 'Tag Ervas Finas',
			},
			{
				id: 'a8d31c0e-c32d-4020-bfd7-1dc1ef1547c7',
				name: 'Tag Funcho',
			},
			{
				id: 'b65c9909-45d5-4c2e-941e-7804ce9d74a1',
				name: 'Tag Gengibre Raíz',
			},
			{
				id: '684ded15-b58a-4fa5-b607-fd5a1b482923',
				name: 'Tag Gengibre em Pó',
			},
			{
				id: 'fdd0105f-b57a-475d-b553-660bc444a45e',
				name: 'Tag Guaco',
			},
			{
				id: '7f79bebd-c163-4f7b-9ca9-1f83211edbb9',
				name: 'Tag Hibisco',
			},
			{
				id: 'afc58470-639e-4c2b-aa03-e47b769d90e6',
				name: 'Tag Hortelã',
			},
			{
				id: '93ca5e6e-2f4e-49e4-a9fd-7b29afa1d30c',
				name: 'Tag Lemon Pepper',
			},
			{
				id: '4d8bc9db-e313-4fcf-a4fc-e05064cf6406',
				name: 'Tag Limão e Ervas Finas',
			},
			{
				id: '4521e4fe-1a96-4aa8-953e-aff6e9d06179',
				name: 'Tag Louro',
			},
			{
				id: 'b3356809-a503-4dd0-adb7-a790404f7a92',
				name: 'Tag Macela',
			},
			{
				id: '177c8041-209e-4034-810d-7d9e2aabdad7',
				name: 'Tag Malva',
			},
			{
				id: '3971e7fd-a34c-4450-aa20-97d2e37fdf4a',
				name: 'Tag Manjericão',
			},
			{
				id: '3f472892-780a-47f1-b849-d97573c3daa3',
				name: 'Tag Manjerona',
			},
			{
				id: 'd186aa0b-09c1-4959-84dc-75f3c808f044',
				name: 'Tag Melissa',
			},
			{
				id: '500f3e7d-b040-4183-912a-2381c56b87fc',
				name: 'Tag Noz Moscada Moida',
			},
			{
				id: 'db8481dc-f874-4566-913e-31ac311012e7',
				name: 'Tag Noz Moscada em Grão',
			},
			{
				id: 'b295f7d7-cd95-4681-a827-c6b52d79041a',
				name: 'Tag Orégano',
			},
			{
				id: 'bdb84cab-d19a-40a0-b050-90ea1eb3d0c3',
				name: 'Tag Orégano 40g',
			},
			{
				id: '29aa5609-4378-4632-a0fa-4ae08e493495',
				name: 'Tag Orégano 50g',
			},
			{
				id: 'fd28141e-df82-42da-ac1a-79f0f0e70851',
				name: 'Tag Páprica Defumada',
			},
			{
				id: 'cb0dba79-2039-46ce-b174-537be7979a5a',
				name: 'Tag Páprica Doce',
			},
			{
				id: 'b9ca62b4-7d65-4284-b50e-5c81eb259a28',
				name: 'Tag Páprica Picante',
			},
			{
				id: '4110b5c3-47d7-45e6-bed0-7e73c1c75184',
				name: 'Tag Pimenta Calabresa',
			},
			{
				id: '903431e5-2608-4b1e-ac2f-0bed61eef222',
				name: 'Tag Pimenta Preta em Grão',
			},
			{
				id: '4ae20258-fa4c-4c82-91fe-5a8411c6fb1b',
				name: 'Tag Pimenta Preta em Pó',
			},
			{
				id: '831a7078-f92f-4b5e-b606-fa54ff6d2e96',
				name: 'Tag Pimenta Branca em Pó',
			},
			{
				id: 'cca3ec11-d634-43e9-bf6a-4655360616dc',
				name: 'Tag Salsa',
			},
			{
				id: '51487ef6-c3b7-4a92-8e07-424d29fae9b3',
				name: 'Tag Sálvia',
			},
			{
				id: 'b3caf460-9a66-44ba-b9ce-6499ad8296b2',
				name: 'Tag Tempera Tudo',
			},
			{
				id: '978d690b-c996-4d6f-9a50-bd0db3592598',
				name: 'Tag Tempero Baiano',
			},
			{
				id: '3dd11c87-f6ab-4c12-84f4-850c00ead605',
				name: 'Tag Tempero do Chefe',
			},
			{
				id: 'c06a8474-93f4-4745-9e9a-747ae680803a',
				name: 'Tag Tempero Gaúcho',
			},
			{
				id: '1b64bff7-1514-4f3a-a9bf-0095da6166f4',
				name: 'Tag Tempero para Grelhados',
			},
			{
				id: '9559b7f1-146c-4818-904a-95f3b61cee28',
				name: 'Tag Tempero à Portuguesa',
			},
			{
				id: '26d7dc14-5b1c-4b35-b23b-3ea44c040305',
				name: 'Tag Tempero à Portuguesa Picante',
			},
			{
				id: '79dbdafa-1a65-4f41-a2a7-e9f837dd6ce3',
				name: 'Tag Tomilho',
			},
			{
				id: '7549b190-72c2-487e-9b32-e994588ce3b2',
				name: 'Tag Vinagrete',
			},
		],
	},
]

export default items
