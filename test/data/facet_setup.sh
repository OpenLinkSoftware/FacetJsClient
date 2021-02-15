#! /bin/bash
isql localhost:1117 dba dba ./ski_resorts.sql
isql localhost:1117 dba dba ./create_free_text_index.sql