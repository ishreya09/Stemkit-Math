# import reduce
from functools import reduce

# program to find hcf of two numbers

def hcf(a,b):
    if b==0:
        return a
    else:
        return hcf(b,a%b)
    
# program to find lcm of two numbers

def lcm(a,b):
    return (a*b)/hcf(a,b)

# program to find hcf of n numbers

def hcf_n(list):
    result = list[0]
    for i in list[1:]:
        result = hcf(result,i)
    return result

# program to find lcm of n numbers

def lcm_n(list):
    result = list[0]
    for i in list[1:]:
        result = lcm(result,i)
    return result

# program to find hcf of n numbers using reduce function

def hcf_n_reduce(list):
    return reduce(hcf,list)

# program to find lcm of n numbers using reduce function

def lcm_n_reduce(list):
    return reduce(lcm,list)



