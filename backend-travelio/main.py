import os
import openai
import subprocess

openai.api_key = os.environ["OPENAI_API_KEY"]
destination = input("Please enter the destination you are planning to visit: ")
duration = input("Please enter the number of days you plan to stay: ")
month = input("Please enter the month you plan to travel: ")
style = input("Please enter which vacation style you prefer (relaxed, moderate, fast-paced): ")
gptString = (
    "\"Please create a detailed, day by day vacation plan to " 
    + destination + " with a duration of " + duration + " days with a " 
    + style + " pace during the month of " + month + 
    ". Make sure to add a *** between each day so it is easy to separate the days" + "\""
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