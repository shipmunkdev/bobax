import graphene
import json

class ToppingsOptionType(graphene.ObjectType):
    uuid = graphene.UUID()
    name = graphene.String()
    price = graphene.Float()

class ToppingsQuery(graphene.ObjectType):
    List = graphene.List(ToppingsOptionType)

    def resolve_List(self, info):
        with open('./database/toppingsoption.json') as f:
            toppingsjson = json.load(f)['data']
        return toppingsjson

schemaToppings = graphene.Schema(query=ToppingsQuery)
