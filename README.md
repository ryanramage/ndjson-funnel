# ndjson-funnel

funnel ndjson into an pre-existing object.

It sometime is nice to output a large ndjson stream into an actual json object.

example make a rows array in an existing template object

    echo '{"results":{"ok": true}}' > template.json
    cat something.csv | csv-parser | ndjson-funnel template.json results.rows > final.json
    cat final.json

where final.json will look like

```
{
  "results": {
    "ok": true,
    "rows": [
      {"a": true},
      {"b": false}
    ]
  }
}
```



## CLI Usage

    npm i ndjson-funnel -g
    cat file.json | ndjson-funnel <template.json> <jsonpath> [spacing]

where
 - template.json is the base json file
 - jsonpath is the path to add the ndjson rows
 - spacing is optional, and if provided, tells JSON.stringify the output spacing

## Module Usage


```
npm install ndjson-funnel
```

``` js
var ndjson-funnel = require('ndjson-funnel')
```

## License

MIT
