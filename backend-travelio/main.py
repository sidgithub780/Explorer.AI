import os
import openai
import subprocess
from flask import Flask, request, jsonify

#supabase stuff
from supabase import create_client #import supabase
import json
API_URL = 'https://rhaggswdriuihhlsoqrr.supabase.co/' #enter here
API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoYWdnc3dkcml1aWhobHNvcXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ4NzYzNjUsImV4cCI6MjAxMDQ1MjM2NX0.0eScEjA_vxTTF1gAKFaIV5eyV5JlfHppnGiig5QNDtg' #enter here
supabase = create_client(API_URL, API_KEY)
supabase 

#api key, profile instances
openai.api_key = os.environ["OPENAI_API_KEY"]
profile_likes = ""
profile_dislikes = ""
profile_experience = ""
profile_age = ""

#flask implementation
app = Flask(__name__)
@app.route('/', methods=['POST']) #replace endpoint later
def generate_itinerary():
    #data = request.form.get_json()

    # Extract data from the JSON payload sent by the front end
    destination = request.form.get('destination')
    duration = request.form.get('duration')
    month = request.form.get('month')
    style = request.form.get('style')
    people = request.form.get('people')
    budget = request.form.get('budget')

    #General questions 
    destination = input("Please enter the destination you are planning to visit: ") #These may be uneccesary, because of form data. THis is old.
    duration = input("Please enter the number of days you plan to stay: ")
    month = input("Please enter the month you plan to travel: ")
    style = input("Please enter which vacation style you prefer (relaxed, moderate, fast-paced): ")
    people = input("How many people will be traveling? (Enter 1 if alone): ")
    budget = input("What is your budget? (low/medium/high)")

    #If profile is NOT configured
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
        itinerary = {'itinerary': x}
        return jsonify(itinerary)
    else: #if profile IS configured
        gptString = (
            "\"Please create a detailed, day by day vacation plan to " 
            + destination + " with a duration of " + duration + " days with a " 
            + style + " pace during the month of " + month + " built around a trip with " + people + " people" + "with a  " + budget + " budget" +
            ". Some things to keep in mind are, I like " + str(profile_likes) + ", I DON'T like " + str(profile_dislikes) + ". I am also a " + profile_experience
            + " traveler." + " I am " + profile_age + " years old. Please keep all of this info in mind for my itinerary" + 
            ". Make sure to add a *** between each day so it is easy to separate the days, and label activities by with what time of day it would occur" + "\""
        )
        cmd = "sgpt txt " + gptString
        proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
        (out, err) = proc.communicate()
        print("program output:", out.decode())  # Use decode() to convert bytes to a string
        final_output = out.decode()  # Convert the bytes output to a string
        x = final_output.split("***\n")
        print("This is your personalized intinerary: " + str(x))
        response_data = {'itinerary': x}
        return jsonify(response_data)
    

if __name__ == "__main__":
    app.run(debug=True)



#this is the conversational part, removed for now
"""
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
"""


def create_profile(likes, dislikes, experience, age): 
    profile_likes = likes
    profile_dislikes = dislikes
    profile_experience = experience
    profile_age = age
    

"""
import os
import openai
import subprocess

#supabase stuff
from supabase import create_client #import supabase
import json
API_URL = 'https://rhaggswdriuihhlsoqrr.supabase.co/' #enter here
API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoYWdnc3dkcml1aWhobHNvcXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ4NzYzNjUsImV4cCI6MjAxMDQ1MjM2NX0.0eScEjA_vxTTF1gAKFaIV5eyV5JlfHppnGiig5QNDtg' #enter here
supabase = create_client(API_URL, API_KEY)
supabase 


Example of how to insert a single record into a table
data = {
    'id': 1,
    'name': 'Vishnu',
    'age': 22,
    'country': 'India',
    'programming_languages': json.dumps(['C++', 'python', 'Rust'])
}
supabase.table('demo-database').insert(data).execute() # inserting one record

APIResponse(data=[{'id': 1, 'created_at': '2022-07-17T08:58:24.105377+00:00', 'name': 'Vishnu', 'age': 22, 'country': 'India', 'programming_languages': '["C++", "python", "Rust"]'}], count=None)



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
    
"""