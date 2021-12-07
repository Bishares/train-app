package de.sebastian.trainapp.departureArrivalREST;

import de.sebastian.trainapp.data.ArrivalBoard;
import de.sebastian.trainapp.data.DepartureBoard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DepartureArrivalController {

    @Autowired
    DepartureService departureService;

    @Autowired
    ArrivalService arrivalService;


    @GetMapping("/arrival")
    public ArrivalBoard[] getArrivalsFor(@RequestParam String id, @RequestParam String dateTime) {
        return arrivalService.retrieveArrivalsFor(id, dateTime);
    }

    @GetMapping("/departure")
    public DepartureBoard[] getDeparturesFor(@RequestParam String id, @RequestParam String dateTime) {
        return departureService.retrieveDeparturesFor(id, dateTime);
    }
}