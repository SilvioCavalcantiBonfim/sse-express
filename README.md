# Servidor Server-Sent Event com TypeScript, Express e Docker

![Docker](https://img.shields.io/badge/-Docker-white?style=for-the-badge&logo=docker&color=2496ED&logoColor=white)
![Node](https://img.shields.io/badge/-node.JS-white?style=for-the-badge&logo=nodedotjs&color=339933&logoColor=white)
![Typescript](https://img.shields.io/badge/-TypeScript-white?style=for-the-badge&logo=typescript&color=3178C6&logoColor=white)
![express](https://img.shields.io/badge/-Express-white?style=for-the-badge&logo=express&color=000000&logoColor=white)

Este é um projeto básico de um servidor que utiliza Server-Sent Events (SSE) com TypeScript, Express e Docker. O Server-Sent Events é um protocolo que permite a transmissão unidirecional de eventos do servidor para o cliente, sem a necessidade de solicitações adicionais do cliente.

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:

- Docker
- Docker Compose

Instalação e Execução

- Faça o clone deste repositório para o seu ambiente local.

 - Abra um terminal e navegue até o diretório raiz do projeto.

    Execute o seguinte comando para construir a imagem Docker e executar o contêiner:

```shell
    docker-compose up
```

- Abra um navegador da web compatível com SSE (por exemplo, Chrome, Firefox).

- Acesse a URL http://localhost:3000 (ou a porta que você definiu).

- O servidor enviará um evento a cada segundo para o cliente e você poderá ver os eventos aparecendo na página.

## Personalização

Este projeto é um exemplo básico de um servidor SSE com TypeScript, Express e Docker. Você pode personalizá-lo de acordo com suas necessidades, adicionando lógica de negócios, manipulando diferentes eventos ou aprimorando o comportamento do servidor.

Sinta-se à vontade para explorar o código-fonte no diretório src para entender como o servidor SSE foi implementado.

## Licença

Este projeto está licenciado sob a MIT License. Sinta-se à vontade para utilizar, modificar e distribuir o código conforme necessário.