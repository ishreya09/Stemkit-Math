import re

# solves problems like "What is 4 + 3"
# can perform operations on only 2 variables and one operator
def solve_problem(problem):
    # Use regular expressions to extract the numbers and operator from the problem
    numbers = re.findall(r'\d+', problem)
    operator = re.search(r'[+\-*/]', problem).group()

    # Convert the numbers from strings to integers
    numbers = [int(x) for x in numbers]
    result=0
    # Perform the calculation
    if operator == '+':
        result = numbers[0] + numbers[1]
    elif operator == '-':
        result = numbers[0] - numbers[1]
    elif operator == '*':
        result = numbers[0] * numbers[1]
    elif operator == '/':
        result = numbers[0] / numbers[1]

    return result

print(solve_problem("What is 5 + 3"))
print(solve_problem("What is 5 - 3"))
print(solve_problem("What is 5 * 3 equal to?"))
