import sys
import Adafruit_DHT
import busio
import adafruit_ds3231
import requests

from board import *

rtcI2C=busio.I2C(SCL,SDA)
rtc=adafruit_ds3231.DS3231(rtcI2C)

temptime=rtc.datetime

while True:
    humidity, temperature = Adafruit_DHT.read_retry(11,24)
    if humidity is not None and temperature is not None:
        tempSensorRTC={
            "temperature": temperature,
            "humidity": humidity,
            "year": temptime.tm_year,
            "month": temptime.tm_mon,
            "day": temptime.tm_mday,
            "hour": temptime.tm_hour,
            "minute": temptime.tm_min
        }
        res=requests.post('http://localhost:3049/embedded',tempSensorRTC)
        print(res) 
        break
