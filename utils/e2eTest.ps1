# GET some data
Invoke-WebRequest "http://localhost:1337/sensorMessageSchema"

# GET all data
Invoke-WebRequest "http://localhost:1337/schemas/sensorMessage/v2"
Invoke-WebRequest "http://localhost:1337/data"
Invoke-WebRequest "http://localhost:1337/"

# GET all data and parse as JSON
(Invoke-RestMethod -Uri "http://localhost:1337/data" )[0].periodDurationSeconds

# 404
Invoke-WebRequest "http://localhost:1337/asdfqwerty"

# prohibited methds (at least one example)
Invoke-WebRequest "http://localhost:1337/schemas/sensorMessage/v2" -Method Patch
Invoke-WebRequest "http://localhost:1337/sensorData"

# POST data
$badJson= @{  Username    = "Test01"; 
            Permissions = "Read, Write, Modify"
            DateEmploymentBegan = (get-date -Format "MM/dd/yyyy")
            } | ConvertTo-Json

Invoke-WebRequest -uri "http://localhost:1337/sensorData" -Method POST -Body $badJson

$goodJson= @{ periodStart= "2018-04-05T13:32:23.123Z"; 
            periodDurationSeconds= 1235;
            unit= "Celsius";
            avg=4;
            stdDev=3.1415;
            nObs=123;
            sensorId="urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6";
            sensorLocation="I hallen på Klippan"
            } | ConvertTo-Json

Invoke-WebRequest -uri "http://localhost:1337/sensorData" -Method POST -Body $goodJson

# for testing, postdeploy
#Invoke-WebRequest -uri "https://hbmsensors.azurewebsites.net/sensorData" -Method POST -Body $goodJson


# Make sure temps can be shows
Start-Process http://localhost:1337/visualization


# extract some limited data (not all rows)


$Parameters = [System.Web.HttpUtility]::ParseQueryString([String]::Empty)
#$Parameters['periodStartDay'] = '2018-04-01'
#$Parameters['sensorLocation'] = 'i hallen pa klippan'
#$Parameters['sensorId'] = 'urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6'
$Request = [System.UriBuilder]'http://localhost:1337/data'
$Request.Query = $Parameters.ToString()
Invoke-RestMethod -Uri $Request.Uri -Method Get # <-- optional, Get is the default
