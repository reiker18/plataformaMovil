import cv2
from envioCmmd import enviar
haar_file = 'haarcascade_frontalface_default.xml'

face_cascade = cv2.CascadeClassifier(haar_file)
webcam = cv2.VideoCapture(0)

while True:
    (_, img) = webcam.read()
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray,1.3, 5)
    for (x, y, w, h) in faces:
        cv2.rectangle(img, (x, y), (x+w, y+h), (255,0,0),2)
        if x > 250:
            print('izquierda')
            enviar(3)
        if x < 100:
            print('derecha')
            enviar(4)
        if y > 160:
            print('abajo')
            enviar(1)
        if y < 120:
            print('arriba')
            enviar(2)

    cv2.imshow('img',img)
    k = cv2.waitKey(30)
    if k == 27:
        break
cap.release()