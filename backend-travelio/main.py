import os
import openai


openai.api_key = os.environ["OPENAI_API_KEY"]
destination = input("Please enter the destination you are planning to visit: ")
duration = input("Please enter the number of days you plan to stay: ")
month = input("Please enter the month you plan to travel: ")
style = input("Please enter which vacation style you prefer (relaxed, moderate, fast-paced): ")
gptString = ("\"Please create a detailed, day by day vacation plan to " + destination + " with a duration of " + duration + " days with a " + style + " pace during the month of " + month + "\"")
result = str(os.system("sgpt txt " + gptString))
result2 = "" + str(result)
print(result2)

x = result2.split("Day")
print(x)
print(type(result))
print(type(result2))
print(type(x))


