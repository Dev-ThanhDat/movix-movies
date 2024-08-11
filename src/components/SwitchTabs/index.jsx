import PropTypes from 'prop-types';
import { useState } from 'react';

function SwitchTabs({ data, onTabChange }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const activeTab = (tab, index) => {
    setSelectedTab(index);
    onTabChange(tab);
  };

  return (
    <div className='h-[34px] bg-white rounded-[20px] p-[2px]'>
      <div className='flex items-center h-[30px]'>
        {data.map((tab, index) => (
          <span
            key={index}
            onClick={() => activeTab(tab, index)}
            className={`h-full w-[100px] text-primary text-sm rounded-[15px] transition-all cursor-pointer flex items-center justify-center ${
              selectedTab === index ? 'text-white gradient' : ''
            }`}
          >
            {tab}
          </span>
        ))}
      </div>
    </div>
  );
}

SwitchTabs.propTypes = {
  data: PropTypes.array,
  onTabChange: PropTypes.func
};

export default SwitchTabs;
