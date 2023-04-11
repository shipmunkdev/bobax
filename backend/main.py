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
  return data
