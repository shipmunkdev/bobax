import graphene
import json

class MilkOptionType(graphene.ObjectType):
    uuid = graphene.UUID()
    name = graphene.String()

class MilkQuery(graphene.ObjectType):
    List = graphene.List(MilkOptionType)

    def resolve_List(self, info):
        with open('./database/milkoption.json') as f:
            milkjson = json.load(f)['data']
        return milkjson

schemaMilk = graphene.Schema(query=MilkQuery)
