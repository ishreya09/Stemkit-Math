import math

# define fraction
class Fraction:
    def __init__(self, numerator, denominator):
        self.numerator = numerator
        # check denominator
        if denominator == 0:
            raise ZeroDivisionError("Denominator cannot be zero.")
        self.denominator = denominator
        self.simplify()

    def simplify(self):
        gcd = math.gcd(self.numerator, self.denominator)
        self.numerator //= gcd
        self.denominator //= gcd
    
    def __str__(self):
        return f"{self.numerator}/{self.denominator}"
    
    def __repr__(self):
        return f"Fraction({self.numerator},{self.denominator})"
    
    def __add__(self, other):
        if isinstance(other, int):
            other = Fraction(other, 1)
        k= Fraction(self.numerator * other.denominator + self.denominator * other.numerator, self.denominator * other.denominator)
        k.simplify()
        return k
    
    def __sub__(self, other):
        if isinstance(other, int):
            other = Fraction(other, 1)
        k=Fraction(self.numerator * other.denominator - self.denominator * other.numerator, self.denominator * other.denominator)
        k.simplify()
        return k
    
    def __mul__(self, other):
        if isinstance(other, int):
            other = Fraction(other, 1)
        k=Fraction(self.numerator * other.numerator, self.denominator * other.denominator)
        k.simplify()
        return k
    
    def __truediv__(self, other):
        if (other.numerator ==0):
            raise ZeroDivisionError("Denominator cannot be zero.")
        k=Fraction(self.numerator * other.denominator, self.denominator * other.numerator)
        k.simplify()
        return k
    
    def __eq__(self, other):
        return self.numerator == other.numerator and self.denominator == other.denominator
    
    def __ne__(self, other):
        return not self.__eq__(other)
    
    def __lt__(self, other):
        return self.numerator * other.denominator < self.denominator * other.numerator
    
    def __le__(self, other):
        return self.numerator * other.denominator <= self.denominator * other.numerator
    
    def __gt__(self, other):
        return self.numerator * other.denominator > self.denominator * other.numerator
    
    def __ge__(self, other):
        return self.numerator * other.denominator >= self.denominator * other.numerator
    
    def __abs__(self):
        return Fraction(abs(self.numerator), abs(self.denominator))
    
    def __pow__(self, power):
        return Fraction(self.numerator ** power, self.denominator ** power)
    
    def getMixedFraction(self):
        return MixedFraction(self.numerator // self.denominator, self.numerator % self.denominator, self.denominator)

    def getFraction(self):
        return self
    
    def getDecimal(self):
        return self.numerator / self.denominator
    
    def getNumerator(self):
        return self.numerator
    
    def getDenominator(self):
        return self.denominator
    
    def getWhole(self):
        return self.numerator // self.denominator
    
    def getRemainder(self):
        return self.numerator % self.denominator
    
    
# define Mixed Fractions

class MixedFraction():
    def __init__(self, whole, numerator, denominator):
        self.whole = whole
        # set numerator
        num = whole * denominator + numerator
        # super().__init__(num, denominator)
        self.numerator = num
        self.denominator = denominator
        self.fraction= Fraction(num,denominator)
    
    def __str__(self):
        return f"{self.whole} {self.numerator}/{self.denominator}"
    
    def __repr__(self):
        return f"MixedFraction({self.whole},{self.numerator},{self.denominator})"
    
    def __add__(self, other):
        k= (self.fraction+other.fraction).getMixedFraction()
        k.simplify()
        return k
    
    def __sub__(self, other):   
        k= (self.fraction-other.fraction).getMixedFraction()
        k.simplify()
        return k

    def __mul__(self, other):
        k= (self.fraction*other.fraction).getMixedFraction()
        k.simplify()
        return k
    
    def __truediv__(self, other):
        k= (self.fraction/other.fraction).getMixedFraction()
        k.simplify()
        return k
    
    def __eq__(self, other):
        return self.fraction == other.fraction
    
    def __ne__(self, other):
        return not self.__eq__(other)
    
    def __lt__(self, other):
        return self.fraction < other.fraction
    
    def __le__(self, other):
        return self.fraction <= other.fraction
    
    def __gt__(self, other):
        return self.fraction > other.fraction
    
    def __ge__(self, other):
        return self.fraction >= other.fraction
    
    def __abs__(self):
        return self.fraction.__abs__()
    
    def __pow__(self, power):
        return self.fraction.__pow__(power)
    
    def getFraction(self):
        return self.fraction
    
    def getMixedFraction(self):
        return self
    
    def getDecimal(self):
        return self.fraction.getDecimal()
    
    def getWhole(self):
        return self.whole
    
    def getNumerator(self):
        return self.numerator
    
    def getDenominator(self):
        return self.denominator
    
    def simplify(self):
        self.fraction.simplify()
        self.whole = self.fraction.numerator // self.fraction.denominator
        self.numerator = self.fraction.numerator % self.fraction.denominator

    
a=MixedFraction(1,3,5)
b=MixedFraction(2,4,5)
print(a+b)

# define Complex Fractions

class ComplexFraction(Fraction):
    def __init__(self, real, imaginary, denominator):
        self.real = real
        self.imaginary = imaginary
        # set numerator
        num = real + imaginary * 1j
        super().__init__(num, denominator)
    
    def __str__(self):
        return f"{self.real} + {self.imaginary}i / {self.denominator}"
    
    def __repr__(self):
        return f"ComplexFraction({self.real},{self.imaginary},{self.denominator})"
    
    def __add__(self, other):
        return self+other
    
    def __sub__(self, other):
        return self-other
    
    def __mul__(self, other):
        return self*other
    
    def __truediv__(self, other):
        return self/other


