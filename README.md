# Desafio de Front-End LaPag

## Introdução

Bem vindo ao desafio de front-end da LaPag. Se você está aqui, é porque acreditamos que tem o potencial para entrar para nosso time. Para isso, é necessário primeiro verificar as suas habilidades com front-end. Mais especificamente, queremos entender a sua forma de pensar e resolver problemas. Na LaPag, não é raro deparar-se com imprevistos e situações inusitadas. Por isso, é muito importante para nós detectar se você consegue administrar bem o seu tempo e suas decisões para entregar o melhor trabalho possível.

## Sobre o desafio

Dentro dos estabelecimentos de beleza, existe um requisito em comum: ter uma boa agenda. É por lá que os profissionais e proprietários conseguem acompanhar o seu dia. Muitos dizem que "a agenda é o coração de qualquer negócio". Grande parte do mercado utiliza uma agenda de papel devido a praticidade e agilidade. Na LaPag, somos inconformados com isso e temos uma vontade enorme de profissionalizar esses estabelecimentos. Uma das maneiras de se fazer isso é desenvolvendo uma boa agenda, que funcione para vários tipos de negócios diferentes e que ofereça uma experiência tão natural quanto o papel.

Se você quer entrar para nosso time, é muito importante que esteja disposto a arregaçar as mangas e fazer um bom produto. Por isso, seu desafio para esta fase será reproduzir a nossa agenda. Não se preocupe, sabemos que haverão algumas simplificações.

## Requisitos Obrigatórios

Desafio precisa ser resolvido em React.JS

**Funcionalidades obrigatórias:**

Agenda:

- mostrar todos os agendamentos
- agendar para qualquer profissional
- poder excluir um agendamento

Formulário de agendamento:

- pesquisar clientes
- habilitar apenas serviços prestados pelo profissional selecionado
- lidar com a duração do agendamento

## Informações importantes

1.  Estamos avaliando sua capacidade em resolver um problema de front-end relativamente complexo. Sinta-se livre para projetar a arquitetura que achar mais adequada e correta. Quer utilizar alguma biblioteca/dependência? Fique a vontade!

2.  Existe dois arquivos embutidos na pasta `src` que merecem sua atenção.

    `apiMocks.js`: mocks de funções da nossa API para retornar os dados necessários para preencher o desafio (clientes, profissionais e serviços)

    `mocks.js`: mocks dos dados. Entre aqui para entender como eles estão organizados.

3.  Sobre CSS:
    Não estamos avaliando se você conseguiu implementar o design da nossa agenda. Por isso, não gaste tempo e esforços para chegar em algo parecido. Entretanto, avaliaremos o código CSS como qualquer outro código. Assim, use boas práticas e convenções.

4.  Para rodar o projeto:
    Esse é um projeto criado pelo [CRA](https://github.com/facebook/create-react-app). Para rodá-lo, basta fazer o clássico `npm install && npm run start`.

## Prazos e Entrega

O prazo para finalizar o desafio é de três dias. Você deverá fazer um fork deste repositório e mandar o link assim que tiver finalizado para marcelo@lapag.com.br.

## Screenshots dos funcionamentos principais

As imagens abaixo são para referência para entender o funcionamento básico da agenda. Sinta-se a vontade para replicar esses layouts ou bolar um novo. Lembre-se: estamos mais preocupados com a arquitetura do que outra coisa.

**Overview da Agenda**

Nas colunas temos os profissionais, nas linhas os horários. Cada retângulo dentro da agenda refere-se a um agendamento de um cliente.

![Imagem da agenda](https://www.dropbox.com/s/wtbqgwlinxwzziv/agenda.png?dl=0)

https://www.dropbox.com/s/wtbqgwlinxwzziv/agenda.png?dl=0

**Overview do Agendamento**

Esse é um agendamento em detalhes. Pedro é o cliente, e Hidratação o serviço.

![Imagem do agendamento](https://www.dropbox.com/s/ush9ocumipym9t4/agendamento.png?dl=0)

https://www.dropbox.com/s/ush9ocumipym9t4/agendamento.png?dl=0

**Overview do Formulário de agendamento**

Esse é um form para fazer um agendamento. É necessário pesquisar o cliente, escolher o profisisonal e os serviços que ele pode prestar.

![Imagem do agendamento](https://www.dropbox.com/s/rbvkzkqgny1cs0p/form.png?dl=0)

https://www.dropbox.com/s/rbvkzkqgny1cs0p/form.png?dl=0

Perceba como mostramos apenas os serviços habilitados para determinado profissional

![Imagem do agendamento](https://www.dropbox.com/s/h9342f9uc6t9t7c/form2.png?dl=0)

https://www.dropbox.com/s/h9342f9uc6t9t7c/form2.png?dl=0
