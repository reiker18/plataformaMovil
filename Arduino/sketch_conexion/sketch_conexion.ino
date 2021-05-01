#include <Arduino.h>

#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>

#include <WebSocketsClient.h>


ESP8266WiFiMulti WiFiMulti;
WebSocketsClient webSocket;

// SETUP
void setup() {
  
  Serial.begin(115200);

  WiFiMulti.addAP("LUZMARINA", "+6-5LJB%=*M4j4l452. 47");
  

  while (WiFiMulti.run() != WL_CONNECTED) {

    Serial.println("connecting...");
    delay(100);
  }

  webSocket.begin("192.168.0.5", 3009, "/socket.io/?transport=websocket");
  
}

// LOOP
void loop() {
  
  webSocket.loop();
}
