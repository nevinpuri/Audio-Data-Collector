import sounddevice as sd
import numpy as np

audioData = []
avgData = []

duration = 2

def print_sound(indata, outdata, frames, time, status):
    volume_norm = np.linalg.norm(indata)*10
    audioData.append("A" * int(volume_norm))
 #   print ("A" * int(volume_norm))
    

with sd.Stream(callback=print_sound):
    sd.sleep(duration * 1000)


for dataSample in audioData:
    if len(dataSample) > 0:
        avgData.append(len(dataSample))

average = 0

for k in range(len(avgData)):
    average += avgData[k]

print(average / len(avgData))
    
