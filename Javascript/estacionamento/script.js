(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    function calcTempo(mil) {
        const min = Math.floor(mil / 60000);
        const sec = Math.floor(mil % 60000) / 1000;
        return `${min}m e ${sec}s`;
    }
    function patio() {
        function ler() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        function adicionar(veiculo, salva) {
            var _a, _b;
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${veiculo.nome}</td> 
        <td>${veiculo.placa}</td>
        <td>${veiculo.entrada}</td>
        <td><button class="delete" data-placa="${veiculo.placa}">Remover</button></td>`;
            (_a = row.querySelector(".delete")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                remover(this.dataset.placa);
            });
            (_b = $("#patio")) === null || _b === void 0 ? void 0 : _b.appendChild(row);
            if (salva)
                salvar([...ler(), veiculo]);
        }
        function remover(placa) {
            const { entrada, nome } = ler().find((veiculo) => veiculo.placa === placa);
            const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime());
            if (!confirm(`O veículo ${nome} permaneceu por ${tempo}. Deseja encerrar?`))
                return;
            salvar(ler().filter((veiculo) => veiculo.placa !== placa));
            render();
        }
        function salvar(veiculos) {
            localStorage.setItem("patio", JSON.stringify(veiculos));
        }
        function render() {
            $("#patio").innerHTML = "";
            const patio = ler();
            if (patio.length) {
                patio.forEach((veiculo) => adicionar(veiculo));
            }
        }
        return { ler, adicionar, remover, salvar, render };
    }
    patio().render();
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        const nome = (_a = $("#nome")) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $("#placa")) === null || _b === void 0 ? void 0 : _b.value;
        //VERIFICA SE OS DADOS FORAM DIGITADOS
        if (!nome || !placa) {
            alert("Os campos nome e placa são obrigatórios");
            return;
        }
        //VERIFICA O FORMATO DA PLACA - ANTIGA E MERCOSUL
        const formatoPlaca1 = /^[a-zA-Z]{3}[0-9]{4}$/;
        const formatoPlaca2 = /^[a-zA-Z]{3}[0-9]{2}[a-zA-Z]{1}[0-9]{1}$/;
        const formatoPlaca3 = /^[a-zA-Z]{3}[0-9]{2}[a-zA-Z]{1}[0-9]{1}$/;
        if (formatoPlaca1.test(placa)) {
            patio().adicionar({ nome, placa, entrada: new Date().toISOString() }, true);
        }
        else if (formatoPlaca2.test(placa)) {
            patio().adicionar({ nome, placa, entrada: new Date().toISOString() }, true);
        }
        else if (formatoPlaca3.test(placa)) {
            patio().adicionar({ nome, placa, entrada: new Date().toISOString() }, true);
        }
        else {
            alert("Formato de placa inválido");
            return;
        }
    });
})();
