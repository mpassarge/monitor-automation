# Monitor Automation

This repository holds the REST service needed to automate monitor settings

### Documentation:
Using ddcutil to control commands from PI to monitors [ddcutil docs](https://www.ddcutil.com/command_capabilities/)

# REST Endpoints

**Definition** `GET /monitor/1`

**Response**
- `200 OK ` on success
```json
{
    "id": "1"
    "serial-number": "ABCD1234"
    "configuration": {
        "source": "HDMI 1"
    }
}
```

---
**Definition** `PATCH /monitor/1`

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
    "id": "1"
    "serial-number": "ABCD1234"
    "configuration": {
        "source": "HDMI 2"
    }
}
```