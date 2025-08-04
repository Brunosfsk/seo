

async function validar(){
    let palavraChave = document.getElementById("palavra_chave");
    let url = document.getElementById("url");
    let tags;
    const saida = document.getElementById("saida");
    
    // Limpar resultados anteriores
    saida.innerHTML = "";
    
    if(palavraChave.value == ""){
        alert("Por favor, preencha o campo Palavra-chave")
        return;
    } else if(url.value == ""){
        alert("Por favor, preencha o campo URL do site") 
        return;
    }
    
    try {
        // Mostrar mensagem de carregamento
        saida.innerHTML = "<p>Analisando o site, por favor aguarde...</p>";
        
        // Verificar se a URL começa com http:// ou https://
        let urlCompleta = url.value;
        if (!urlCompleta.startsWith('http://') && !urlCompleta.startsWith('https://')) {
            urlCompleta = 'https://' + urlCompleta;
        }
        
        const response = await fetch("http://localhost:3000/pup?url=" + encodeURIComponent(urlCompleta));
        tags = await response.json();
        
        // Exibir resultados formatados
        saida.innerHTML = `
            <div class="resultado">
                <h3>Resultados da Análise SEO</h3>
                <p><strong>Tag H1:</strong> ${tags.h1}</p>
                <p><strong>Title:</strong> ${tags.title}</p>
                <p><strong>Meta Description:</strong> ${tags.description}</p>
            </div>
        `;
        
        // Verificar palavra-chave na meta description
        chama(tags, palavraChave);
    } catch (error) {
        saida.innerHTML = `<p>Erro ao analisar o site: ${error.message}</p>`;
        console.error("Erro:", error);
    }
}

// function chama(){
//     let string = 'Meu texto aqui';
//     let result = string.includes('texto');
    
//     console.log(result);
// }


 function chama(tags, palavraChave) {
     if(!tags || !tags.description) {
        alert("Não foi possível analisar a meta description do site.")
        return;
     }
     
     if(tags.description === "Meta description não encontrada") {
        alert("O site não possui meta description. Recomendamos adicionar uma meta description com sua palavra-chave.")
        return;
     }
     
     if(tags.description.toLowerCase().includes(palavraChave.value.toLowerCase())){
        alert(`Parabéns, sua meta description possui a palavra-chave "${palavraChave.value}"!`)
     } else {
        alert(`Sua meta description não possui a palavra-chave "${palavraChave.value}". Considere incluí-la para melhorar seu SEO.`)
     }
 }




//  var str = 'algum texto';
// if(str.match(/texto/)){
//   alert('string encontrada');
// }