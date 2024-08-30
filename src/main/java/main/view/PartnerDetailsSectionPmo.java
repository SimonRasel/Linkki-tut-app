package main.view;

import org.linkki.core.ui.element.annotation.UIComboBox;
import org.linkki.core.ui.element.annotation.UIDateField;
import org.linkki.core.ui.element.annotation.UITextArea;
import org.linkki.core.ui.element.annotation.UITextField;
import org.linkki.core.ui.layout.annotation.UISection;
import org.linkki.samples.appsample.model.BusinessPartner;

import java.time.LocalDate;
import java.util.Stack;

@UISection(caption = "Partner Details")
public class PartnerDetailsSectionPmo {

private BusinessPartner partner;

    public PartnerDetailsSectionPmo(BusinessPartner partner) {
        this.partner = partner;
    }

    @UITextField(position = 10, label = "Name")
    public String getName() {
        return partner.getName();
    }

    public void setName(String name) {
        this.partner.setName(name);
    }

    @UIDateField(position = 20, label = "Date of Birth")
    public LocalDate getDateOfBirth() {
        return partner.getDateOfBirth();
    }

    public void setDateOfBirth(LocalDate date) {
        this.partner.setDateOfBirth(date);
    }

    @UIComboBox(position = 30, label = "Status")
    public BusinessPartner.Status getStatus() {
        return partner.getStatus();
    }

    public void setStatus(BusinessPartner.Status status) {
        this.partner.setStatus(status);
    }

    @UITextArea(position = 40, label = "Note")
    public String getNote() {
        return partner.getNote();
    }

    public void setNote(String note) {
        this.partner.setNote(note);
    }
}
