# Portfolio - Vanilla HTML/CSS/JavaScript

Portfolio pessoal reimplementado usando apenas HTML, CSS e JavaScript vanilla para performance otimizada e deploy simplificado no GitHub Pages.

## 🚀 Características

- **100% Vanilla**: Sem dependências de frameworks ou bibliotecas
- **Performance**: Carregamento rápido e otimizado
- **Responsivo**: Funciona perfeitamente em desktop e mobile
- **Fácil Deploy**: Pronto para GitHub Pages
- **SEO Friendly**: Meta tags e estrutura otimizada

## 📁 Estrutura do Projeto

```
portfolio/
├── index.html          # Página principal
├── styles/
│   └── main.css       # Estilos globais
├── js/
│   ├── data.js        # Dados dos projetos e informações pessoais
│   ├── navigation.js  # Sistema de navegação entre páginas
│   ├── projects.js    # Gerenciamento de projetos
│   └── contact.js     # Formulário de contato
├── public/            # Recursos estáticos (imagens, projetos antigos)
└── README.md
```

## 🎨 Páginas

1. **Landing Page** (`/`)
   - Foto de perfil
   - Nome e descrição
   - Links para redes sociais
   - Navegação para projetos e contato

2. **Projetos** (`/projects`)
   - Carrossel de projetos
   - Detalhes de cada projeto
   - Links para repositórios e aplicações

3. **Contato** (`/contact`)
   - Formulário de contato
   - Envio via email client

## 🚀 Deploy no GitHub Pages

### Opção 1: Deploy Automático (Recomendado)

1. **Configure o repositório**:
   ```bash
   git add .
   git commit -m "Reimplementação com HTML/CSS/JS vanilla"
   git push origin main
   ```

2. **Ative GitHub Pages**:
   - Vá até Settings > Pages
   - Em "Source", selecione "Deploy from a branch"
   - Selecione a branch `main` e pasta `/ (root)`
   - Clique em "Save"

3. **Acesse seu site**:
   - Será disponibilizado em: `https://[seu-usuario].github.io/portfolio/`
   - Ou configure um domínio customizado

### Opção 2: Deploy Manual

Se você já tem o `gh-pages` instalado:

```bash
# Instalar gh-pages (se necessário)
npm install -g gh-pages

# Deploy
gh-pages -d . -b gh-pages
```

## 🛠️ Desenvolvimento Local

Para testar localmente, você precisa de um servidor HTTP simples. Escolha uma das opções:

### Com Python (se instalado):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Com Node.js (se instalado):
```bash
# Instalar http-server globalmente
npm install -g http-server

# Executar
http-server -p 8000
```

### Com PHP (se instalado):
```bash
php -S localhost:8000
```

### Com VS Code:
- Instale a extensão "Live Server"
- Clique com botão direito em `index.html`
- Selecione "Open with Live Server"

Depois acesse: `http://localhost:8000`

## 🎯 Personalização

### Atualizar Informações Pessoais
Edite o arquivo `js/data.js`:
- Dados pessoais em `personalData`
- Projetos em `projectsData`

### Adicionar Novos Projetos
Em `js/data.js`, adicione um novo objeto ao array `projectsData`:

```javascript
{
    name: 'Nome do Projeto',
    purpose: 'Descrição do propósito',
    stack: ['Tech1', 'Tech2', 'Tech3'],
    tech: ['Front-end'], // ou ['Front-end', 'Back-end']
    cover: 'url-da-imagem-de-capa',
    repo: 'url-do-repositorio',
    app: 'url-da-aplicacao'
}
```

### Personalizar Cores
Edite `styles/main.css`:
- Background gradient: keyframes `color-change-2x`
- Cores dos botões: classes `.button`
- Glow effects: atributos `[data-glow]`

## 📧 Configurar Email

O formulário de contato usa o cliente de email padrão do sistema. Para integrar com EmailJS:

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço e template
3. Descomente e configure em `js/contact.js`:
   ```javascript
   emailjs.init('YOUR_USER_ID');
   // Configure SERVICE_ID e TEMPLATE_ID
   ```

## 🌐 Compatibilidade

- ✅ Chrome/Edge (últimas versões)
- ✅ Firefox (últimas versões)
- ✅ Safari (últimas versões)
- ✅ Mobile browsers

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.

## 👤 Autor

**Alan Albuquerque F. Lopes**
- GitHub: [@offpepe](https://github.com/offpepe)
- LinkedIn: [Alan Albuquerque](https://www.linkedin.com/in/alanalbuquerq/)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
