package de.sebastian.trainapp;

import de.sebastian.trainapp.data.Location;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;


@SpringBootApplication
public class TrainAppApplication {

    private static final Logger log = LoggerFactory.getLogger(TrainAppApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(TrainAppApplication.class, args);
    }

    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder) {
        return builder.build();
    }

    @Bean
    public CommandLineRunner run(RestTemplate restTemplate) throws Exception {
        return args -> {
            Location[] locations = restTemplate.getForObject(
                    "https://api.deutschebahn.com/freeplan/v1/location/berlin", Location[].class);
            log.info(locations.toString());
            for (int i = 0; i < locations.length; i++) {
                System.out.println(locations[i].toString());
            }
        };
    }
}
