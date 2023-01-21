class Sets:
    def __init__(self,data):
        self.data:set = set(data)
    
    def __str__(self):
        return str(self.data)
    
    def __repr__(self):
        return str(self.data)
    
    def __add__(self,other):
        return Sets(self.data.union(other.data))
    
    def __sub__(self,other):
        return Sets(self.data.difference(other.data))
    
    def __mul__(self,other):
        return Sets(self.data.intersection(other.data))
    
    def __truediv__(self,other):
        return Sets(self.data.symmetric_difference(other.data))

    def __iadd__(self,other):
        self.data = self.data.union(other.data)
        return self
    
    def __isub__(self,other):
        self.data = self.data.difference(other.data)
        return self
    
    def __imul__(self,other):
        self.data = self.data.intersection(other.data)
        return self
    
    def __itruediv__(self,other):
        self.data = self.data.symmetric_difference(other.data)
        return self
    
    def __and__(self,other):
        return self.data & other.data
    
    def __or__(self,other):
        return self.data | other.data
    
    def __xor__(self,other):
        return self.data ^ other.data
    
    
    def __lshift__(self,other):
        return self.data << other.data
    
    def __rshift__(self,other):
        return self.data >> other.data
    
    def __rand__(self,other):
        return other.data & self.data
    
    def __ror__(self,other):
        return other.data | self.data
    
    def __rxor__(self,other):
        return other.data ^ self.data
    
    def __rlshift__(self,other):
        return other.data << self.data
    
    def __rrshift__(self,other):
        return other.data >> self.data
    
    def __eq__(self,other):
        return self.data==other.data
    
    def __ne__(self,other):
        return self.data!=other.data
    
    def __gt__(self,other):
        return self.data>other.data
    
    def __ge__(self,other):
        return self.data>=other.data
    
    def __lt__(self,other):
        return self.data<other.data
    
    def __le__(self,other):
        return self.data<=other.data
    
    def __contains__(self,other):
        return other in self.data
    
    def __len__(self):
        return len(self.data)
    
    def __iter__(self):
        return iter(self.data)
    
