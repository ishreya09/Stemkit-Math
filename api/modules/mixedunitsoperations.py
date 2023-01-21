# mixed unit operations 
from unitconvertor import *

"""
eg - for class Length

>>> l1 = Length(1, 'm')
>>> l2 = Length(1, 'cm')
>>> l1 + l2

l1= "1m 44cm"
l2= "1m 34cm"
l3= l1+l2
l3= "2m 78cm"
"""

class MixedLength():
    def __init__(self,string):
        # string="144km 453cm"

        # split string into list
        # list=['144km','453cm']
        lis=string.split()

        # get the list of values and units
        # values=[144,453]
        # units=['km','cmm']
        values=[]
        units=[]
        for i in lis:
            # get number in i
            # number=144
            number=int(''.join(filter(str.isdigit, i)))
            values.append(number)
            # get unit in i
            # unit=km
            unit=''.join(filter(str.isalpha, i))
            units.append(unit)

        # get the list of values for unique units
        # values=[144,453]
        # units=['km','cm']
        # unique_units=['km','cm']
        # unique_values=[144,453]
        unique_units=[]
        unique_values=[]
        for i in range(len(units)):
            if units[i] not in unique_units:
                unique_units.append(units[i])
                unique_values.append(values[i])
            else:
                index=unique_units.index(units[i])
                unique_values[index]+=values[i]

        # set the heirarchy of units
        # units=['km','cm']
        # heirarchy=[1000,0.01]
        heirarchy=[]
        for i in unique_units:
            heirarchy.append(Length(1,i).units[i])

        #sort unique_units and unique_values and heirarchy according to values in heirarchy
        # unique_units=['cm','km']
        # unique_values=[453,144]
        # heirarchy=[0.01,1000]
        unique_units, unique_values, heirarchy = zip(*sorted(zip(unique_units, unique_values, heirarchy), key=lambda x: x[2]))

        # convert tuples to list
        unique_units=list(unique_units)
        unique_values=list(unique_values)
        heirarchy=list(heirarchy)

        # convert unique values to values in lowest heirarchy
        # unique_units=['cm','km']
        # unique_values=[453,144]
        # heirarchy=[0.01,1000]
        # unique_values=[4.53,144]
        m=unique_values.copy()
        for i in range(len(m)):
            m[i]=m[i]*heirarchy[i]
        # sum of m
        # sum=148.43
        sum=0 # value in metres
        for i in m:
            sum+=i       

        

        # set class variables
        self.units=unique_units
        self.values=unique_values
        self.heirarchy=heirarchy
        self.metres=sum

    def toString(self):
        string=""
        for i in range(len(self.units)-1,-1,-1):
            string+=str(self.values[i])+self.units[i]+" "
        return string
    
    def __str__(self) -> str:
        return self.toString()
    
    def __repr__(self) -> str:
        return self.toString()
    
    def __add__(self,other):
        # other is a MixedLength object
        # self is a MixedLength object
        # return a MixedLength object
        pass
    
        





a=MixedLength("33km 2cm 231m 324mm")    
print(a.units)
print(a.values)
print(a.heirarchy)
print(a.metres)
print(a.toString())
    
            
