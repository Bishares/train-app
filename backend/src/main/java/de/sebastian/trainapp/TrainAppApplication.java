package de.sebastian.trainapp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@SpringBootApplication
public class TrainAppApplication {

    private static final Logger log = LoggerFactory.getLogger(TrainAppApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(TrainAppApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/location").allowedOrigins("http://localhost:8080", "http://localhost:4200");
                registry.addMapping("/arrival").allowedOrigins("http://localhost:8080", "http://localhost:4200");
                registry.addMapping("/departure").allowedOrigins("http://localhost:8080", "http://localhost:4200");
            }
        };
    }

    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder) {
        return builder.build();
    }

    /*@Bean
    public CommandLineRunner run(RestTemplate restTemplate) throws Exception {
        return args -> {
            Location[] locations = restTemplate.getForObject(
                    "https://api.deutschebahn.com/freeplan/v1/location/berlin", Location[].class);
            log.info(locations.toString());
            for (int i = 0; i < locations.length; i++) {
                System.out.println(locations[i].toString());
            }
        };
    }*/
}
