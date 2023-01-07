import sympy
import math
import numpy as np


sympy.init_printing()


def getCoef(str):
    """
    send a term to this function to get the coeficient
    """
    # print(str)
    if(len(str)==0):
        return 0
    p = str[0]
    i = 1
    while(i<len(str) and str[i].isdigit()):
        p += str[i]
        i += 1
    return int(p)


def getDegree(str):
    """
    Returns the deree of a term in the polynomial
    """
    i = 1
    while(i < len(str) and str[i].isdigit()):
        i += 1

    if(i < len(str) and str[i].isalpha()):
        deg = 0
        while(i<len(str) and str[i].isalpha()):
            i += 1
            if (i<len(str) and str[i] == '^'):
                i+=1
                p = "0"
                while(i<len(str) and str[i].isdigit()):
                    p+=str[i]
                    i += 1
                deg = deg + int(p)
            else:
                deg += 1
        return deg
    else:
        return 0


def getPowers(str):
    """
    returns the tuple of powers of each term
    eg - xyz returns [1,1,1]
    x^2y^3 - returns [2,3]
    """
    i = 1
    while(i < len(str) and str[i].isdigit()):
        i += 1

    if(i < len(str) and str[i].isalpha()):
        deg = []
        while(i<len(str) and str[i].isalpha()):
            i += 1
            if (i<len(str) and str[i] == '^'):
                i+=1
                p = "0"
                while(i<len(str) and str[i].isdigit()):
                    p += str[i]
                    i += 1
                deg.append(int(p))
            else:
                deg.append(1)
        return deg
    else:
        return [0]


def getVariables(str):
    """
    returns the list of powers of each term
    eg - xyz returns ['x','y','z']
    """
    i = 1
    while(i < len(str) and str[i].isdigit()):
        i += 1

    if(i < len(str) and str[i].isalpha()):
        vars = []
        while(i<len(str)):
            if( str[i].isalpha()): 
                vars.append(str[i])
            i += 1
        return vars
    else:
        return ['']



def getPolynomialExp(polynomial):
    """
    returns the string expression of the polynomial
    polynomial : [degree,power,coef,variable] for each term in a list 
    power and variables are again lists
    eg - [[16, [13, 3], -41, ['x', 'y']], [4, [2, 2], 355, ['x', 'y']], [1, [1], 2, ['x']], [0, [0], 1, ['']]]
    """
    exp = ""
    for term in polynomial:
        if(term[2] > 0):
            exp += "+"
        if (term[2]==0):
            continue
        exp += str(term[2])
        for var,power in zip(term[3],term[1]):
            exp += var
            if(power > 1):
                exp += "^"+str(power)
        exp+=" "
    exp=exp[:-1]
    return exp

def sortPolynomial(polynomial):
    """
    sorts the polynomial in descending order of degree
    """
    polynomial.sort(reverse=True)
    return polynomial


class Polynomial:
    def getPolynomialData(self):
        polynomial=[]
        for coef,degree,power,variable in zip(self.coef,self.degrees,self.powers, self.variables):
            polynomial.append([degree,power,coef,variable])
        return polynomial

    def __init__(self, poly):
        """
        :param poly: A string representing a polynomial
        Valid Polynomial
        Correct example: -4x^3 +3x^2 +2x +1
        Incorrect example: -4x^3 +3x^2 +2x +1 + 2x^2
        Incorrect example: -4x^3 +3x^2 + 2x + 1 + 2x^2

        variables should be single character only


        """
        self.poly = poly
        self.terms = poly.split(' ')
        self.coef = [getCoef(term) for term in self.terms]
        print("coef:",self.coef)
        self.degrees = [getDegree(term) for term in self.terms]
        self.powers = [getPowers(term) for term in self.terms]
        self.variables = [getVariables(term) for term in self.terms]
        self.polynomial= self.getPolynomialData()

        # sort
        self.polynomial = sortPolynomial(self.polynomial)
        self.poly = getPolynomialExp(self.polynomial)

        self.terms = poly.split(' ')
        self.coef = [getCoef(term) for term in self.terms]
        self.degrees = [getDegree(term) for term in self.terms]
        self.powers = [getPowers(term) for term in self.terms]
        self.variables = [getVariables(term) for term in self.terms]
        self.polynomial= self.getPolynomialData()

        # store polynomial as nD numpy polynomial
        # self.np_poly = np.poly1d(self.coef)



    def __str__(self):
        return str(self.poly)

    def __repr__(self):
        return str(self.poly)

    
    def __neg__(self):
        p1=self.polynomial
        p3=[]
        for term in p1:
            p3.append([term[0],term[1],-term[2],term[3]])
        k= getPolynomialExp(p3)
        return Polynomial(k)


    def __add__(self, other):
        p1=self.polynomial
        p2= other.polynomial
        p3=[]
        i=0
        j=0
        while(i<len(p1) and j<len(p2)):
            if(p1[i][0] == p2[j][0]):
                if(p1[i][3]==p2[j][3]):
                    if(p1[i][1]==p2[j][1]):
                        print(p2[j])
                        print("hello",p1[i][2],p2[j][2],p1[i][2]+p2[j][2])
                        p3.append([p1[i][0],p1[i][1],p1[i][2]+p2[j][2],p1[i][3]])
                        i+=1
                        j+=1
                    elif (p1[i][1]>p2[j][1]):
                        p3.append(p1[i])
                        i+=1
                    else:
                        p3.append(p2[j])
                        j+=1
                elif(p1[i][3]<p2[j][3]):
                    p3.append(p1[i])
                    i+=1
                else:
                    p3.append(p2[j])
                    j+=1
            elif(p1[i][0] > p2[j][0]):
                p3.append(p1[i])
                i+=1
            else:
                p3.append(p2[j])
                j+=1

        while(i<len(p1)):
            p3.append(p1[i])
            i+=1
        while(j<len(p2)):
            p3.append(p2[j])
            j+=1
        

        # print(p3)

        p= getPolynomialExp(p3)
        # print(p)
        ans= Polynomial(p)
        return ans

    def __sub__(self, other):
        p2=-other
        return self+p2
    

    def __mul__(self, other):
        pass

    def __truediv__(self, other):
        pass

# a= Polynomial("1x^3 +355x^2y^2 +3x^3y +2x +1")
# print(a)
# # print(a.terms)
# # print(a.coef)
# # print(a.degrees)
# print (a)
# b=Polynomial("+4x^2 +5x +25")
# print(b)
# print(a+b)
# print(-a)
# print(b-a)
# print(a-b)

# c=Polynomial("+6x^4 -4x^3 +3x^2 +2x +4")
# d=Polynomial("+6x^4 -4x^3 +3x^2 +2x +4")
# print(c-d)
# print(-d)


