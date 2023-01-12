# from sympy import *
import sympy
import math
# import scipy
import numpy as np

sympy.init_printing()

# Pass the symbols to be as arguments to the symbols() function
# and store them in corresponding variables.
# x, y = sympy.symbols('x, y')

def findMatchingParenthesis(str,i):
    """
    str: string
    i: index of opening parenthesis
    return: index of closing parenthesis
    
    """
    count=0
    while(i<len(str)):
        if(str[i]=="("):
            count+=1
        elif(str[i]==")"):
            count-=1
        if(count==0):
            return i
        i+=1
    return -1

def stringToStrEquation(str):
    """
    Converts any mathematical valid string to python format string
    """
    str= str.replace(" ","")
    str= str.replace("^","**")
    eq=""
    print(str)
    i=0
    while(i<len(str)):
        if(str[i:].startswith("sin") or str[i:].startswith("cos") or 
            str[i:].startswith("tan") or str[i:].startswith("log") ):
            if(str[i-1].isdigit() or str[i-1].isalpha()):
                eq= eq+"*"
            # print(eq)
            # eq=eq+"sympy."+str[i:i+3]
            eq=eq+str[i:i+3]
            # print(eq)
            i+=2
        elif(str[i:].startswith("sqrt")):
            if(str[i-1].isdigit() or str[i-1].isalpha()):
                eq= eq+"*"
            eq=eq+"sqrt"
            i+=3
        elif (str[i].isalpha()):
            if (i+1<len(str) and str[i+1]=="("):
                eq=eq+str[i]+"*"
                # print("eq(",eq)
            elif(i>0 and (str[i-1].isdigit() or str[i-1].isalpha())):
                # print("str",str)
                eq= eq+"*"+str[i]
                # print("eq*",eq,str[i-1],str[i],i,i-1)
            else:
                eq=eq+str[i]
                # print("eqelse",eq)

            # print(eq)
        elif (str[i]=="("):
            # check if eq endswith a variable or a number power to a variable
            if ((not eq.endswith("sin")) or (not eq.endswith("cos")) or (not eq.endswith("tan")) or (not eq.endswith("log")) or (not eq.endswith("sqrt"))):
                pass
            elif (eq[-1].isalpha() or eq[-1].isdigit() and eq[-2]=="*" and eq[-3]=="*" ):
                eq=eq+"*"

            # solve the paranthesis
            # k=i+1
            # while(k<len(str) and str[k]!=')'):
            #     k+=1
            k=findMatchingParenthesis(str,i)
            new=str[i+1:k]
            # print(k)
            i=k
            # print(str[i])
            new= "("+stringToStrEquation(new)+")"
            # print(new)
            eq=eq+new

            # check if there is a variable followed by bracket in the str or another bracket
            if (k+1<len(str) and (str[k+1].isalpha() or str[k+1]=="(" )):
                eq=eq+"*"
                # print(eq)
        else:
            eq=eq+str[i]
        # print(eq,i)
        i+=1
            
    return eq

            
      
k=stringToStrEquation("4x^2y^3 sin(6x+1)( 6x )(x) -3xy^5* ( +1x^5 +5x -1 ) ")
print(k) 
eq=sympy.sympify(k)
print(eq)
eq= sympy.simplify(eq)
print(eq)
# x=sympy.Symbol("x")
# p=sympy.sin(x)
# print(p)

def getCoefIndex(str):
        if(len(str) == 0):
            return 0
        flag = 1
        if(str[0] == '-'):
            flag = -1
        p = "0"
        i = 1
        while(i < len(str) and str[i].isdigit()):
            p += str[i]
            i += 1
        return i

def getVariables(str):
        i = 1
        while(i < len(str) and str[i].isdigit()):
            i += 1

        if(i < len(str) and str[i].isalpha()):
            vars = []
            while(i < len(str)):
                if(str[i].isalpha()):
                    vars.append(str[i])
                i += 1
            return vars
        else:
            return ['']

def equationToString(poly):
    """
    converts sympy polynomial to our valid string polynomial
    """
    var = str(poly).replace("**", "^")
    var = var.replace("*", "")
    # insert a + at 0th index
    if (var[0] == "-"):
        var = "- "+var[1:]
    else:
        var = "+ "+var
    l = var.split()
    ans = []
    for i in range(0, len(l), 2):
        term = ""
        term = l[i]+l[i+1]
        ans.append(term)
    return " ".join(ans)

def stringToEquation(str):
    """
    converts string polynomial to sympy polynomial
    str: -4x^3 +3x^2 +2x +1x
    return : -4*x**3 + 3*x**2 + 3*x

    str : +4x^2y^3 -3xy
    return : 4*x**2*y**3 - 3*x*y

    brackets should be seperated from expression by a space
    str : +4x^2y^3 -3xy( x-1 )
    return : 4*x**2*y**3 - 3*x*y*(x - 1)
    """
    str = str.strip()
    str= str.replace("^", "**")
    l=str.split(" ")
    print(l)
    p=[]
    flag=0
    if (l[-1][1:].isdigit()):
        p=l[:-1]
        flag=1
    else:
        p=l
    
    for i in range(len(p)):
        # index= getCoefIndex(p[i])
        # p[i]= p[i][:index]+"*"+p[i][index:]
        vars=[]
        if(i<len(p)):
            vars= getVariables(p[i])
        for j in range(len(vars)):
            if(i<len(p) and p[i]=="("):
                k=i+1
                while(k<len(p) and p[k]!=')'):
                    k+=1
                print(p[i+1:k])
                new= p[i+1:k]
                new= "("+stringToEquation(" ".join(new)).__str__()+")"
                p[i]=new
                p=p[:i+1]+p[k+1:]
                print("new p :",p)
                continue

            if (i<len(p) and p[i].find(vars[j])!=-1):
                p[i]= p[i].replace(vars[j], "*"+vars[j])


    var = " ".join(p)
    if (flag==1):
        var= var +" "+ l[-1]
    print(var)
    return sympy.sympify(var)


# k=stringToEquation("+4x^2y^3* ( +7x ) -3xy^5* ( +1x^5 +5x -1 ) ")
# print(k)

def equationToStr(poly):
    """
    converts sympy polynomial to string polynomial
    """
    var = str(poly).replace("**", "^")
    var = var.replace("*", "")
    return var

class Multinomial():
    def __init__(self, str):
        """
        :param poly: A string representing a polynomial
        Valid Polynomial
        Correct example: -4x^3 +3x^2 +2x +1
        Incorrect example: -4x^3 +3x^2 +2x +1 + 2x^2
        Incorrect example: -4x^3 +3x^2 + 2x + 1 + 2x^2

        variables should be single character only

        valid symbols - x, y, z

        """
        self.str = stringToStrEquation(str)
        self.poly_exp= sympy.sympify(str)
        self.poly_exp= sympy.simplify(self.poly_exp)
        poly = self.poly_exp.as_poly()
        print(poly)
        # get all terms

        

    def equationToString(self, poly):
        """
        converts sympy polynomial to our valid string polynomial
        """
        var = str(poly).replace("**", "^")
        var = var.replace("*", "")
        # insert a + at 0th index
        if (var[0] == "-"):
            var = "- "+var[1:]
        else:
            var = "+ "+var
        l = var.split()
        ans = []
        for i in range(0, len(l), 2):
            term = ""
            term = l[i]+l[i+1]
            ans.append(term)
        return " ".join(ans)

    def __str__(self):
        return self.str

    def __repr__(self):
        return self.str
    
    def __neg__(self):
        """
        negates the polynomial
        """
        # sympy negation
        result = -self.poly_exp
        return result
    def __add__(self, other):
        """
        adds two polynomials
        """
        # sympy addition
        result = self.poly_exp + other.poly_exp
        eq = result.__str__()  # string
        # print(type(result))
        # print(eq)
        # return Multinomial(self.equationToString(eq))
        return result
        

    def __sub__(self, other):
        """
        subtracts two polynomials
        """
        # sympy addition
        result = self.poly_exp - other.poly_exp
        eq = result.__str__()  # string
        return result


    def __mul__(self, other):
        """
        multiplies two polynomials
        """
        # sympy addition
        result = self.poly_exp * other.poly_exp
        eq = result.__str__()  # string
        # return Multinomial(self.equationToString(eq[1:-1]))
        return result

    def __truediv__(self,other):
        """
        divides two polynomials
        """
        # sympy addition
        result= sympy.cse(self.poly_exp / other.poly_exp)
        result=sympy.sympify(result)
        eq= result.__str__() # string
        return result
    
    def factors(self):
        """
        returns the factors of a polynomial
        """
        result = sympy.factor(self.poly_exp)
        eq = result.__str__()  # string
        print(eq)
        return result


    # def __pow__(self,n):
    #     """
    #     raises a polynomial to a power
    #     """
    #     result=self.poly_exp
    #     while(n!=1):
    #         result = result * self.poly_exp
    #         print("result ", result)
    #         n-=1
    #     eq = result.__str__()
    #     # print(eq)
    #     return result  

    def __pow__(self,other):
        """
        raises a polynomial to a power
        """
        result=self.poly_exp** other.poly_exp
        eq = result.__str__()
        # print(eq)
        return result   

    def solution(self):
        """
        returns the solution of a polynomial
        """
        result = sympy.solve(self.poly_exp)
        # print(result)
        return result  # list
    
    def solve(self,other):
        """
        Solves 2 polynomials
        """
        

    def draw(self):
        """
        draws the polynomial
        """
        plot=sympy.plot(self.poly_exp,show=False).save("D:\\mama\\addition\\src\\img\\draw.png")

        # print(plot.save("1.png"))
        # print(type(plot))
        return "D:\\mama\\addition\\src\\img\\draw.png"

    def integrate(self):
        """
        integrates the polynomial
        """
        result = sympy.integrate(self.poly_exp)
        eq = result.__str__()
        print(eq)
        return result
    
    def differentiate(self):
        """
        differentiates the polynomial
        """
        result = sympy.diff(self.poly_exp)
        eq = result.__str__()
        print(eq)
        return result
    # def getIntersection(self,other):
    #     """
    #     returns the intersection of two polynomials
    #     """
    #     result = sympy.solve(self.poly_exp-other.poly_exp)
    #     # print(result)
    #     eq= result.__str__()
    #     return result
    #     # return result
    
    def getRoots(self):
        """
        returns the roots of a polynomial
        """
        result = sympy.roots(self.poly_exp)
        # print(result)
        return result
    
    def getDegree(self):
        """
        returns the degree of a polynomial
        """
        result = sympy.degree(self.poly_exp)
        # print(result)
        return result

    def getLCM(self,other):
        """
        returns the LCM of two polynomials
        """
        result = sympy.lcm(self.poly_exp,other.poly_exp)
        eq= result.__str__()
        return result
    
    def getGCD(self,other):
        """
        returns the GCD of two polynomials
        """
        result = sympy.gcd(self.poly_exp,other.poly_exp)
        eq= result.__str__()
        return result
    
    def getLCMList(self,other):
        """
        returns the LCM of two polynomials
        """
        result = sympy.lcm_list([self.poly_exp,other.poly_exp])
        eq= result.__str__()
        return result
    
    def getGCDList(self,other):
        """
        returns the GCD of two polynomials
        """
        result = sympy.gcd_list([self.poly_exp,other.poly_exp])
        eq= result.__str__()
        return result
    
    def drawPoly(self,other):
        """
        draws the polynomial
        """
        plot=sympy.plot(self.poly_exp,other.poly_exp,show=False).save("D:\\mama\\addition\\src\\img\\polynomialdraw.png")
        # print(plot.save("1.png"))
        # print(type(plot))
        return "addition\\src\\img\\polynomialdraw.png"


"""
c = Multinomial("+6x^4y^4 -4x^3 +3x^2 +2x +4")
# print(c.poly_exp)
d = Multinomial("-12x^4y^4 -4x^3 +3x^2 +2x +4")
# print(d.poly_exp)
print("c+d : ", c+d)
print("c-d : ", c-d)
print("c*d : ", c*d)
# print("c/d : ",)

a = Multinomial("+a^2 -b^2")
b = Multinomial("+a +b")
e = Multinomial("+2x^2 +15x -5")
f=Multinomial("+x^2 -2x +1")
print("solve e f :", e.getIntersection(f))
print("a/b : ", c.factors())
print("c : ", e.solution())
print("e : ", e.integrate())
print("e : ", e.differentiate())
print("power : ",e**2)
a.draw()
# print(d.equationToString(d.poly_exp))
"""


"""

# to convert strings to sympy expressions
k=sympy.sympify("10/5+4/2", evaluate=False) 
print(k)
# to convert sympy expressions to strings
# print(k.__str__())

x=sympy.Symbol('x')
expr="x**2+3*x+2" 
expr1=sympy.sympify(expr) 
print(expr1) 
print(expr1.subs(x,2)) # substiting x as 2
"""

