import cv2
import numpy as np

import aiohttp
import asyncio

import time

vid = cv2.VideoCapture(1)

def getColorMask(frame):
    # orange color bounds
    lowerBound = np.array([10, 100, 20])
    upperBound = np.array([25, 225, 255])

    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    return cv2.inRange(hsv, lowerBound, upperBound)

async def updateFingers(finger_val):
    async with aiohttp.ClientSession() as session:
        url = 'http://localhost:3000/fingers'    
        async with session.post(url, data={
            'thumb': finger_val,
            'index': finger_val,
            'middle': finger_val,
            'ring': finger_val,
            'pinky': finger_val
        }) as resp:
            print('Updated finger values to', finger_val)        

while(True):

    ret, frame = vid.read()

    mask = getColorMask(frame)

    contours, hierarchy = cv2.findContours(mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    object_detected = False

    for pic, contour in enumerate(contours):
        area = cv2.contourArea(contour)
        if (area > 300):
            # set object detected to true 
            object_detected = True

            x, y, w, h = cv2.boundingRect(contour)
            frame = cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 0, 255), 2)
            cv2.putText(frame, "orange", (x,y), cv2.FONT_HERSHEY_SIMPLEX, 1.0, (0, 0, 255))

    finger_val = 0

    if(object_detected == True):
        finger_val = 180
        
    asyncio.run(updateFingers(finger_val))

    cv2.imshow('Frame', frame)
    cv2.imshow('Mask', mask)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

vid.release()

cv2.destroyAllWindows()

