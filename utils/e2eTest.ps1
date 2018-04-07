# GET some data
Invoke-WebRequest "http://localhost:1337/sensorMessageSchema"
Invoke-WebRequest "http://localhost:1337/data"
Invoke-WebRequest "http://localhost:1337/"

# GET all data and parse as JSON
(Invoke-RestMethod -Uri "http://localhost:1337/data" )[0].periodDurationSeconds

# 404
Invoke-WebRequest "http://localhost:1337/asdfqwerty"

# prohibited methds (at least one example)
Invoke-WebRequest "http://localhost:1337/sensorMessageSchema" -Method Patch
Invoke-WebRequest "http://localhost:1337/sensorData"

# POST data
$badJson= @{  Username    = "Test01"; 
            Permissions = "Read, Write, Modify"
            DateEmploymentBegan = (get-date -Format "MM/dd/yyyy")
            } | ConvertTo-Json

Invoke-WebRequest -uri "http://localhost:1337/sensorData" -Method POST -Body $badJson

$goodJson= @{ periodStart= "2018-04-01T13:32:23.123Z"; 
            periodDurationSeconds= 1235;
            unit= "Celsius";
            avg=4;
            stdDev=3.1415;
            nObs=123
            } | ConvertTo-Json

Invoke-WebRequest -uri "http://localhost:1337/sensorData" -Method POST -Body $goodJson