# ControlShift API JSON endpoint

A tiny wrapper to the JSON endpoint of ContorlShift.

Internally uses `axios`

## How to install

```
npm i -S controlshift-json-endpoint
```

## How to use

Import into your project.

Example :

```
import controlshift from 'controlshift-json-endpoint'

const cs = controlshift('your-domain.controlshiftlabs.com)
```

`cs` gives access to each endpoint. Each function returns a promise. The resulting JSON data from ControlShift is directly accessible .

```
const slug = "my-petition-slug"
cs.petition(slug)
	.then( petition => console.log(petition) )
	.catch( (e) => console.log(e) )

```

