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
  bobaList = graphene.List(BobaType)

  def resolve_bobaList(self, info):
    with open('./database/bobalist.json') as f:
        bobajson = json.load(f)['data']
    return bobajson

schemaBoba = graphene.Schema(query=BobaQuery)
