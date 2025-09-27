var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.5942103538812606,
        "pitch": 0.12521862843759024,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 3.077784088907137,
          "pitch": 0.2611428914648073,
          "rotation": 0,
          "target": "1-coffee-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-coffee-corner",
      "name": "Coffee Corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.8626795111604055,
        "pitch": 0.22187300841300228,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.10236687294898061,
          "pitch": 0.2101325362910309,
          "rotation": 0,
          "target": "0-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
