from sys import argv

import pandas as pd
import uvicorn
from fastapi                 import FastAPI, HTTPException, Query, Body
from fastapi.requests        import Request
from fastapi.middleware.cors import CORSMiddleware
# import sqlite3



app = FastAPI(swagger_ui_parameters={"syntaxHighlight": False})

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to the origin(s) of your React app
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
}

@app.get("/data_env")
def data_env(request : Request) -> dict[str,float]:
	"""
	Calculate the mean of the column by region and by year
	"""


	region_translation = {
        'Ile-De-France' :"AIRPARIF",
        'Provence-Alpes-Cote-D-Azur' : "ATMO SUD",
        'Auvergne-Rhones-Alpes' : "ATMO AUVERGNE-RHÔNE-ALPES",
        'Nouvelle-Aquitaine' : "ATMO NOUVELLE-AQUITAINE",
        'Occitanie' : "ATMO OCCITANIE",
        'Hauts-De-France' : "ATMO HAUTS DE FRANCE",
        'Grand-Est' : "ATMO GRAND EST",
        'Centre-Val-De-Loire' : "LIG'AIR",
        'Pays-De-La-Loire' : "AIR PAYS DE LA LOIRE",
        'Normandie' : "ATMO NORMANDIE",
        'Bretagne' : "AIR BREIZH",
        'Bourgogne-Franche-Comte' : "ATMO BOURGOGNE-FRANCHE-COMTE",
        'Corse' : "QUALITAIR CORSE",
    }
	
	region_list = list(region_translation.keys())

	result_dict = {}
	print(region_list)
	for region in region_list:
		region_data = DATABASE[DATABASE["Organisme"] == region_translation[region]]["valeur"]
		result_dict[region] = region_data.mean()


	return result_dict

if __name__ == "__main__":
	PORT        = int(argv[1])
	DATABASE    = pd.read_csv(f'../data/dataser_env.csv', sep=",")
	uvicorn.run(app, port=PORT, host="0.0.0.0")



# curl -X GET 0.0.0.0:8013/data_env