from typing import Literal, get_args
from sys import argv
import json
from math import isnan

import pandas as pd
import uvicorn
from fastapi                 import FastAPI, HTTPException, Query, Body
from fastapi.requests        import Request
from fastapi.middleware.cors import CORSMiddleware
# import sqlite3



Specialties = Literal[
	"cardiologists",
	"dentists",
	"dermatologists",
	"gps",
	"gynaecologists",
	"midwives",
	"ophthalmologists",
	"pediatricians",
	"physiotherapists",
	"psychiatrists",
]

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


@app.get("/sum_prats_consults")
def sum_prats_consults(request : Request) -> tuple[int, int]:
	"""
	Calculate the sums of the prats and total_CS columns
	"""
	amount_of_practicians   = sum(DATABASE["prats"])
	amount_of_consultations = sum(DATABASE["total_CS"])
	return amount_of_practicians, amount_of_consultations

@app.get("/metadata")
def metadata(request : Request) -> tuple[str, float, float]:
	"""
	Return the name, latitude and longitude of the participant
	"""
	return PARTICIPANT, float(LATITUDE), float(LONGITUDE)


@app.get("/avg_specialties_prats_amount_over_years")
def avg_specialties_prats_amount_over_years(request : Request) -> dict[str, float]:
	"""
	Calculate the average of various statistics over the
	years in a dictionary where the key is the specialty
	and the value is the average of the column
	"""
	specialties_dict = {
		specialty: DATABASE[DATABASE["specialty"] == specialty]
		for specialty in get_args(Specialties)
	}
	result : dict[str, float] = {
		specialty: avg_specialty["prats"].mean()
		for specialty, avg_specialty in specialties_dict.items()
	}
	result = {
		k: v if not isnan(v) else 0
		for k, v in result.items()
	}
	print(result)
	return result



if __name__ == "__main__":
	PORT        = int(argv[1])
	PARTICIPANT = argv[2]
	LATITUDE    = argv[3]
	LONGITUDE   = argv[4]
	DATABASE    = pd.read_csv(f'../../sub_datasets/{PARTICIPANT}.tsv', sep="\t")
	uvicorn.run(app, port=PORT, host="0.0.0.0")
