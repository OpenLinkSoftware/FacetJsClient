#! /bin/bash
if [ -z "$1" ]; then
  echo "No input XML file supplied";
  exit 1;
fi

#FCT_SVC=https://linkeddata.uriburner.com/fct/service
FCT_SVC=http://localhost:8896/fct/service

echo "Using endpoint: $FCT_SVC"
curl -X POST -H "Content-Type: text/xml" -d @$1 $FCT_SVC