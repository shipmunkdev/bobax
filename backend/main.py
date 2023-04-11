from fastapi import FastAPI

import json

app = FastAPI()

@app.get('/')
async def root():
  return {"message": "Hello World"}

@app.get('/boba_list')
async def get_boba_list():
  with open('../database/bobalist.json') as f:
      # Load the JSON data into a Python object
    data = json.load(f)
  return data["bobaList"]

@app.get('/milk_option')
async def get_milk_option():
  with open('../database/milkoption.json') as f:
    milkOption = json.load(f)
  return milkOption["milkOption"]

@app.get('/toppings_option')
async def get_milk_option():
  with open('../database/toppingsoption.json') as f:
    toppingsOption = json.load(f)
  return toppingsOption["toppingsList"]
