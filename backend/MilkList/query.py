import graphene
import json

class MilkOptionType(graphene.ObjectType):
    name = graphene.String()

# helper function
def create_milk_fields():
    with open('./database/data.json') as f:
        milkjson = json.load(f)['milkData']

    fields = {}
    for i, (key, value) in enumerate(milkjson.items(), start=1):
        field_name = f"milk_{i}"
        field = graphene.Field(MilkOptionType)
        fields[field_name] = field

    return type('MilkKeyType', (graphene.ObjectType,), fields)

# since calling inside take care of the object Type as it is already define in helper funciton
class MilkKeyType(create_milk_fields()):
    pass

class MilkQuery(graphene.ObjectType):
    List = graphene.Field(MilkKeyType)

    def resolve_List(self, info):
        with open('./database/data.json') as f:
            milkjson = json.load(f)['milkData']

        # dynamically creating in query
        milk_values = {}
        for key, value in milkjson.items():
            milk_values[key] = MilkOptionType(name=value['name'])

        return MilkKeyType(**milk_values)

schemaMilk = graphene.Schema(query=MilkQuery)
