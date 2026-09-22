document.querySelectorAll('[data-whatsapp]').forEach(link => {
  const topic = link.dataset.topic;
  const message = topic
    ? `Olá, Dra. Marina! Vim pelo site e gostaria de orientação sobre ${topic}.`
    : 'Olá, Dra. Marina! Vim pelo site e gostaria de orientação sobre uma questão imobiliária.';
  link.href = 'https://wa.me/5511967051870?text=' + encodeURIComponent(message);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
