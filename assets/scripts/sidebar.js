//! system.02=localOf0#Main-server(DEFAULT)

//TODO/ Dashboard sytem
/*legend languages:=
    //? blue line comments = English
    //* comentários de linha verde = Português 
*/


document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("active");
  });
  
  //? en-us: Add Areas functionality
  //* pt-br: Funcionalidade de Adicionar Áreas
  document.getElementById("add-area-btn").addEventListener("click", function() {
    const newArea = prompt("Digite o nome da nova área:");
    if (newArea) {
      alert("Área " + newArea + " criada!");
    }
  });
  
  //? en-us: Recurrent Tasks
  //* pt-br: Tarefas Recorrentes
  document.getElementById("recurring-task-btn").addEventListener("click", function() {
    const recurringTask = prompt("Digite o nome da tarefa recorrente:");
    if (recurringTask) {
      alert("Tarefa recorrente " + recurringTask + " configurada!");
    }
  });
  
  //! Lista Rápida (Quick Add)
  document.getElementById("quick-task-btn").addEventListener("click", function() {
    const quickTask = document.getElementById("quick-task").value;
    if (quickTask) {
      alert("Tarefa rápida adicionada: " + quickTask);
      document.getElementById("quick-task").value = ""; // Limpa o campo
    } else {
      alert("Por favor, insira uma tarefa.");
    }
  });
  
  //? en-us: Completed Tasks History
  //* pt-br: Histórico de Tarefas Concluídas
  const taskHistory = [];
  document.getElementById("view-history-btn").addEventListener("click", function() {
    const historyDiv = document.getElementById("history-list");
    historyDiv.innerHTML = ""; // Limpa a lista antes de exibir
  
    if (taskHistory.length === 0) {
      historyDiv.innerHTML = "<p>Nenhuma tarefa concluída ainda.</p>";
    } else {
      const ul = document.createElement("ul");
      taskHistory.forEach(function(task) {
        const li = document.createElement("li");
        li.textContent = task;
        ul.appendChild(li);
      });
      historyDiv.appendChild(ul);
    }
  });
  
  //? en-us: Adding a task to the history
  //* pt-br: Adicionando uma tarefa ao histórico
  function addToHistory(task) {
    taskHistory.push(task);
  }
  