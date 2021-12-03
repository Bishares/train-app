package de.sebastian.trainapp.LocationREST;

import de.sebastian.trainapp.data.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LocationController {

    @Autowired LocationService locationService;

    @GetMapping("/location")
    public Location[] getLocationsForName(@RequestParam String name) {
        return locationService.retrieveLocationsFor(name);
    }
}