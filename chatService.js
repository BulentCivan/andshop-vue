import * as signalR from "@microsoft/signalr";

const userId = localStorage.getItem("userId") || `user-${Math.random().toString(30).substr(2, 9)}`;
localStorage.setItem("userId", userId);

const connection = new signalR.HubConnectionBuilder()
    .withUrl(`https://localhost:7078/chatHub`, {
        accessTokenFactory: () => localStorage.getItem("token") // Token burada gönderiliyor
    })
    .withAutomaticReconnect()
    .build();



connection.start()
    .then(() => {
        console.log("SignalR bağlantısı kuruldu.");
    })
    .catch(err => {
        console.error("Bağlantı hatası:", err);
    });

connection.onclose((error) => {
    console.error("SignalR bağlantısı kapandı:", error);
});

export default connection;
