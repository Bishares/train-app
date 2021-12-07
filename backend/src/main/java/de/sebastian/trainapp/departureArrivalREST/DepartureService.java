package de.sebastian.trainapp.departureArrivalREST;

import de.sebastian.trainapp.data.DepartureBoard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class DepartureService {

    @Autowired
    private RestTemplate restTemplate;

    private final String departureUrl = "https://api.deutschebahn.com/freeplan/v1/departureBoard/";

    public DepartureBoard[] retrieveDeparturesFor(String id, String dateTime) {
        String completeUrl = departureUrl + id + "?date={date}";
        DepartureBoard[] departures = restTemplate.getForObject(
                completeUrl, DepartureBoard[].class, dateTime);
        return departures;
    }
}
