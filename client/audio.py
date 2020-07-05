import os
from datetime import date, datetime
import requests


class AudioData(object):
    def __init__(self, date, time, audioData):
        self.date = date
        self.time = time
        self.audioData = audioData

    def __repr__(self):
        return str({"date": self.date, "time": self.time, "audioData": self.audioData})
    # for i in range(3):
    #    print(lines[i])


outputFile = open("sound.log", "w")
outputFile.write("")
outputFile.close()
soundListenerProgram = os.popen(
    "soundmeter --collect --seconds 2 --log sound.log")
output = soundListenerProgram.read()
print(output[20])

textFile = open("sound.log", "r")
lines = textFile.read().split("\n")
soundData = []

for i in range(3):
    readFileArray = lines[i].split(" ")
    # soundData.append(
    # {"date": readFileArray[0], "time": readFileArray[1], "audioData": readFileArray[2]})
    soundData.append(
        AudioData(readFileArray[0], readFileArray[1], readFileArray[2]))


avgAudioData = 0
for obj in soundData:
    avgAudioData += int(obj.audioData)

avgAudioData = round((avgAudioData / 3), 2)
currentDate = readFileArray[0]
currentTime = readFileArray[1]


finalAudioData = {"date": currentDate, "time": currentTime,
                  "audioData": avgAudioData}

sentAudioData = requests.post(
    "http://localhost:5000/audioAPI/audiodata", data=finalAudioData)

textFile.close()
print(sentAudioData)
