interface Veiculo {
  nome: string;
  placa: string;
  entrada: Date | string;
}

(function () {
  const $ = (query: string): HTMLInputElement | null =>
    document.querySelector(query);

  function calcTempo(mil: number) {
    const min = Math.floor(mil / 60000);
    const sec = Math.floor(mil % 60000) / 1000;

    return `${min}m e ${sec}s`;
  }

  function patio() {
    function ler(): Veiculo[] {
      return localStorage.patio ? JSON.parse(localStorage.patio) : [];
    }

    function adicionar(veiculo: Veiculo, salva?: boolean) {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${veiculo.nome}</td> 
        <td>${veiculo.placa}</td>
        <td>${veiculo.entrada}</td>
        <td><button class="delete" data-placa="${veiculo.placa}">Remover</button></td>`;

      row.querySelector(".delete")?.addEventListener("click", function () {
        remover(this.dataset.placa);
      });

      $("#patio")?.appendChild(row);

      if (salva) salvar([...ler(), veiculo]);
    }

    function remover(placa: string) {
      const { entrada, nome } = ler().find(
        (veiculo) => veiculo.placa === placa
      );

      const tempo = calcTempo(
        new Date().getTime() - new Date(entrada).getTime()
      );

      if (
        !confirm(`O veículo ${nome} permaneceu por ${tempo}. Deseja encerrar?`)
      )
        return;

      salvar(ler().filter((veiculo) => veiculo.placa !== placa));

      render();
    }

    function salvar(veiculos: Veiculo[]) {
      localStorage.setItem("patio", JSON.stringify(veiculos));
    }

    function render() {
      $("#patio")!.innerHTML = "";
      const patio = ler();

      if (patio.length) {
        patio.forEach((veiculo) => adicionar(veiculo));
      }
    }

    return { ler, adicionar, remover, salvar, render };
  }

  patio().render();

  $("#cadastrar")?.addEventListener("click", () => {
    const nome = $("#nome")?.value;
    const placa = $("#placa")?.value;

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
      patio().adicionar(
        { nome, placa, entrada: new Date().toISOString() },
        true
      );
    } else if (formatoPlaca2.test(placa)) {
      patio().adicionar(
        { nome, placa, entrada: new Date().toISOString() },
        true
      );
    } else if (formatoPlaca3.test(placa)) {
      patio().adicionar(
        { nome, placa, entrada: new Date().toISOString() },
        true
      );
    } else {
      alert("Formato de placa inválido");
      return;
    }
  });
})();
