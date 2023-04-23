import json
import os
import graphene
from starlette_graphene3 import GraphQLApp, make_graphiql_handler
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

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

class Query(graphene.ObjectType):
  testing = graphene.String(name=graphene.String(default_value="Sein"))

  def resolve_testing(self, info, name):
    return 'Hello ,' + name

@app.get('/boba_list')
async def get_boba_list():
  with open('./database/bobalist.json') as f:
    bobaList = json.load(f)
  return bobaList["data"]

@app.get('/milk_list')
async def get_milk_list():
  with open('./database/milkoption.json') as f:
    milkOption = json.load(f)
  return milkOption["data"]

@app.get('/toppings_list')
async def get_toppings_list():
  with open('./database/toppingsoption.json') as f:
    toppingsOption = json.load(f)
  return toppingsOption["data"]

schema = graphene.Schema(query=Query)
app.mount("/", GraphQLApp(schema, on_get=make_graphiql_handler()))  # Graphiql IDE
