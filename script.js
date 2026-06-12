document.getElementById('praga-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Armazena os dados vindos da tela do usuário
    const talhao = document.getElementById('talhao').value;
    const praga = document.getElementById('praga-tipo').value;
    const gasto = parseFloat(document.getElementById('gasto-estimado').value);

    // Impede a execução caso os dados estejam inválidos
    if(!talhao || isNaN(gasto)) return;

    // Constrói dinamicamente a nova linha da tabela de gastos
    const tabela = document.getElementById('finance-table');
    const novaLinha = document.createElement('tr');
    
    novaLinha.innerHTML = `
        <td>Tratamento contra ${praga} (${talhao})</td>
        <td class="gasto">Gasto</td>
        <td>- ${gasto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
    `;
    
    tabela.appendChild(novaLinha);

    // Emite o aviso de confirmação na tela
    alert(`Foco de ${praga} registrado no ${talhao}. O valor de R$ ${gasto} foi lançado nos custos.`);
    
    // Reseta os campos do formulário para o padrão limpo
    document.getElementById('praga-form').reset();
});document.getElementById('praga-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Armazena os dados vindos da tela do usuário
    const talhao = document.getElementById('talhao').value;
    const praga = document.getElementById('praga-tipo').value;
    const gasto = parseFloat(document.getElementById('gasto-estimado').value);

    // Impede a execução caso os dados estejam inválidos
    if(!talhao || isNaN(gasto)) return;

    // Constrói dinamicamente a nova linha da tabela de gastos
    const tabela = document.getElementById('finance-table');
    const novaLinha = document.createElement('tr');
    
    novaLinha.innerHTML = `
        <td>Tratamento contra ${praga} (${talhao})</td>
        <td class="gasto">Gasto</td>
        <td>- ${gasto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
    `;
    
    tabela.appendChild(novaLinha);

    // Emite o aviso de confirmação na tela
    alert(`Foco de ${praga} registrado no ${talhao}. O valor de R$ ${gasto} foi lançado nos custos.`);
    
    // Reseta os campos do formulário para o padrão limpo
    document.getElementById('praga-form').reset();
});