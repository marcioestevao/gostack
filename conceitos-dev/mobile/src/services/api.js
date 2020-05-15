import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;

/**
 * IOS com emulador: localhost
 * IOS com fisico: IP da maquina
 *
 * O simulador do Android é uma máquina virtual, com seu IP proprio,
 * portanto para acessá-lo seguir os seguinte passos:
 *
 * Android com Emulador: localhost (deve executar o seguinte comando: adb reverse tcp:3333 tcp:3333)
 * Android com Emulador: 10.2.2.2 (Emulador Android Studio)
 * Android com Emulador: 10.0.3.2 (Emulador Genymotion)
 * Android com fisico: IP da máquina
 *
 *
 *
 */
