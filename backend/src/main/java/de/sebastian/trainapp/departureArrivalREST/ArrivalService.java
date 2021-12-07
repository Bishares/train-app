package de.sebastian.trainapp.departureArrivalREST;

import de.sebastian.trainapp.data.ArrivalBoard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ArrivalService {

    @Autowired
    private RestTemplate restTemplate;

    private final String arrivalUrl = "https://api.deutschebahn.com/freeplan/v1/arrivalBoard/";

    public ArrivalBoard[] retrieveArrivalsFor(String id, String dateTime) {
        String completeUrl = arrivalUrl + id + "?date={date}";
        ArrivalBoard[] arrivals = restTemplate.getForObject(
                completeUrl, ArrivalBoard[].class, dateTime);
        return arrivals;
    }
}
