function filtrarProjetos(tipo) {
    const projetos = document.querySelectorAll('.projeto');
    projetos.forEach(projeto => {
        if (tipo === 'todos' || projeto.classList.contains(tipo)) {
            projeto.classList.add('visible');
        } else {
            projeto.classList.remove('visible');
        }
    });
} //função para o filtro dinâmico

//carregamento de pagina

