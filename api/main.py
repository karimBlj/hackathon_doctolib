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


@app.get("/sum_prats_consults")
def sum_prats_consults(request : Request) -> tuple[int, int]:
	"""
	Calculate the mean of the columns over the years
	"""
	amount_of_practicians   = sum(DATABASE["prats"])
	amount_of_consultations = sum(DATABASE["total_CS"])
	return amount_of_practicians, amount_of_consultations

if __name__ == "__main__":
	PORT        = int(argv[1])
	PARTICIPANT = argv[2]
	DATABASE    = pd.read_csv(f'../../sub_datasets/{PARTICIPANT}.tsv', sep="\t")
	uvicorn.run(app, port=PORT, host="0.0.0.0")
