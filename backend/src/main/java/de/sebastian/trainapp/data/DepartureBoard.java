package de.sebastian.trainapp.data;

public class DepartureBoard {
    private String name;
    private String type;
    private String boardId;
    private String stopId;
    private String stopName;
    private String dateTime;
    private String origin;
    private String track;
    private String detailsId;

    private DepartureBoard() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getBoardId() {
        return boardId;
    }

    public void setBoardId(String boardId) {
        this.boardId = boardId;
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

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getTrack() {
        return track;
    }

    public void setTrack(String track) {
        this.track = track;
    }

    public String getDetailsId() {
        return detailsId;
    }

    public void setDetailsId(String detailsId) {
        this.detailsId = detailsId;
    }

    @Override
    public String toString() {
        return "DepartureBoard{" +
                "name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", boardId='" + boardId + '\'' +
                ", stopId='" + stopId + '\'' +
                ", stopName='" + stopName + '\'' +
                ", dateTime='" + dateTime + '\'' +
                ", origin='" + origin + '\'' +
                ", track='" + track + '\'' +
                ", detailsId='" + detailsId + '\'' +
                '}';
    }
}
