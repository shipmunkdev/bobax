## How to host FastAPI backend server on Deta Space and Netlify

### 1. Sign up or log in to your Deta Space account at [Deta Space](https://deta.space).

### 2. Install the Deta Space CLI by running one of the following command in your terminal:

```
Mac: curl -fsSL <https://get.deta.dev/space-cli.sh> | sh
Linux: curl -fsSL <https://deta.space/assets/space-cli.sh> | sh
Windows: iwr <https://deta.space/assets/space-cli.ps1> -useb | iex
```

### 3. Authenticate the CLI by navigating to the backend folder in your project and running the following command:

```
cd backend/
space login
```

### 4. Generate an access token by logging in to your Deta Space account, clicking on "Settings" in the search bar, and then selecting "Generate Token".

Paste the generated token into the termainal

### 5. Create a new project on Deta Space by running the following command in your terminal:

```
space new
```

Provide `BobaXBackend` as your project name.

### 6. Push the project to Deta Space by running the following command:

```
space push
```

### 7. Adding the required environment variable for the project.

Navigate to the project on Deta Space, click on the three dots within a circle at the bottom right corner of the project square, and select "Settings" and then "Configuration".
In the ALLOW_CORS field, add the following values to allow CORS:

```
https://bobax.netlify.app/
```

### 8. Once `space push` is compeleted, you will see the following.

    Copy the generated builder instance link for the Netlify.

```
🎉  Successfully pushed your code and updated your Builder instance!
Builder instance: https://xxxxx.deta.app
```

### 9. In Netlify, nvaigate to Site [Configuration/Enviornment variables](https://app.netlify.com/sites/bobax/configuration/env#environment-variables)

    > Note: url path may change based on Netlify updates or custom deployment
    > https://app.netlify.com/sites/bobax/configuration/env#environment-variables

- Create and upload `.env.production.local` file with the following and provide the value of `BACKEND_API` with the copied builder instance link
  > Note: You may also choose "Add a single variable" option

```
# Production API endpoint
BACKEND_API=''
```

### Your web application should now be running with the Deta Space

### 10. (Bonus developer environment) Testing with local and Netlify UI with Deta Space:

- Replace `https://deploy-preview-xxxxx.netlify.app` with netlify preview from PR branch
- Run `space push` to deploy deta space with local changes
- Inside local `.env`, update `REACT_APP_BOBA_FETCH` value with builder instance`https://xxxxx.deta.app`

```
# Local API endpoint
# REACT_APP_BOBA_FETCH='http://localhost:8000'
REACT_APP_BOBA_FETCH=''

# Allow CORS for local development
ALLOW_CORS='http://localhost:3000,https://deploy-preview-xxxxx.netlify.app'
```
