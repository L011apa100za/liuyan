document.addEventListener('DOMContentLoaded', function() {
  const messageForm = document.getElementById('messageForm');
  const messageInput = document.getElementById('messageInput');
  const messagesContainer = document.getElementById('messages');

  // 从 localStorage 中加载留言
  const messages = JSON.parse(localStorage.getItem('messages')) || [];

  // 显示所有留言
  messages.forEach(message => {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.textContent = message;
      messagesContainer.appendChild(messageElement);
  });

  // 提交留言
  messageForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const newMessage = messageInput.value.trim();

      if (newMessage) {
          // 添加新留言到数组
          messages.push(newMessage);

          // 保存到 localStorage
          localStorage.setItem('messages', JSON.stringify(messages));

          // 显示新留言
          const messageElement = document.createElement('div');
          messageElement.classList.add('message');
          messageElement.textContent = newMessage;
          messagesContainer.appendChild(messageElement);

          // 清空输入框
          messageInput.value = '';
      }
  });
});