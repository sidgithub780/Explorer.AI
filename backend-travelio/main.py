import os
import openai
import subprocess
openai.api_key = os.environ["OPENAI_API_KEY"]
profile_likes = ""
profile_dislikes = ""
profile_experience = ""
profile_age = ""

#General questions
destination = input("Please enter the destination you are planning to visit: ")
duration = input("Please enter the number of days you plan to stay: ")
month = input("Please enter the month you plan to travel: ")
style = input("Please enter which vacation style you prefer (relaxed, moderate, fast-paced): ")
people = input("How many people will be traveling? (Enter 1 if alone): ")
budget = input("What is your budget? (low/medium/high)")
if(profile_likes == "" and profile_dislikes == "" and profile_experience == "" and profile_age == ""):
    #transport here (rental car, etc)
    gptString = (
        "\"Please create a detailed, day by day vacation plan to " 
        + destination + " with a duration of " + duration + " days with a " 
        + style + " pace during the month of " + month + " built around a trip with " + people + " people" + "with a  " + budget + " budget" +
        ". Make sure to add a *** between each day so it is easy to separate the days, and label activities by with what time of day it would occur" + "\""
    )
    cmd = "sgpt txt " + gptString
    proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
    (out, err) = proc.communicate()
    print("program output:", out.decode())  # Use decode() to convert bytes to a string
    final_output = out.decode()  # Convert the bytes output to a string
    x = final_output.split("***\n")
    print("This is your personalized intinerary: " + str(x))
else:
    gptString = (
        "\"Please create a detailed, day by day vacation plan to " 
        + destination + " with a duration of " + duration + " days with a " 
        + style + " pace during the month of " + month + " built around a trip with " + people + " people" + "with a  " + budget + " budget" +
        ". Some things to keep in mind are, I like " + str(profile_likes) + ", I DON'T like " + str(profile_dislikes) + ". I am also a " + profile_experience
        + " traveler." + " I am " + profile_age + " years old. Please keep all of this info in mind for my itinerary" + 
        ". Make sure to add a *** between each day so it is easy to separate the days, and label activities by with what time of day it would occur" + "\""
        cmd = "sgpt txt " + gptString
        proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
        (out, err) = proc.communicate()
        print("program output:", out.decode())  # Use decode() to convert bytes to a string
        final_output = out.decode()  # Convert the bytes output to a string
        x = final_output.split("***\n")
        print("This is your personalized intinerary: " + str(x))
    )

# Ask if user is satisfied
# If yes, terminate, if no, ask for additional comments. Run again with original string and new comments (place what they say in additional comments)
satisfied = input("Are you satisfied with your trip plan (yes/no): ")
if(satisfied == "no"):
    comments = input("Enter what you would like fixed: ")
    #make sure to clear old output
    cmd2 = cmd + comments
    proc = subprocess.Popen(cmd2, stdout=subprocess.PIPE, shell=True)
    (out, err) = proc.communicate()
    print("program output:", out.decode())

def create_profile(likes, dislikes, experience, age): 
    profile_likes = likes
    profile_dislikes = dislikes
    profile_experience = experience
    profile_age = age
    