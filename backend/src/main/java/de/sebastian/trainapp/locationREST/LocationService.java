package de.sebastian.trainapp.locationREST;

import de.sebastian.trainapp.data.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class LocationService {

    @Autowired
    private RestTemplate restTemplate;

    private final String locationUrl = "https://api.deutschebahn.com/freeplan/v1/location/";

    public Location[] retrieveLocationsFor(String name) {
        String completeUrl = locationUrl + name;
        Location[] locations = restTemplate.getForObject(
                completeUrl, Location[].class);
        return locations;
    }
}
