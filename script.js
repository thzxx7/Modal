const notifBtn = document.querySelector('.icon[alt="notificação"]');
const notifBox = document.getElementById('notifications');

// Alternar a visibilidade da aba de notificações
notifBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Evita que o clique no sino feche a aba
  notifBox.classList.toggle('hidden');
});

// Fechar a aba ao clicar fora dela
window.addEventListener('click', (e) => {
  if (!notifBox.classList.contains('hidden') && !notifBox.contains(e.target)) {
    notifBox.classList.add('hidden');
  }
});