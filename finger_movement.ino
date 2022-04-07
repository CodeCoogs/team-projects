#include <Servo.h>

// -- Declaring Servo's -- //
Servo servo1;
Servo servo2;
/*
Servo servo3;
Servo servo4;
Servo servo5;
*/

//servo positions
int pos1 = 0;
int pos2 = 0;


// -- Setting up fingers -- //
void setup() {
  // Fingers 1-5
  servo1.attach(11);
  servo2.attach(10);
  /*
  servo3.attach(x);
  servo4.attach(y);
  servo5.attach(z);
  */
}


// -- Controlling the fingers -- //
void loop() {
  /*
  // Al finger movement 
  servo1.write(90);
  servo2.write(90);
  servo3.write(90);
  servo4.write(90);
  servo5.write(90);
  delay(1000);
  servo1.write(180);
  servo2.write(180);
  servo3.write(180);
  servo4.write(180);
  servo5.write(180);
  delay(1000);
  */
  
  servo1.write(90);
  servo2.write(90);
  delay(1000);
  servo1.write(180);
  servo2.write(180);
  delay(1000);
  
  
}