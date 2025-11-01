// Projects management
let currentProjectIndex = 0;

function renderProject(index) {
    const project = projectsData[index];
    
    // Update cover image
    document.getElementById('project-cover').src = project.cover;
    document.getElementById('project-cover').alt = project.name;
    
    // Update project name
    document.getElementById('project-name').textContent = project.name;
    
    // Update purpose
    document.getElementById('project-purpose').textContent = project.purpose;
    
    // Update tech stack buttons
    const techNav = document.getElementById('project-tech');
    techNav.innerHTML = '';
    project.tech.forEach(tech => {
        const button = document.createElement('button');
        button.className = 'button';
        button.textContent = tech;
        techNav.appendChild(button);
    });
    
    // Add stack info dropdown
    const stackDropdown = createStackDropdown(project.stack);
    techNav.appendChild(stackDropdown);
    
    // Update footer with repo and app links
    const footer = document.getElementById('project-footer');
    footer.innerHTML = '';
    
    // Handle repo links (can be string or array)
    if (Array.isArray(project.repo)) {
        const repoDropdown = createRepoDropdown(project.repo);
        footer.appendChild(repoDropdown);
    } else {
        const repoLink = document.createElement('a');
        repoLink.href = project.repo;
        repoLink.target = '_blank';
        repoLink.rel = 'noreferrer';
        
        const repoButton = document.createElement('button');
        repoButton.className = 'button';
        repoButton.textContent = 'Repo';
        
        repoLink.appendChild(repoButton);
        footer.appendChild(repoLink);
    }
    
    // App link
    if (project.app && project.app !== 'not-found') {
        const appLink = document.createElement('a');
        appLink.href = project.app;
        appLink.target = '_blank';
        appLink.rel = 'noreferrer';
        
        const appButton = document.createElement('button');
        appButton.className = 'button';
        appButton.textContent = 'App';
        
        appLink.appendChild(appButton);
        footer.appendChild(appLink);
    }
}

function createStackDropdown(stack) {
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown';
    dropdown.style.position = 'relative';
    
    const button = document.createElement('button');
    button.className = 'button';
    button.innerHTML = 'Tech Stack <i class="fas fa-angle-down"></i>';
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.gap = '8px';
    
    const dropdownContent = document.createElement('div');
    dropdownContent.className = 'dropdown-content';
    dropdownContent.style.cssText = `
        display: none;
        position: absolute;
        background-color: white;
        color: black;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        z-index: 1000;
        min-width: 160px;
        max-height: 200px;
        overflow-y: auto;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 5px;
    `;
    
    stack.forEach((tech, index) => {
        const item = document.createElement('div');
        item.style.cssText = `
            padding: 10px 15px;
            cursor: pointer;
        `;
        item.textContent = tech;
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#f0f0f0';
        });
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = 'white';
        });
        dropdownContent.appendChild(item);
        
        if (index < stack.length - 1) {
            const divider = document.createElement('hr');
            divider.style.margin = '0';
            divider.style.border = '0';
            divider.style.borderTop = '1px solid #e0e0e0';
            dropdownContent.appendChild(divider);
        }
    });
    
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const isVisible = dropdownContent.style.display === 'block';
        dropdownContent.style.display = isVisible ? 'none' : 'block';
    });
    
    document.addEventListener('click', () => {
        dropdownContent.style.display = 'none';
    });
    
    dropdown.appendChild(button);
    dropdown.appendChild(dropdownContent);
    
    return dropdown;
}

function createRepoDropdown(repos) {
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown';
    dropdown.style.position = 'relative';
    
    const button = document.createElement('button');
    button.className = 'button';
    button.innerHTML = 'Repo <i class="fas fa-angle-down"></i>';
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.gap = '8px';
    
    const dropdownContent = document.createElement('div');
    dropdownContent.className = 'dropdown-content';
    dropdownContent.style.cssText = `
        display: none;
        position: absolute;
        background-color: white;
        color: black;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        z-index: 1000;
        min-width: 160px;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 5px;
    `;
    
    repos.forEach((repo, index) => {
        const link = document.createElement('a');
        link.href = repo.link;
        link.target = '_blank';
        link.rel = 'noreferrer';
        link.style.cssText = `
            display: block;
            padding: 10px 15px;
            color: black;
            text-decoration: none;
            cursor: pointer;
        `;
        link.textContent = repo.of;
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#f0f0f0';
        });
        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = 'white';
        });
        dropdownContent.appendChild(link);
        
        if (index < repos.length - 1) {
            const divider = document.createElement('hr');
            divider.style.margin = '0';
            divider.style.border = '0';
            divider.style.borderTop = '1px solid #e0e0e0';
            dropdownContent.appendChild(divider);
        }
    });
    
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const isVisible = dropdownContent.style.display === 'block';
        dropdownContent.style.display = isVisible ? 'none' : 'block';
    });
    
    document.addEventListener('click', () => {
        dropdownContent.style.display = 'none';
    });
    
    dropdown.appendChild(button);
    dropdown.appendChild(dropdownContent);
    
    return dropdown;
}

function nextProject() {
    if (currentProjectIndex < projectsData.length - 1) {
        currentProjectIndex++;
        renderProject(currentProjectIndex);
    }
}

function previousProject() {
    if (currentProjectIndex > 0) {
        currentProjectIndex--;
        renderProject(currentProjectIndex);
    }
}

// Initialize first project when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (projectsData.length > 0) {
        renderProject(0);
    }
});
