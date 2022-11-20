import csv
import json

# convert google sheet csv exports to json


def csv_to_json(csvFilePath, jsonFilePath):
    jsonArray = []
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            for key, value in row.items():
                if (value.isdigit()):
                    row[key] = int(value)
                elif (value == "TRUE"):
                    row[key] = True
                elif (value == "FALSE"):
                    row[key] = False
            jsonArray.append(row)
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonString = json.dumps(jsonArray, indent=4)
        jsonf.write(jsonString)


csvFilePath = r'input.csv'
jsonFilePath = r'output.json'
csv_to_json(csvFilePath, jsonFilePath)
