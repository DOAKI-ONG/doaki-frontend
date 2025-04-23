# 🏗️ Arquitetura do Projeto

Este documento descreve a arquitetura do projeto **DOAKI**, detalhando a estrutura do **frontend** e a organização proposta para o **backend**.

---

## 🖥️ Frontend

A arquitetura do frontend foi desenvolvida com base em **pastas de responsabilidade**, visando manter uma estrutura clara e escalável. Essa organização é especialmente útil em aplicações com poucas páginas e torna o processo de desenvolvimento e manutenção mais simples.

### 🔍 Estrutura de Pastas

```
src/
├── assets/                # Arquivos estáticos como imagens e ícones
│   ├── logo-1-doaki.png
│   └── logo-2.png
|── lib/
|   ├── api.ts             # Api axios para requisições
│   └── utils.ts           # utilitários do tailwind.css
├── components/            # Componentes reutilizáveis da aplicação
│   └── Header.tsx
├── pages/                 # Páginas principais da aplicação (rotas)
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── Profile.tsx
│   └── Register.tsx
├── App.tsx                # Componente raiz da aplicação
├── main.tsx               # Ponto de entrada da aplicação
├── index.css              # Estilo global
└── App.css                # Estilo específico da aplicação
```


### 🎯 Justificativa

Optamos por essa estrutura por ela:

- Ser **intuitiva** para times pequenos;
- Facilitar a **manutenção** e localização dos arquivos;
- Organizar de forma clara o que é **reutilizável** (componentes) e o que é **específico** (páginas);
- Ser uma base sólida para crescimento futuro do projeto.

---

## 🛠️ Backend

A arquitetura adotada no backend segue o padrão **MVC aprimorado**, com camadas de serviço adicionais para permitir maior desacoplamento e escalabilidade.

### 🧱 Camadas do Backend

- **Model**: Representação dos dados e entidades.
- **Controller**: Responsável por receber as requisições e direcioná-las corretamente.
- **Service**: Camada intermediária entre os controllers e os repositórios, onde fica a lógica de negócio.
- **Repository**: Camada responsável pela comunicação direta com o banco de dados.

### ✅ Benefícios dessa Arquitetura

- Clareza e **separação de responsabilidades**;
- **Escalabilidade**, com espaço para adicionar novas regras de negócio e serviços;
- Facilita **testes unitários** e **mocking**;
- Menor acoplamento entre as partes da aplicação;
- Agilidade na resolução de erros e bugs.

---

## 📄 Documentação Extra

- `docs/architecture.md`: Documento atual contendo a arquitetura.
- `docs/product_vision.md`: Visão geral do produto, objetivos e metas.

---

## 💡 Considerações Finais

A arquitetura foi escolhida pensando na **facilidade de desenvolvimento**, **organização de código** e **manutenção a longo prazo**. Ambas as estruturas (frontend e backend) são capazes de evoluir conforme a complexidade do projeto cresce.

