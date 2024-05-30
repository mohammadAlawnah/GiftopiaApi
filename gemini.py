import pathlib
import textwrap
from bs4 import BeautifulSoup
import pandas as pd
import requests
import google.generativeai as genai



import threading
from concurrent.futures import ThreadPoolExecutor, as_completed


# Used to securely store your API key
# from google.colab import userdata

def to_markdown(text):
  text = text.replace('•', '  *')
  return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))


from IPython.display import display
from IPython.display import Markdown

import os

google_api_key = os.getenv('GOOGLE_API_KEY');

if not google_api_key:
    raise ValueError("Missing GOOGLE_API_KEY environment variable")

genai.configure(api_key=google_api_key)

safety_settings = [
  {
    "category": "HARM_CATEGORY_HARASSMENT",
    "threshold": "BLOCK_NONE"
  },
  {
    "category": "HARM_CATEGORY_HATE_SPEECH",
    "threshold": "BLOCK_NONE"
  },
  {
    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    "threshold": "BLOCK_NONE"
  },
  {
    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
    "threshold": "BLOCK_NONE"

    # "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  }
]

# for models in genai.list_models():
#   if 'generateContent' in models.supported_generation_methods:
#     print(models.name)



model = genai.GenerativeModel('gemini-pro')




def Generate_gifts(req):
    response = model.generate_content(
        f'Give me the names of 1 gift It can be purchased online each gift  in a one line without mentioning the specifications of the gift, just the type of gift and the amount of gifts I would buy with these specifications ${req} Give me without any symbols or letters before it in english Returns a value from one, two, or three words only',
        safety_settings=safety_settings
    )
    return(to_markdown(response.text).data)


def gender(req):
  response = model.generate_content(
    f'${req} Is this gift for a male or a female? If it is for a male only, return the word male. If it is for a female only, return the word female. If you do not know who it is, return the word unknown.',
    safety_settings=safety_settings
  )
  return(to_markdown(response.text).data)

def age(req):
  response = model.generate_content(
    f'${req}  من النص كم تتوقع عمر الشخص الي بدي اجبله هديه رجع رقم فقط',
    safety_settings=safety_settings
  )
  return(to_markdown(response.text).data)

def ExOrCh(req):
  response = model.generate_content(
    f'${req} From your analysis of the text, do you expect the gift to be expensive or cheap? Just answer with expensive or cheap ',
    safety_settings=safety_settings
  )
  return(to_markdown(response.text).data)



def send_response(gender,age,gifts,ExOrCh,url):
  Sendurl = "http://127.0.0.1:7080/AiResponse"
  data = {
    "gender": gender,
    "age": age,
    "gifts": gifts,
    "ExpensiveOrCheap" : ExOrCh,
    "url" : url
  }
  response = requests.post(Sendurl, json=data)


def handel_Data(gender,age,gifts,ExOrCh):
   key = gifts
   key = key.replace(" ", '+')
   key = key[1:];
   url = f"https://www.amazon.com/s?k={key}"
  #  print(url)
#    wepScraping(url)
  #  send_response(gender,age,gifts,ExOrCh,url)


import requests
import time



def xx(req):
   handel_Data(gender(req),age(req),Generate_gifts(req),ExOrCh(req))
