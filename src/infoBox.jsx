import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  let cold =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZKdh82cfhDNMFBZL3R_H5tSIKYCsAvMLokA&s";
  let hot =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYTmaZNUD5-MWgfyF-KjFO08Y_GlIQIL7YTw&s";
  let rain =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-xL5qa0G86DPAw1y3_mRpXa5OPEDygEuTQ&s";

  return (
    <div className="infoBox">
      <div className="CardContain">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? rain : info.temp > 20 ? hot : cold}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <p>
                {" "}
                {info.city}&nbsp;&nbsp;
                {info.humidity > 80 ? (
                  <ThunderstormIcon />
                ) : info.temp > 20 ? (
                  <WbSunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </p>
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temprature = {info.temp}&deg;C </p>
              <p>feelLike ={info.feelLike}&deg;C</p>
              <p>humidity ={info.humidity}</p>
              <p>maxTemp ={info.maxTemp}&deg;C</p>
              <p>minTemp ={info.minTemp}&deg;C</p>
              <p>
                The weather is look like {info.weather}. and feel Like{" "}
                {info.feelLike}&deg;C{" "}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
