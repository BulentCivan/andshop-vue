<template>
  <div class="chat-wrapper">
    <h2>Mesajlaşma - Admin ile Sohbet</h2>

    <!-- Mesajlaşma Alanı -->
    <div class="chat-container">
      <h3>Admin ile Mesajlaşma</h3>
      <div class="chat-box">
        <div
          v-for="(msg, index) in messages || []"
          :key="index"
          :class="['chat-message', { 'admin-message': msg.sender === 'admin', 'user-message': msg.sender !== 'admin' }]"
        >
          <strong>{{ msg.sender === 'admin' ? 'Admin' : 'Siz' }}:</strong> {{ msg.text }}
        </div>
      </div>
      <div class="chat-input">
        <input v-model="message" placeholder="Mesajınızı yazın..." />
        <button @click="sendMessage">Gönder</button>
      </div>
    </div>
  </div>
</template>

<script>
import connection from "@/chatService";

export default {
  data() {
    return {
      messages: [], // Admin ile olan mesajlar
      message: "", // Gönderilecek mesaj
      isConnected: false, // SignalR bağlantı durumu
    };
  },
  mounted() {
    // SignalR bağlantısını başlat
    this.connectToSignalR();

    // Gelen mesajları dinle
    connection.on("ReceiveMessage", (sender, text) => {
      this.messages.push({ sender, text });
    });
  },
  methods: {
    connectToSignalR() {
      if (this.isConnected) {
        console.log("SignalR bağlantısı zaten kurulu.");
        return;
      }

      connection
        .start()
        .then(() => {
          this.isConnected = true;
          console.log("SignalR bağlantısı kuruldu.");
        })
        .catch((err) => {
          console.error("Bağlantı kurulurken hata oluştu: ", err);
          setTimeout(() => this.connectToSignalR(), 5000); // 5 saniye sonra yeniden dene
        });

      // Bağlantı kapandığında
      connection.onclose(() => {
        this.isConnected = false;
        console.log("SignalR bağlantısı kapandı.");
      });

      // Yeniden bağlanma sırasında
      connection.onreconnecting(() => {
        console.log("SignalR yeniden bağlanıyor...");
        this.isConnected = false;
      });

      // Yeniden bağlanma tamamlandığında
      connection.onreconnected(() => {
        this.isConnected = true;
        console.log("SignalR yeniden bağlandı.");
      });
    },

    sendMessage() {
      if (this.message.trim() === "") return;

      // Mesajı sohbete ekle
      this.messages.push({ sender: "user", text: this.message });

      // Mesajı SignalR üzerinden gönder
      if (this.isConnected) {
        connection
          .invoke("SendMessage", "admin", this.message) // Admin'e mesaj gönder
          .catch((err) => console.error("Mesaj gönderilirken hata oluştu: ", err));
      } else {
        console.error("SignalR bağlantısı kurulmamış.");
      }

      // Mesaj giriş alanını temizle
      this.message = "";
    },
  },
};
</script>

<style>
.chat-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chat-container {
  width: 50%;
  border: 1px solid #ccc;
  padding: 10px;
  background: #f9f9f9;
}

.chat-box {
  height: 300px;
  overflow-y: auto;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  padding: 5px;
}

.chat-message {
  padding: 5px;
  margin-bottom: 5px;
}

.admin-message {
  background-color: #e1f5fe;
  text-align: right;
}

.user-message {
  background-color: #f1f8e9;
  text-align: left;
}

.chat-input {
  display: flex;
  justify-content: space-between;
}

input {
  flex: 1;
  padding: 5px;
  margin-right: 5px;
}

button {
  padding: 5px 10px;
  background: blue;
  color: white;
  border: none;
  cursor: pointer;
}
</style>