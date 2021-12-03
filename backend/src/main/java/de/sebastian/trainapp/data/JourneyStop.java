package de.sebastian.trainapp.data;

public class JourneyStop {
    private String stopId;
    private String stopName;
    private double lat;
    private double lon;
    private String arrTime;
    private String depTime;
    private String train;
    private String type;
    private String operator;

    public JourneyStop(){
    }

    public String getStopId() {
        return stopId;
    }

    public void setStopId(String stopId) {
        this.stopId = stopId;
    }

    public String getStopName() {
        return stopName;
    }

    public void setStopName(String stopName) {
        this.stopName = stopName;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLon() {
        return lon;
    }

    public void setLon(double lon) {
        this.lon = lon;
    }

    public String getArrTime() {
        return arrTime;
    }

    public void setArrTime(String arrTime) {
        this.arrTime = arrTime;
    }

    public String getDepTime() {
        return depTime;
    }

    public void setDepTime(String depTime) {
        this.depTime = depTime;
    }

    public String getTrain() {
        return train;
    }

    public void setTrain(String train) {
        this.train = train;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getOperator() {
        return operator;
    }

    public void setOperator(String operator) {
        this.operator = operator;
    }

    @Override
    public String toString() {
        return "JourneyStop{" +
                "stopId='" + stopId + '\'' +
                ", stopName='" + stopName + '\'' +
                ", lat=" + lat +
                ", lon=" + lon +
                ", arrTime='" + arrTime + '\'' +
                ", depTime='" + depTime + '\'' +
                ", train='" + train + '\'' +
                ", type='" + type + '\'' +
                ", operator='" + operator + '\'' +
                '}';
    }
}
