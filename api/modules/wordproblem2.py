import re
from nltk import word_tokenize

"""
This program uses the word_tokenize function from the Natural Language Toolkit (nltk) library to
 break the problem down into individual words (tokens). It then uses a for loop to iterate over the 
 tokens and uses regular expressions to check if a token is a number or a name (in this case 'Ram' or 'Shyam'). 
 If a token is a number, it appends it to the numbers list, if it is a name, it appends it to the names list. 
 After that the program finds the total number of pens by summing up the numbers in the numbers list. Finally, 
 the program returns the solution in the form of a string.

Please note that this is a simple example and a more robust word problem solver would require more 
advanced NLP techniques such as parsing and named entity recognition, as well as knowledge of the 
domain (in this case counting) to be able to understand the problem and generate a solution.





"""

def solve_problem(problem):
    # Tokenize the problem
    tokens = word_tokenize(problem)
    # Initialize variables for holding the numbers and the names
    numbers = []
    names = []
    for token in tokens:
        # Check if the token is a number
        if re.match(r'\d+', token):
            numbers.append(int(token))
        # Check if the token is a name
        elif token.lower() in {"ram","shyam"}:
            names.append(token)
    # Find the total number of pens
    total_pens = sum(numbers)
    # Return the solution in the form of a string
    return f'{names[0]} and {names[1]} have {total_pens} pens in total'

problem = "Ram has 323 pens. Shyam has 22 pens. How many pens do they have in total?"
print(solve_problem(problem))
