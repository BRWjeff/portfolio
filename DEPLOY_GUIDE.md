# 🚀 Guia de Deploy - Portfolio Vanilla

## Pré-requisitos
- Conta no GitHub
- Git instalado localmente
- Repositório do portfolio

## 📋 Passo a Passo

### 1. Prepare o Repositório

```bash
# Navegue até a pasta do projeto
cd /home/alanlopes/dev/portfolio_jeff

# Verifique o status
git status

# Adicione todos os novos arquivos
git add index.html styles/ js/ .github/
git add README_VANILLA.md

# Faça o commit
git commit -m "feat: Reimplementação com HTML/CSS/JS vanilla para deploy rápido"

# Envie para o GitHub
git push origin main
```

### 2. Configure GitHub Pages

#### Método 1: Via Interface Web (Mais Fácil)

1. Acesse seu repositório no GitHub: `https://github.com/BRWjeff/portfolio`

2. Clique em **Settings** (Configurações)

3. No menu lateral esquerdo, clique em **Pages**

4. Em **Source** (Origem):
   - Branch: Selecione `main`
   - Folder: Selecione `/ (root)`
   - Clique em **Save**

5. Aguarde alguns minutos e seu site estará disponível em:
   ```
   https://brwjeff.github.io/portfolio/
   ```

#### Método 2: Com GitHub Actions (Automático)

O arquivo `.github/workflows/deploy.yml` já está configurado e fará o deploy automático a cada push na branch `main`.

Para ativar:

1. Vá em **Settings** > **Pages**
2. Em **Source**, selecione **GitHub Actions**
3. O deploy será automático a cada push!

### 3. Teste Localmente Antes do Deploy

```bash
# Opção 1: Com Python
python -m http.server 8000

# Opção 2: Com Node.js (npx)
npx http-server -p 8000

# Opção 3: Com PHP
php -S localhost:8000
```

Acesse: `http://localhost:8000`

### 4. Verifique o Deploy

Após o deploy, verifique:
- ✅ Todas as páginas funcionam
- ✅ Imagens carregam corretamente
- ✅ Links para projetos funcionam
- ✅ Navegação entre páginas funciona
- ✅ Formulário de contato funciona
- ✅ Design responsivo no mobile

### 5. Configurar Domínio Customizado (Opcional)

Se você tem um domínio próprio:

1. Em **Settings** > **Pages**, adicione seu domínio customizado
2. Configure os DNS records do seu domínio:
   ```
   Type: CNAME
   Name: www (ou @)
   Value: brwjeff.github.io
   ```

## 🔧 Troubleshooting

### Problema: Imagens não carregam

**Solução**: Verifique os caminhos das imagens em `js/data.js`. Se as imagens estão em `public/`, o caminho deve ser relativo:
```javascript
cover: 'public/shipit-trivia.png'
```

### Problema: CSS não aplica

**Solução**: Verifique se o caminho em `index.html` está correto:
```html
<link rel="stylesheet" href="styles/main.css">
```

### Problema: JavaScript não funciona

**Solução**: 
1. Abra o Console do navegador (F12)
2. Verifique erros
3. Certifique-se de que todos os arquivos JS estão carregando

### Problema: 404 ao navegar entre páginas

**Solução**: ✅ RESOLVIDO! O arquivo `404.html` agora redireciona automaticamente para a página correta. A navegação funciona tanto por clique quanto por acesso direto à URL.

## 📦 Arquivos Importantes

```
portfolio/
├── index.html              ← Página principal (OBRIGATÓRIO)
├── styles/main.css         ← Estilos
├── js/
│   ├── data.js            ← Seus dados e projetos
│   ├── navigation.js      ← Sistema de navegação
│   ├── projects.js        ← Carrossel de projetos
│   └── contact.js         ← Formulário
└── public/                ← Imagens e projetos antigos
```

## ✅ Checklist Final

Antes de fazer o deploy:

- [ ] Todas as informações pessoais estão corretas em `js/data.js`
- [ ] Links de projetos estão funcionando
- [ ] Imagens dos projetos estão acessíveis
- [ ] Testado localmente
- [ ] Testado em dispositivos móveis
- [ ] Links de redes sociais corretos
- [ ] Email de contato correto
- [ ] README atualizado

## 🎉 Deploy Bem-Sucedido!

Seu portfolio estará disponível em:
```
https://brwjeff.github.io/portfolio/
```

Compartilhe com orgulho! 🚀

## 📞 Precisa de Ajuda?

- GitHub Pages Docs: https://docs.github.com/pages
- Issues no repositório: Abra uma issue
- Comunidade: Stack Overflow, GitHub Discussions

---

**Dica Pro**: Adicione o link do seu portfolio no README do seu perfil GitHub e no LinkedIn!
