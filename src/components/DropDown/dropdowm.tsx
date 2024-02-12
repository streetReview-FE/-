// src/components/DropdownMenu.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMenu } from '../../store/menuSelector/reducer';
import { RootState } from '../../store/rootReducer';

export const DropdownMenu: React.FC = () => {
  const dispatch = useDispatch();
  const { menus, selectedMenuId } = useSelector((state: RootState) => state.menu);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const menuId = parseInt(event.target.value, 10);
    dispatch(selectMenu(menuId));
  };

  return (
    <div>
      <select onChange={handleSelect} value={selectedMenuId}>
        {menus.map((menu:any) => (
          <option key={menu.id} value={menu.id}>
            {menu.label}
          </option>
        ))}
      </select>
    </div>
  );
};