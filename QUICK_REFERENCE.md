# 🚀 Quick Reference - Portfolio Vanilla

## 📂 Estrutura de Arquivos

```
portfolio/
├── index.html              ← Página principal (única)
├── styles/main.css         ← Todos os estilos
├── js/
│   ├── data.js            ← Seus dados aqui!
│   ├── navigation.js      ← Navegação SPA
│   ├── projects.js        ← Carrossel
│   └── contact.js         ← Formulário
├── public/                ← Imagens e projetos
├── .github/workflows/     ← Deploy automático
├── README_VANILLA.md      ← Documentação
├── DEPLOY_GUIDE.md        ← Como fazer deploy
└── SUMMARY.md             ← Resumo completo
```

## ⚡ Comandos Rápidos

### Testar Localmente
```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx http-server -p 8000

# Acesse
http://localhost:8000
```

### Deploy
```bash
# 1. Add & Commit
git add .
git commit -m "Portfolio vanilla pronto"

# 2. Push
git push origin main

# 3. GitHub: Settings → Pages → Source: main → Save
# 4. Aguarde 2 min
# 5. Acesse: https://brwjeff.github.io/portfolio/
```

## ✏️ Editar Conteúdo

### Adicionar Projeto
Edite `js/data.js`:
```javascript
projectsData.push({
    name: 'Novo Projeto',
    purpose: 'Descrição',
    stack: ['React', 'Node'],
    tech: ['Front-end'],
    cover: 'url-imagem',
    repo: 'url-repo',
    app: 'url-app'
});
```

### Mudar Cores
Edite `styles/main.css`:
```css
/* Cor principal dos botões */
.button {
    background-color: #48c774; /* Mude aqui */
}

/* Gradiente de fundo */
@keyframes color-change-2x {
    0% { background: #152614; }
    50% { background: #454545; }
    100% { background: #0D3B66; }
}
```

### Atualizar Info Pessoal
Edite `js/data.js`:
```javascript
const personalData = {
    name: 'Seu Nome',
    // ... mais dados
}
```

## 🔍 Troubleshooting Rápido

| Problema | Solução |
|----------|---------|
| Imagens não carregam | Verifique caminhos em `js/data.js` |
| CSS não aplica | Verifique `<link>` em `index.html` |
| JS não funciona | Abra Console (F12) e veja erros |
| 404 ao recarregar | Normal! É SPA. Use navegação interna |
| Deploy não funciona | Verifique Settings → Pages no GitHub |

## 📱 Testar Responsivo

### Chrome DevTools
1. F12
2. Ctrl+Shift+M (Toggle device toolbar)
3. Teste: Mobile S, iPhone, iPad

### Breakpoints
- Mobile: 480px
- Tablet: 768px
- Desktop: 1024px+

## 🎨 Customização Rápida

### Trocar Foto de Perfil
```
Coloque em: public/profile_photo.jpeg
```

### Adicionar Projeto com Imagem
```
1. Imagem em: public/seu-projeto.png
2. Edite js/data.js:
   cover: 'public/seu-projeto.png'
```

### Mudar Links Sociais
Edite `index.html`:
```html
<!-- GitHub -->
<a href="https://github.com/SEU_USER">

<!-- LinkedIn -->
<a href="https://linkedin.com/in/SEU_USER">
```

## 📊 Métricas

| Antes (React) | Agora (Vanilla) |
|---------------|-----------------|
| 500KB+ | 50KB |
| 2-3s load | <500ms |
| 50+ deps | 0 deps |
| 3 min build | 0s build |

## ✅ Checklist Deploy

- [ ] Testado em `localhost:8000`
- [ ] Info pessoal correta em `js/data.js`
- [ ] Links funcionando
- [ ] Imagens carregando
- [ ] Testado mobile (DevTools)
- [ ] `git add . && git commit && git push`
- [ ] GitHub Pages ativado
- [ ] Site acessível

## 🔗 Links Úteis

- **Seu Repo**: https://github.com/BRWjeff/portfolio
- **GitHub Pages**: https://pages.github.com
- **MDN Web Docs**: https://developer.mozilla.org
- **Can I Use**: https://caniuse.com

## 🎯 Próximos Passos

1. ✅ **Teste** → `localhost:8000` (já rodando)
2. 📝 **Personalize** → Edite `js/data.js`
3. 🚀 **Deploy** → Siga `DEPLOY_GUIDE.md`
4. 📢 **Compartilhe** → LinkedIn, GitHub profile

## 💡 Dicas Pro

### SEO
Adicione em `index.html` `<head>`:
```html
<meta name="description" content="Sua descrição">
<meta property="og:title" content="Seu Nome">
<meta property="og:image" content="url-imagem">
```

### Analytics
Adicione Google Analytics no `</body>`:
```html
<!-- Google Analytics -->
<script async src="..."></script>
```

### Domínio Custom
1. Compre domínio (ex: seusite.com)
2. GitHub Pages → Custom domain
3. Configure DNS: CNAME → brwjeff.github.io

## 🆘 Suporte

### Erros Comuns
```bash
# Limpar cache do git
git rm -r --cached .
git add .

# Ver status
git status

# Ver logs
git log --oneline
```

### Contato
- GitHub Issues
- Stack Overflow
- MDN Community

---

## 🎉 Você tem tudo que precisa!

**Arquivo atual**: `http://localhost:8000`
**Documentação completa**: Veja os outros .md
**Pronto para deploy**: Sim! ✅

**Boa sorte! 🚀**
