- Student can write a functioning react application
- Student can write a functioning Express API
- Student can request data from Express API
- Student can display data from Express API

# frontend checklist

- reset.css
- update package.json
  - main: server => so we can type nodemon without giving file

### proxy
- setupProxy.js
  - port: 3008

### dependencies

- axios
- http-proxy-middleware

### front-end folder-structure

- src/
  - App.js
  - index.js
  - components/
    - header.js (stateless)
    - TankCard.js (Stateful)
        - ManagementCenter.js (Stateful)


# backend checklist

### server folder-structre

- server/
	- index.js
	- controllers
		- tankController.js
		- managementController.js (if time)

### dependencies
- express
- axios (used more for interacting with servers on backend, but in this case in on front end)

### routes

**tankController.js**

get: '/api/tankStats'

post: '/api/tankArmory'

put: '/api/tankStats/:id'

delete: '/api/tankArmory/:id'

**managementController.js**

get: '/api/managerList'

post: '/api/managerList'

put: '/api/managerList/:name'

delete 'api/managerList/:name'

### data

```js
{
  id,
  tankName,
  tankOwner,
  pH,
  NH3,
  temperature,
  salinity
}
```