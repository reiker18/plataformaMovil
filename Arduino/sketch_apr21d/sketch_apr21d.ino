
#include <ESP8266WiFiMulti.h>

void setup() {
   Serial.begin(115200);
   Serial.println();

   WiFi.begin("manuel", "3115574493");

   Serial.print("Conectando");
   while (WiFi.status() != WL_CONNECTED)
   {
     delay(500);
     Serial.print(".");
   }
   Serial.println();
 
   Serial.print("Conectado, dirección IP: ");
   Serial.println(WiFi.localIP());
}


void loop() {
  // put your main code here, to run repeatedly:

}
