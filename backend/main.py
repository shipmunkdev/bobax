import json
import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

if os.environ.get("ENVIRONMENT") == "production":
    boba_list_path = os.environ.get("BOBA_LIST_PATH")
    milk_option_path = os.environ.get("MILK_OPTION_PATH")
    toppings_option_path = os.environ.get("TOPPINGS_OPTION_PATH")
else:
    boba_list_path = "./database/bobalist.json"
    milk_option_path = "./database/milkoption.json"
    toppings_option_path = "./database/toppingsoption.json"

# this is to allow CORS so that you can connect backend and frontend locally
load_dotenv()
origins = os.environ.get("ALLOW_CORS", "").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
async def root():
  return {"message": "Hello World"}

@app.get('/boba_list')
async def get_boba_list():
  with open('./database/bobalist.json') as f:
      # Load the JSON data into a Python object
    bobaList = json.load(f)
  return bobaList["data"]

@app.get('/milk_option')
async def get_milk_option():
  with open('./database/milkoption.json') as f:
    milkOption = json.load(f)
  return milkOption["data"]

@app.get('/toppings_option')
async def get_milk_option():
  with open('./database/toppingsoption.json') as f:
    toppingsOption = json.load(f)
  return toppingsOption["data"]
