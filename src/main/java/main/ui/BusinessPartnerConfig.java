package main.ui;

import main.view.BusinessPartnerView;
import org.linkki.framework.ui.application.ApplicationConfig;
import org.linkki.framework.ui.application.menu.ApplicationMenuItemDefinition;
import org.linkki.util.Sequence;

public class BusinessPartnerConfig implements ApplicationConfig {

    @Override
    public BusinessPartnerInfo getApplicationInfo() {
        return new BusinessPartnerInfo();
    }

    @Override
    public Sequence<ApplicationMenuItemDefinition> getMenuItemDefinitions() {
        return Sequence.of(new ApplicationMenuItemDefinition("Search", "app-menu", BusinessPartnerView.class));
    }

}