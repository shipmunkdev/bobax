import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# this is to allow CORS so that you can connect backend and frontend locally
origins = ["http://localhost",
    "http://localhost:8000",
    "http://localhost:3000",
]

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
      data = json.load(f)
  return data.
