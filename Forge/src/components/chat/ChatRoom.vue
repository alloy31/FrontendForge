<template>
  <div>
    <h1>Chatroom</h1>

    <div class="chat-container">
      <div class="chat-box">
        <div class="chat-messages">
          <!-- 여기에 채팅 메시지를 표시하는 부분을 추가할 수 있어요 -->
          <div>wowwoww</div>
        </div>
      </div>

      <div class="chat-input">
        <input placeholder="채팅을 입력하세요" />
        <!-- <input v-model="message" placeholder="채팅을 입력하세요" /> -->
        <button>전송</button>
        <!-- <button @click="sendMessage">전송</button> -->
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'

// const message = ref('')
// const sendMessage = () => {
//   // 여기에 채팅을 전송하는 로직을 추가하세요
//   // 메시지를 보내고 나면 message 변수를 초기화하세요
// }
</script>

<style>
.chat-container {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  max-width: 400px;
  margin: 20px auto;
}

.chat-box {
  border: 1px solid #ccc;
  border-radius: 5px;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
}

.chat-messages {
  max-height: 300px;
  overflow-y: auto;
  margin-top: 7px;
  margin-bottom: 3px;
}

.chat-input {
  display: flex;
  margin-top: 10px;
}

.chat-input input {
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.chat-input button {
  margin-left: 5px;
  padding: 5px 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
