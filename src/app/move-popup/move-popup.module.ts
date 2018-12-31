import { module } from 'angular';
import { ItemStatsComponent } from './item-stats.component';
import { ItemTagComponent } from './item-tag.component';
import { ObjectivesComponent } from './objectives.component';
import { FlavorObjectiveComponent } from './flavor-objective.component';
import { MoveItemPropertiesComponent } from './dimMoveItemProperties.directive';
import { MovePopupComponent } from './dimMovePopup.directive';
import { MoveLocationsComponent } from './move-locations.component';
import { ItemPopup } from './item-popup.directive';
import { PressTip } from './press-tip.directive';
import { ammoTypeClass } from './ammo-type';
import { PercentWidth } from '../inventory/dimPercentWidth.directive';
import { react2angular } from 'react2angular';
import ItemMoveAmount from '../item-popup/ItemMoveAmount';
import ItemTalentGrid from '../item-popup/ItemTalentGrid';

export default module('movePopupModule', [])
  .component('dimItemStats', ItemStatsComponent)
  .component('dimItemTag', ItemTagComponent)
  .component(
    'dimMoveAmount',
    react2angular(ItemMoveAmount, ['amount', 'maximum', 'maxStackSize', 'onAmountChanged'])
  )
  .component('dimObjectives', ObjectivesComponent)
  .component('dimFlavorObjective', FlavorObjectiveComponent)
  .component('dimMoveItemProperties', MoveItemPropertiesComponent)
  .component('dimMoveLocations', MoveLocationsComponent)
  .component('dimMovePopup', MovePopupComponent)
  .component('dimTalentGrid', react2angular(ItemTalentGrid, ['talentGrid', 'perksOnly']))
  .filter('ammoTypeClass', () => ammoTypeClass)
  .directive('itemPopup', ItemPopup)
  .directive('dimPercentWidth', PercentWidth)
  .directive('pressTip', PressTip).name;
