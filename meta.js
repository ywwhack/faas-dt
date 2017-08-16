module.exports = {
  "helpers": {
    windowConfig: ftpl => ftpl ?
      `window.CONFIG = {
        ENV: '{{_ .ENV }}',
        API_URL: '{{_ .API_URL }}'
      }` :
      `window.CONFIG = {
        ENV: 'local',
        API_URL: 'http://localhost:8080'
      }`
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "router": {
      "type": "confirm",
      "message": "Install vue-router?"
    },
    "api": {
      "type": "confirm",
      "message": "Use pre-defined api?"
    },
    "apiConfig": {
      "when": "api",
      "type": "list",
      "message": "Pick a pre-defined api style",
      "choices": [
        {
          "name": "axios",
          "value": "axios",
          "short": "Axios"
        }
      ]
    }
  },
  "filters": {
    "src/router/**/*": "router",
    "src/api/**/*": "api"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
