<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Watch Dog!</title>
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide">
    <script src="index.js"></script>
  </head>
  <body>
    <h1 style="color:navy;">
      <a class="las la-eye"></a>
      Watch Dog
      <a class="las la-eye"></a>
    </h1>
    <header>
      <button id = "temperature_button">
          <span class = "dataLink">Temperature</span>
          <i id = "temperature" class="las la-temperature-high"></i>
        </a>
      </button>
      <button id = "humidity_button">
          <span class = "dataLink">Humidity</span>
          <i id = "water" class="las la-water"></i>
        </a>
      </button>
      <button id = "alarm_button">
          <span class = "dataLink">Motion Detect</span>
          <i id = "alarm" class="las la-exclamation-triangle"></i>
        </a>
      </button>
      <button id = "camera_button">
          <span class = "dataLink">Camera</span>
          <i id = "camera" class="las la-video"></i>
      </button>
      <button id = "dashboard_button">
        <span class = "dataLink">Grafana dashboard</span>
      </button>
    </header>
    <main>
      <section>
        <article id = "board">
          <div class = "card">
            <div>
              <p>Temperature</p>
              <iframe id = "current_temp" src="/grafana/d-solo/RyOmzRCMz/sensor-dashboard?orgId=1&from=now-10s&to=now&refresh=5s&theme=light&panelId=12" width="200" height="150" frameborder="0"></iframe>
            </div>
            <div>
              <i id = "temperature" class="las la-temperature-high"></i>
            </div>
          </div>
          <div class = "card">
            <div>
              <p>Humidity</p>
              <iframe id = "current_humd" src="/grafana/d-solo/RyOmzRCMz/sensor-dashboard?orgId=1&from=now-10s&to=now&refresh=5s&theme=light&panelId=14" width="200" height="150" frameborder="0"></iframe>
            </div>
            <div>
              <i id = "water" class="las la-water"></i>
            </div>
          </div>
          <div class = "card">
            <div>
              <p>Motion Detect</p>
              <iframe id = "current_motion" src="/grafana/d-solo/RyOmzRCMz/sensor-dashboard?orgId=1&from=now-10s&to=now&refresh=5s&theme=light&panelId=22" width="200" height="150" frameborder="0"></iframe>
            </div>
            <div>
              <i id = "alarm" class="las la-exclamation-triangle"></i>
            </div>
          </div>
        </article>

        <article id = "dashboard">
          <div id = "temp_Graph" class = "hidden">
            <iframe id = "temp_frame" src="/grafana/d-solo/RyOmzRCMz/sensor-dashboard?orgId=1&from=now-12h&to=now&refresh=1m&panelId=10" width="550" height="450" frameborder="0"></iframe>
          </div>
          <div id = "hum_Graph" class = "hidden">
            <iframe id = "humd_frame" src="/grafana/d-solo/RyOmzRCMz/sensor-dashboard?orgId=1&from=now-12h&to=now&refresh=1m&panelId=4" width="550" height="450" frameborder="0"></iframe>
          </div>
          <div id = "motion_Graph" class = "hidden">
            <iframe id = "humd_frame" src="/grafana/d-solo/RyOmzRCMz/sensor-dashboard?orgId=1&from=now-12h&to=now&refresh=1m&panelId=20" width="550" height="450" frameborder="0"></iframe>
          </div>
          <div id = "cam_Video" class = "hidden">
            <iframe class = "hidden" src="/camera/"  width="450" height="500" frameborder="0"></iframe>
          </div>
        </article>
      </section>
    </main>
  </body>
</html>
