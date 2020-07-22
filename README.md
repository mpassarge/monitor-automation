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
    "id": 1,
    "serialNumber": "ABCD1234",
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
    "id": 2,
    "serialNumber": "ABCD1234",
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
        "id": 1,
        "serialNumber": "ABCD1234",
        "configuration": {
            "source": "HDMI 1"
        }
    },
    {
    "id": 2,
        "serialNumber": "ABCD1234",
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
    "id": 1,
    "serialNumber": "ABCD1234",
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
        "id": 1,
        "serialNumber": "ABCD1234",
        "configuration": {
            "source": "DisplayPort1"
        }
    }
}
```

**Definition** `POST /configurations`

```json
{
    "name": "hybrid",
    "monitors": [
        {
            "monitorId": 1,
            "source": "mDisplayPort1"
        },
        {
            "monitorId": 3,
            "source": "HDMI2"
        }
    ]
}
```

**Response**
- `201 Created ` on success
'/configurations/hybrid'

**Definition** `GET /configurations`

```json
{
    "enabled": "work",
    "configurations": 
    [
        {
            "name": "work",
            "monitors": [
                {
                    "monitorId": 1,
                    "source": "HDMI 1"
                },
                {
                    "monitorId": 2,
                    "source": "HDMI 2"
                }
            ]
        },
        {
            "name": "personal",
            "monitors": [
                {
                    "monitorId": 1,
                    "source": "DisplayPort1"
                },
                {
                    "monitorId": 2,
                    "source": "DisplayPort1"
                },
                            {
                    "monitorId": 3,
                    "source": "DisplayPort1"
                }
            ]
        },
        {
            "name": "hybrid",
            "monitors": [
                {
                    "monitorId": 1,
                    "source": "mDisplayPort1"
                },
                {
                    "monitorId": 3,
                    "source": "HDMI2"
                }
            ]
        }
    ]
}
```

**Definition** `GET /configurations/work`

**Response** 
- `200 OK ` on success

```json
{
    "name": "work",
    "monitors": [
        {
            "monitorId": 1,
            "source": "HDMI 1"
        },
        {
            "monitorId": 2,
            "source": "HDMI 2"
        }
    ]
}
```

**Definition** `PATCH /configurations/enable?name=personal`

**Response**
= `204 No Content` on success