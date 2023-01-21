import spacy
from spacy.matcher import Matcher

# Load the spacy model
nlp = spacy.load("en_core_web_sm")

# Define the pattern to match the entities and numbers
matcher = Matcher(nlp.vocab)
pattern = [{"ENT_TYPE": "PERSON"}, {"LOWER": "has"}, {"SHAPE": "ddd"}, {"LOWER": "chocolates"}]
matcher.add("CHOCOLATES", None, pattern)

# Define the pattern to match the actions
matcher2 = Matcher(nlp.vocab)
pattern2 = [{"LOWER": "takes"}, {"SHAPE": "ddd"}, {"LOWER": "chocolates"}]
matcher2.add("TAKES", None, pattern2)

pattern3 = [{"LOWER": "gives"}, {"SHAPE": "ddd"}, {"LOWER": "chocolates"}]
matcher2.add("GIVES", None, pattern3)

# Process the text
doc = nlp("Ram has 323 chocolates. Shyam has 32. if Shyam takes 5 chocolates from Ram, how many is he left with? and if Shyam gives Ram 20 chocolates, how many does Ram have?")

# Find the entities and numbers in the text
matches = matcher(doc)
matches2 = matcher2(doc)

# Create a dictionary to store the entities and their corresponding numbers
chocolates = {}
for ent_id, label, start, end in matches:
    entity = doc[start].text
    number = int(doc[start+2].text)
    chocolates[entity] = number

# Perform the necessary calculations
for ent_id, label, start, end in matches2:
    action = doc[start].text
    number = int(doc[start+1].text)
    entity = doc[start-1].text
    if action == "takes":
        chocolates[entity] -= number
        print(f"{entity} is left with {chocolates[entity]} chocolates")
    elif action == "gives":
        chocolates[entity] += number
        print(f"{entity} now has {chocolates[entity]} chocolates")
