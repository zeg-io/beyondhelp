import $ from "jquery";
import C from "../../Constants";
import MessageService from "../MessageService";
import PageScriptService from "../PageScriptService";

const errorMessage = `
    <div class="ddb-blocked-content">
        <div class="ddb-blocked-content-body">
            <div class="ddb-blocked-content-body-text">
                <div class="ddb-blocked-content-body-text-main">
                    <span style="width: 400px; white-space: normal;">
                        <b>Beyond Help:</b>&nbsp;Error loading tooltip. This content is probably a private homebrew creation. If not try again reloading the page.
                    </span>
                </div>
            </div>
        </div>
    </div>
`;

class TooltipsService {
    static homebrewSpellTooltipWorkaround() {
        $(".tooltip-hover[href^='https://www.dndbeyond.com/spells/']").addClass("spell-tooltip");
    }

    static listenTooltipError() {
        MessageService.listen(C.TooltipErrorMessage, (message) => {
            var tooltip = JSON.stringify({
                Id: 0,
                SimpleOrAdvanced: "simple",
                Type: "blocked",
                Tooltip: errorMessage,
                Url: decodeURI(message.url)
            });
            PageScriptService.run(`Waterdeep.CurseTip.handleTooltipData(${tooltip})`);
        });
    }
}

export default TooltipsService;