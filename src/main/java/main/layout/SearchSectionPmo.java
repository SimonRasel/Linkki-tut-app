package main.layout;

import org.linkki.core.ui.element.annotation.UIButton;
import org.linkki.core.ui.element.annotation.UITextField;
import org.linkki.core.ui.layout.annotation.UISection;

import java.util.function.Consumer;

@UISection
public class SearchSectionPmo {

    private String searchText = "";
    private Consumer<String> searchConsumer;
    public SearchSectionPmo(Consumer<String> searchConsumer) {
        this.searchConsumer = searchConsumer;
    }

    @UIButton(position = 20, caption = "Start Search")
    public void search(){
        searchConsumer.accept(getSearchText());
    }

    @UITextField(position = 10, label = "")
    public String getSearchText() {
        return searchText;
    }

    public void setSearchText(String searchText) {
        this.searchText = searchText;
    }
}
