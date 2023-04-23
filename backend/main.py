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

class BobaOptionMilkType(graphene.ObjectType):
    name = graphene.String()

class BobaOptionToppingsType(graphene.ObjectType):
    name = graphene.String()
    price = graphene.Float()

class BobaOptionType(graphene.ObjectType):
    milk = graphene.Field(lambda: BobaOptionMilkType)
    toppings = graphene.List(lambda: BobaOptionToppingsType)


class BobaType(graphene.ObjectType):
    id = graphene.ID()
    name = graphene.String()
    description = graphene.String()
    price = graphene.Float()
    imageLink = graphene.String()
    options = graphene.Field(lambda: BobaOptionType)

class BobaQuery(graphene.ObjectType):
    bobaList = graphene.List(BobaType)

    def resolve_bobaList(self, info):
      with open('./database/bobalist.json') as f:
          bobajson = json.load(f)['data']
      return bobajson

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

schema = graphene.Schema(query=BobaQuery)
app.mount("/boba_list", GraphQLApp(schema, on_get=make_graphiql_handler()))  # Graphiql IDE
