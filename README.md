Tanky is an application for managing aquarium tank data belonging to multiple clients. It was developed with React and utilized an Express API.

### Data Strucure

```js
[
    {
        "owner": "default",
        "ownerID": 0,
        "tankArmory": [
            {
        "tankID": 1,
        "tankName": "Tank 1",
        "pH": 7,
        "NH3": 0,
        "temperature": 68,
        "salinity": 0
            }
        ]
    }
]
```

### React Component Structure

  - App.js (Stateful)
    <!-- - Header.js -->
    - OwnerCard.js
      - ProfilePicture.js (Stateful)
      - Tank.js
      - StatControls.js (Stateful)

stateful ideas: have tank change background image or color
### proxy

- setupProxy.js
  - port: 3008

### dependencies

- express
- axios
- http-proxy-middleware

## API Routes

**managementController.js**

### Owner

get:
  - '/api/owners'
  - '/api/next-owner'
  - '/api/prev-owner'

post:
  - '/api/owner'

put:
  - '/api/owner/:name'

delete:
  - '/api/owner'

### Tank

post:
  - '/api/owner/tankArmory'

put:
  - '/api/owner/tankArmory/:id/:newName'

delete:
  - '/api/owner/tankArmory/:id'

### Stats

COMING SOON!