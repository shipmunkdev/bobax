## reserve for toppingslist
import graphene
import json

class ToppingsOptionType(graphene.ObjectType):
    name = graphene.String()
    price = graphene.Float()

class ToppingsType(graphene.ObjectType):
    topping_1 = graphene.Field(ToppingsOptionType)
    topping_2 = graphene.Field(ToppingsOptionType)
    topping_3 = graphene.Field(ToppingsOptionType)
    topping_4 = graphene.Field(ToppingsOptionType)
    topping_5 = graphene.Field(ToppingsOptionType)
    topping_6 = graphene.Field(ToppingsOptionType)
    topping_7 = graphene.Field(ToppingsOptionType)
    topping_8 = graphene.Field(ToppingsOptionType)
    topping_9 = graphene.Field(ToppingsOptionType)
    topping_10 = graphene.Field(ToppingsOptionType)
