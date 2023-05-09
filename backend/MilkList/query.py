import graphene
import json

class MilkOptionType(graphene.ObjectType):
    name = graphene.String()

class MilkKeyType(graphene.ObjectType):
    milk_1 = graphene.Field(MilkOptionType)
    milk_2 = graphene.Field(MilkOptionType)
    milk_3 = graphene.Field(MilkOptionType)
    milk_4 = graphene.Field(MilkOptionType)
    milk_5 = graphene.Field(MilkOptionType)

class MilkQuery(graphene.ObjectType):
    List = graphene.Field(MilkKeyType)

    def resolve_List(self, info):
        with open('./database/data.json') as f:
            milkjson = json.load(f)['milkData']

        milk_1 = MilkOptionType(name=milkjson['milk_1']['name'])
        milk_2 = MilkOptionType(name=milkjson['milk_2']['name'])
        milk_3 = MilkOptionType(name=milkjson['milk_3']['name'])
        milk_4 = MilkOptionType(name=milkjson['milk_4']['name'])
        milk_5 = MilkOptionType(name=milkjson['milk_5']['name'])

        return MilkKeyType(
            milk_1=milk_1,
            milk_2=milk_2,
            milk_3=milk_3,
            milk_4=milk_4,
            milk_5=milk_5
        )

schemaMilk = graphene.Schema(query=MilkQuery)
