# Monitor Automation

This repository holds the REST service needed to automate monitor settings

### Documentation:
Using ddcutil to control commands from PI to monitors [ddcutil docs](https://www.ddcutil.com/command_capabilities/)

# REST Endpoints for each individual monitor

<sup><sup>TODO: Find Best practice for 1 to 1 mapping of endpoint to resource</sup></sup>

**Definition** `GET /monitor`

**Response**
- `200 OK ` on success
```json
{
    "id": 1
    "serial-number": "ABCD1234"
    "configuration": {
        "source": "HDMI 1"
    }
}
```

---
**Definition** `PATCH /monitor`

```json
{
    "configuration": {
        "source": "HDMI 2"
    }
}
```

**Response** 
- `200 OK ` on success
```json
{
    "id": 2
    "serial-number": "ABCD1234"
    "configuration": {
        "source": "HDMI 2"
    }
}
```

# REST Endpoints for monitor controller

**Definition** `GET /monitors`

**Response**
- `200 OK ` on success
```json
[
    {
        "id": 1
        "serial-number": "ABCD1234"
        "configuration": {
            "source": "HDMI 1"
        }
    },
    {
    "id": 2
        "serial-number": "ABCD1234"
        "configuration": {
            "source": "HDMI 2"
        }
    }
]
```

**Definition** `GET /monitors/1`

**Response**
```json
{
    "id": 1
    "serial-number": "ABCD1234"
    "configuration": {
        "source": "HDMI 1"
    }
}
```


**Definition** `PATCH /monitors/1`
```json
{
    "configuration": {
        "source": "DisplayPort1"
    }
}
```

**Response** 
- `200 OK ` on success
```json
{
    {
        "id": 1
        "serial-number": "ABCD1234"
        "configuration": {
            "source": "DisplayPort1"
        }
    }
}
```