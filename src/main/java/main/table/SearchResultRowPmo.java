package main.table;

import org.linkki.core.ui.element.annotation.UILabel;
import org.linkki.core.ui.element.annotation.UILink;
import org.linkki.samples.appsample.model.BusinessPartner;

public class SearchResultRowPmo {

    private BusinessPartner partner;
    public SearchResultRowPmo(BusinessPartner partner) {
        this.partner = partner;
    }

    @UILabel(position = 10, label = "Name")
    public String getName() {
        return partner.getName();
    }

    @UILabel(position = 20, label = "First Address")
    public String getFirstAddress() {
        return partner.getFirstAddress();
    }

    @UILink(position = 30, caption = "Show Details")
    public String getDetails() {
        return "PartnerDetails/" + partner.getUuid().toString();
    }
}
