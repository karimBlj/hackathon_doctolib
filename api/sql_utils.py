from sqlite3  import Connection

def execute_request(
    result_extractor,
    conn             : Connection,
    sql_request_path : str,
    **kwargs
):
    with open(sql_request_path, 'r') as file:
        query_template = file.read()
    template = Template(query_template)
    query = template.render(kwargs)
    cursor = conn.cursor()
    cursor.execute(query)
    extracted = result_extractor(cursor)
    return extracted

def get_single_value_kpi(
    conn             : Connection,
    sql_request_path : str,
    **kwargs,
) -> float:
    return execute_request(
        lambda x: x.fetchone()[0],
        conn,
        sql_request_path,
        **kwargs
    )