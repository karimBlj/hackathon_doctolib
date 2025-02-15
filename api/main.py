import uvicorn
from fastapi          import FastAPI, HTTPException, Query, Body
from fastapi.requests import Request

import sqlite3


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

def validate_user(request : Request):
    try:
        headers = request.headers
        jwt = headers.get('Authorization')
        user = auth.verify_id_token(jwt)
    except Exception as e:
        raise HTTPException(status_code = 404, detail = f"Error while fetching user. Got error: {e}")
    return user

@app.get("/items")
def callback_get_items(request : Request,):
    validate_user(request)
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()
    cursor.execute('SELECT id, name, taxonomy_lvl1, taxonomy_lvl2 FROM items WHERE is_active = TRUE')
    items = cursor.fetchall()
    conn.close()
    if items is None:
        raise HTTPException(status_code=404, detail="Error requesting all items")
    return (
        [{
            "id"            : item[0],
            "name"          : item[1],
            "taxonomy_lvl1" : item[2],
            "taxonomy_lvl2" : item[3],
        } for item in items],
        200,
        headers
    )