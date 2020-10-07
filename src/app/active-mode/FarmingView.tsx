import CollapsibleTitle from 'app/dim-ui/CollapsibleTitle';
import { startFarming, stopFarming } from 'app/farming/actions';
import InventoryItem from 'app/inventory/InventoryItem';
import { DimItem } from 'app/inventory/item-types';
import ItemPopupTrigger from 'app/inventory/ItemPopupTrigger';
import { allItemsSelector } from 'app/inventory/selectors';
import { DimStore } from 'app/inventory/store-types';
import { RootState, ThunkDispatchProp } from 'app/store/types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

interface ProvidedProps {
  store: DimStore;
}

interface StoreProps {
  newItems: DimItem[];
}

const newItemsToShow = 8;

function mapStateToProps(state: RootState): StoreProps {
  const allItems = allItemsSelector(state);
  const items = Array.from(state.inventory.newItems);
  items.length = newItemsToShow;

  const newItems: DimItem[] = [];
  items.forEach((id) => {
    const newItem = allItems.find((item) => item.id === id);
    newItem && newItems.push(newItem);
  });
  newItems.length = newItemsToShow;

  return {
    newItems,
  };
}

type Props = ProvidedProps & StoreProps & ThunkDispatchProp;

function FarmingView({ store, newItems, dispatch }: Props) {
  const [isFarming, setIsFarming] = useState(false);

  useEffect(() => {
    dispatch((isFarming ? startFarming : stopFarming)(store.id));
  }, [dispatch, store, isFarming]);

  return (
    <CollapsibleTitle
      className="farming-view"
      title={'Recent Items'}
      sectionId={'active-farming'}
      defaultCollapsed={true}
    >
      <div className="dim-button bucket-button" onClick={() => setIsFarming(!isFarming)}>
        {!isFarming ? 'Start Farming' : 'Stop Farming'}
      </div>
      <div className={'new-items'}>
        {newItems.map((item) => (
          <ItemPopupTrigger key={item.id} item={item} keepNew={true}>
            {(ref, onClick) => <InventoryItem item={item} innerRef={ref} onClick={onClick} />}
          </ItemPopupTrigger>
        ))}
      </div>
    </CollapsibleTitle>
  );
}

export default connect<StoreProps>(mapStateToProps)(FarmingView);
