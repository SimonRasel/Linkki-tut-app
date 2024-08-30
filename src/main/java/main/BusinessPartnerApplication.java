package main;

import com.vaadin.flow.component.page.AppShellConfigurator;
import com.vaadin.flow.theme.Theme;
import org.linkki.samples.appsample.model.BusinessPartner;
import org.linkki.samples.appsample.model.BusinessPartnerRepository;
import org.linkki.samples.appsample.model.InMemoryBusinessPartnerRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@Theme("linkki")
@SpringBootApplication
@SuppressWarnings("HideUtilityClassConstructor")
public class BusinessPartnerApplication implements AppShellConfigurator {
    private static final long serialVersionUID = 1L;

    public static void main(String[] args) {
        SpringApplication.run(BusinessPartnerApplication.class, args);
    }

    @Bean
    public BusinessPartnerRepository createBusinessPartnerRepository() {
        return InMemoryBusinessPartnerRepository.newSampleRepository();
    }

}
