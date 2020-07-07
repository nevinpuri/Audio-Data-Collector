import os
import datetime
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

textFile.close()
avgAudioData = 0
for obj in soundData:
    avgAudioData += int(obj.audioData)

avgAudioData = round((avgAudioData / 3), 2)

# finalAudioData = {"date": currentDate, "time": currentTime,
#                 "audioData": avgAudioData}

now = datetime.now()

finalAudioData = {"year": now.year,
                  "month": now.month, "date": now.day, "hour": now.hour, "audioData": avgAudioData}

sentAudioData = requests.post(
    "https://nevin.cc/audioAPI/audiodata", data=finalAudioData)


print(sentAudioData)
