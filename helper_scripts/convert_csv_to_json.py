import csv
import json

# convert google sheet csv exports to json

valid = ["name",
         "address",
         "min_price",
         "max_price",
         "monthly_fees",
         "one_time_fees",
         "sq_ft",
         "covered_parking",
         "laundry",
         "tt_unionStation",
         "tt_costco",
         "tt_grocery",
         "tt_park",
         "tt_dogPark",
         "tt_line",
         "tt_airport",
         "link",
         "notes",
         "image_url"]


def csv_to_json(csvFilePath, jsonFilePath):
    jsonArray = []
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            to_delete = []
            for key, value in row.items():
                if (key not in valid):
                    to_delete.append(key)
                elif (value.isdigit()):
                    row[key] = int(value)
                elif (value == "TRUE"):
                    row[key] = True
                elif (value == "FALSE"):
                    row[key] = False
                elif (value == "?" or value == ""):
                    row[key] = None
            for key in to_delete:
                row.pop(key)
            for col in valid:
                if col not in row:
                    row[col] = None
            jsonArray.append(row)
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonString = json.dumps(jsonArray, indent=4)
        jsonf.write(jsonString)


csvFilePath = r'input.csv'
jsonFilePath = r'output.json'
csv_to_json(csvFilePath, jsonFilePath)
