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
            "year": temptime.em_year,
            "month": temptime.em_mon,
            "day": temptime.em_mday,
            "hour": temptime.em_hour,
            "minute": temptime.em_min
        }
        res=requests.post('http://localhost:3011/embedded',tempSensorRTC)
        print(res) 
        break
