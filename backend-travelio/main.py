import os
import openai
import subprocess
openai.api_key = os.environ["OPENAI_API_KEY"]
destination = input("Please enter the destination you are planning to visit: ")
duration = input("Please enter the number of days you plan to stay: ")
month = input("Please enter the month you plan to travel: ")
style = input("Please enter which vacation style you prefer (relaxed, moderate, fast-paced): ")
people = input("How many people will be traveling? (Enter 1 if alone): ")
#budget here
#transport here (rental car, etc)
gptString = (
    "\"Please create a detailed, day by day vacation plan to " 
    + destination + " with a duration of " + duration + " days with a " 
    + style + " pace during the month of " + month + " built around a trip with " + people + " people" + 
    ". Make sure to add a *** between each day so it is easy to separate the days, and label activities by with what time of day it would occur" + "\""
)
cmd = "sgpt txt " + gptString
proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
(out, err) = proc.communicate()
print("program output:", out.decode())  # Use decode() to convert bytes to a string
final_output = out.decode()  # Convert the bytes output to a string
x = final_output.split("***\n")
print("This is final output: " + str(x))
print(len(x))
print(x[0])

# Ask if user is satisfied
# If yes, terminate, if no, ask for additional comments. Run again with original string and new comments (place what they say in additional comments)
satisfied = input("Are you satisfied with your trip plan (yes/no): ")
if satisfied == "yes"
    
else
    