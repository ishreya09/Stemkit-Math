# make class Unit

class Unit:
    def __init__(self, value, unit):
        self.value = value
        self.unit = unit

    def convert(self, unit):
        raise NotImplementedError

# make length class unit converter
class Length(Unit):
    def __init__(self, value, unit):
        super().__init__(value, unit)
        self.units = {
            'm': 1,
            'cm': 0.01,
            'mm': 0.001,
            'km': 1000,
            'ft': 0.3048,
            'in': 0.0254,
            'yd': 0.9144,
            'mi': 1609.344
        }
        self.value = value
        self.unit = unit

    def convert(self, unit):
        return self.value * self.units[self.unit] / self.units[unit]

# make mass class unit converter

class Mass(Unit):
    def __init__(self, value, unit):
        super().__init__(value, unit)
        self.units = {
            'kg': 1,
            'g': 0.001,
            'mg': 0.000001,
            'lb': 0.453592,
            'oz': 0.0283495
        }
        self.value = value
        self.unit = unit

    def convert(self, unit):
        return self.value * self.units[self.unit] / self.units[unit]
    
# make volume class unit converter

class Volume(Unit):
    def __init__(self, value, unit):
        super().__init__(value, unit)
        self.units = {
            'l': 1,
            'ml': 0.001,
            'gal': 3.78541,
            'qt': 0.946353,
            'pt': 0.473176,
            'cup': 0.236588,
            'tbsp': 0.0147868,
            'tsp': 0.00492892
        }
        self.value = value
        self.unit = unit

    def convert(self, unit):
        return self.value * self.units[self.unit] / self.units[unit]

# make temperature class unit converter

class Temperature:
    def __init__(self, value, unit):
        self.value = value
        self.unit = unit

    def convert(self, unit):
        if self.unit == 'c' and unit == 'f':
            return self.value * 9/5 + 32
        elif self.unit == 'f' and unit == 'c':
            return (self.value - 32) * 5/9
        elif self.unit == 'c' and unit == 'k':
            return self.value + 273.15
        elif self.unit == 'k' and unit == 'c':
            return self.value - 273.15
        elif self.unit == 'f' and unit == 'k':
            return (self.value - 32) * 5/9 + 273.15
        elif self.unit == 'k' and unit == 'f':
            return (self.value - 273.15) * 9/5 + 32
        else:
            return self.value
        
# make time class unit converter

class Time:
    def __init__(self, value, unit):
        self.value = value
        self.unit = unit

    def convert(self, unit):
        if self.unit == 's' and unit == 'min':
            return self.value / 60
        elif self.unit == 'min' and unit == 's':
            return self.value * 60
        elif self.unit == 's' and unit == 'hr':
            return self.value / 3600
        elif self.unit == 'hr' and unit == 's':
            return self.value * 3600
        elif self.unit == 'min' and unit == 'hr':
            return self.value / 60
        elif self.unit == 'hr' and unit == 'min':
            return self.value * 60
        else:
            return self.value
        
# make speed class unit converter

class Speed:
    def __init__(self, value, unit):
        self.value = value
        self.unit = unit

    def convert(self, unit):
        if self.unit == 'mps' and unit == 'mph':
            return self.value * 2.23694
        elif self.unit == 'mph' and unit == 'mps':
            return self.value / 2.23694
        elif self.unit == 'mps' and unit == 'kph':
            return self.value * 3.6
        elif self.unit == 'kph' and unit == 'mps':
            return self.value / 3.6
        elif self.unit == 'mph' and unit == 'kph':
            return self.value * 1.60934
        elif self.unit == 'kph' and unit == 'mph':
            return self.value / 1.60934
        else:
            return self.value

# make area class unit converter

class Area:
    def __init__(self, value, unit):
        self.value = value
        self.unit = unit

    def convert(self, unit):
        if self.unit == 'm2' and unit == 'cm2':
            return self.value * 10000
        elif self.unit == 'cm2' and unit == 'm2':
            return self.value / 10000
        elif self.unit == 'm2' and unit == 'mm2':
            return self.value * 1000000
        elif self.unit == 'mm2' and unit == 'm2':
            return self.value / 1000000
        elif self.unit == 'cm2' and unit == 'mm2':
            return self.value * 100
        elif self.unit == 'mm2' and unit == 'cm2':
            return self.value / 100
        else:
            return self.value
        
# make pressure class unit converter

class Pressure:
    def __init__(self, value, unit):
        self.value = value
        self.unit = unit

    def convert(self, unit):
        if self.unit == 'pa' and unit == 'kpa':
            return self.value / 1000
        elif self.unit == 'kpa' and unit == 'pa':
            return self.value * 1000
        elif self.unit == 'pa' and unit == 'mpa':
            return self.value / 1000000
        elif self.unit == 'mpa' and unit == 'pa':
            return self.value * 1000000
        elif self.unit == 'kpa' and unit == 'mpa':
            return self.value / 1000
        elif self.unit == 'mpa' and unit == 'kpa':
            return self.value * 1000
        else:
            return self.value
        
# make energy class unit converter

class Energy:
    def __init__(self, value, unit):
        self.value = value
        self.unit = unit

    def convert(self, unit):
        if self.unit == 'j' and unit == 'kj':
            return self.value / 1000
        elif self.unit == 'kj' and unit == 'j':
            return self.value * 1000
        elif self.unit == 'j' and unit == 'mj':
            return self.value / 1000000
        elif self.unit == 'mj' and unit == 'j':
            return self.value * 1000000
        elif self.unit == 'kj' and unit == 'mj':
            return self.value / 1000
        elif self.unit == 'mj' and unit == 'kj':
            return self.value * 1000
        else:
            return self.value
        
# make power class unit converter

class Power:
    def __init__(self, value, unit):
        self.value = value
        self.unit = unit

    def convert(self, unit):
        if self.unit == 'w' and unit == 'kw':
            return self.value / 1000
        elif self.unit == 'kw' and unit == 'w':
            return self.value * 1000
        elif self.unit == 'w' and unit == 'mw':
            return self.value / 1000000
        elif self.unit == 'mw' and unit == 'w':
            return self.value * 1000000
        elif self.unit == 'kw' and unit == 'mw':
            return self.value / 1000
        elif self.unit == 'mw' and unit == 'kw':
            return self.value * 1000
        else:
            return self.value