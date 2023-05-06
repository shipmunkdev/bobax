## reserve for bobalist
import graphene
import json

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
  List = graphene.List(BobaType)

  def resolve_List(self, info):
    with open('./database/data.json') as f:
        bobajson = json.load(f)['bobaData']
    return bobajson

schemaBoba = graphene.Schema(query=BobaQuery)
