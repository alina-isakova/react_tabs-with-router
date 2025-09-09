import cn from 'classnames';
import React, { useContext } from 'react';
import { TabsContext } from '../store/TabsContext';
import { Link, useParams } from 'react-router-dom';

type Props = {};

export const TabsList: React.FC<Props> = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId || '';
  const { tabs } = useContext(TabsContext);
  const currentTab = tabs.find(tab => tab.id === selectedTabId) || null;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({
                'is-active': currentTab && tab?.id === currentTab?.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {currentTab ? (
        <div className="block" data-cy="TabContent">
          {currentTab && currentTab.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </div>
  );
};
