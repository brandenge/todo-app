import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [sortKeyword, setSortKeyword] = useState('');
  const [itemsPerPage, setItemsPerPAge] = useState(3);
  const [showCompleted, setShowCompleted] = useState(false);

  const settings = {
    sortKeyword,
    itemsPerPage,
    showCompleted,
  };

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
