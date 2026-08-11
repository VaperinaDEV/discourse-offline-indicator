import dIcon from "discourse/helpers/d-icon";
import { i18n } from "discourse-i18n";

export default <template>
  <div class="above-footer-outlet offline-indicator">
    <div class="offline-content">
      <span>
        {{dIcon settings.offline_indicator_icon}}
        {{i18n (themePrefix "offline.title")}}
      </span>
      <span>{{i18n (themePrefix "offline.description")}}</span>
    </div>
  </div>
</template>;
