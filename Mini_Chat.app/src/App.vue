<template>
  <div class="container">
    <div class="login" v-if="state.username == '' || state.username == null">
      <form @submit.prevent="Login">
        <!--Prevent the page to reload / should the entire form-->
        <h1>VueChat</h1>
        <input
          type="text "
          placeholder="Please enter Your name..."
          v-model="inputLogin"
        />
        <button type="submit">login</button>
      </form>
    </div>
    <div class="chat" v-else>
      <header>
        <div class="header-user">
          <div class="user-icon">{{ getFirstLett(state.username) }}</div>
          <h2>{{ state.username }}</h2>
        </div>
        <div class="header-logout" @click="Logout">Logout</div>
      </header>

      <main>
        <div
          class="message-box"
          :class="state.username === message.username && 'current-user'"
          v-for="message in state.messages"
          :key="message.id"
        >
          <div class="user-icon">{{ getFirstLett(message.username) }}</div>
          <div class="message">
            {{ message.body }}
          </div>
        </div>
      </main>
      <footer>
        <form @submit.prevent="sendMessage">
          <input
            type="text"
            placeholder="Write a message ..."
            v-model="inputMessage"
          />
          <button type="submit">send</button>
        </form>
      </footer>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import db from "./db";

export default {
  setup() {
    const inputLogin = ref("");
    const inputMessage = ref("");
    const state = reactive({
      username: "",
      messages: [],
    });
    const Login = () => {
      if (inputLogin.value !== null || inputLogin.value !== "") {
        state.username = inputLogin.value;
        inputLogin.value = "";
      }
    };
    const getFirstLett = username /*Parameter */ => {
      return username.charAt(0)
    };
    
    const Logout = () => {
      state.username = "";
    };

    const sendMessage = () => {
      const messagesRef = db.database().ref("messages");
      if (inputMessage.value === "" || inputMessage.value === null) {
        return 
      }
      const message = {
        username: state.username,
        body: inputMessage.value,
      };
      messagesRef.push(message);
      inputMessage.value = "";
    };
    onMounted(() => {
      const messagesRef = db.database().ref("messages");
      messagesRef.on("value", (snapshot) => {
        const data = snapshot.val();
        let messages = [];

        Object.keys(data).forEach((key) => {
          messages.push({
            id: key,
            username: data[key].username,
            body: data[key].body,
          });
        });
        state.messages =messages;
      });
    });

    return {
      inputLogin,
      Login,
      Logout,
      state,
      sendMessage,
      inputMessage,getFirstLett
    };
  },
};

</script>
<style>
*,
*:after,
*:before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100vw;
  min-height: 95vh;
  overflow-x: hidden;
  background-color: #f0f4f8;
  background-image: linear-gradient(120deg, #dfe9f3 0%, #ffffff 100%);
}

.container {
  margin: 5vh auto 0;
  min-height: 90vh;
  background-color: #ffffff;
  width: 320px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.login {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}

.login form {
  width: 90%;
  background-color: #d2e7f7;
  border-radius: 20px;
  padding: 3rem 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  color: #3b3b3b;
}

.login h1 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #4a90e2;
}

.login input {
  width: 100%;
  border-radius: 10rem;
  background-color: #f3f4f6;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
}

.login button {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  background-color: #4a90e2;
  cursor: pointer;
  border-radius: 10rem;
  padding: 0.5rem;
  border: none;
  outline: none;
  color: #fff;
  transition: background-color 0.3s;
}

.login button:hover {
  background-color: #357ab7;
}

.chat {
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
}

header {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #4a4a4a;
  background-color: #f7f9fc;
  border-bottom: 1px solid #e0e0e0;
}

header h2 {
  font-size: 1.5rem;
}

.header-user {
  display: flex;
  align-items: center;
}

.user-icon {
  border-radius: 10rem;
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: bold;
}

.header-user .user-icon {
  background-color: #4a90e2;
  color: #fff;
  margin-right: 0.5rem;
}

.header-logout {
  transition: all 0.3s;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  background-color: #e94e77;
  color: #fff;
}

.header-logout:hover {
  background-color: #d23f67;
}

main {
  background-color: #ffffff;
  flex-grow: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  max-height: calc(90vh - 130px);
  overflow-y: auto;
}

main::-webkit-scrollbar {
  width: 4px;
  background-color: transparent;
}
main::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(74, 144, 226, 0.4);
}

.message-box {
  max-width: 80%;
  display: flex;
  margin-bottom: 1rem;
}

.message-box .message {
  background-color: #f0f4f8;
  color: #3b3b3b;
  padding: 0.5rem;
  border-radius: 8px;
}

.message-box .user-icon {
  background-color: #cdddf4;
  color: #4a90e2;
  margin-right: 0.5rem;
}

.message-box.current-user {
  align-self: flex-end;
}

.message-box.current-user .user-icon {
  background-color: #4a90e2;
  color: #fff;
  order: 2;
  margin-left: 0.5rem;
}

.message-box.current-user .message {
  background-color: #4a90e2;
  color: #ffffff;
}

footer {
  background: #ffffff;
}

footer form {
  background: #f0f4f8;
  padding: 1rem;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
}

footer input {
  flex-grow: 1;
  padding: 0.5rem 1rem;
  border-top-left-radius: 10rem;
  border-bottom-left-radius: 10rem;
  border: 1px solid #ccc;
  background-color: #fff;
}

footer button {
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
  background: #4a90e2;
  border-top-right-radius: 10rem;
  border-bottom-right-radius: 10rem;
  color: #fff;
  cursor: pointer;
}
</style>