import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

class BarGraphs:
    def __init__(self, data:list,labels:list,x,y):
        self.data = np.array(data)
        self.labels = labels
        self.x=x
        self.y=y

    def plot(self):
        plt.bar(range(len(self.data)), self.data)
        plt.xticks(range(len(self.data)), self.labels)
        plt.xlabel(self.x)
        plt.ylabel(self.y)
        #save the bar graph
        plt.savefig("D:\\mama\\addition\\src\\img\\bargraph.png")
    
    def __str__(self):
        return str(self.data)
    
    def __repr__(self):
        return str(self.data)
    
    def __add__(self,other):
        if( self.labels==other.labels and self.x==other.x and self.y==other.y):
            return BarGraphs(self.data+other.data,self.labels,self.x,self.y)
        else:
            return "Error: Labels and axis names must be same"
    
    def __sub__(self,other):
        if( self.labels==other.labels and self.x==other.x and self.y==other.y):
            return BarGraphs(self.data-other.data,self.labels,self.x,self.y)
        else:
            return "Error: Labels and axis names must be same"


l="[1,2,3,4,45,54]"
l=eval(l)
a= BarGraphs(l,["Ram","Shyam","Hari","abd","edhywbd","gtfdxftgy"],"wdwed","sdewfgz")
print(a.data)
a.plot()
'''
# Program to demonstrate the use of eval() and exec() functions

l = "[2,4,6,7,9,4]"
l = eval(l)
print(l)


# Program to demonstrate the use of exec() function

s="""
def factorial():
    n = 5
    fact = 1
    for i in range(1,n+1):
        fact = fact * i
    return fact
"""
exec(s)
print(factorial())


'''