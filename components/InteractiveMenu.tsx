'use client';

import { useState } from 'react';
import { MENU_DATA } from '@/constants/menu';
import Image from 'next/image';

type MenuItem = {
  name: string;
  price: string;
  description: string;
  tags: string[];
  notes?: string;
};

type MenuCategorySection = {
  type: "category_section";
  title: string;
  subtitle?: string;
  items?: MenuItem[];
  sections?: MenuSubSection[];
};

type MenuSubSection = {
  type: "subsection";
  title: string;
  items: MenuItem[];
};

type MenuData = {
  pizzas: MenuItem[];
  salads: MenuItem[];
  forthetable: MenuItem[];
  beers: MenuCategorySection[];
  cocktails: MenuItem[];
  wine: MenuCategorySection[];
  nonalcohol: MenuCategorySection[];
  kids: MenuCategorySection[];
};

type MenuTab = keyof MenuData;

const menuOrder: MenuTab[] = ['pizzas', 'salads', 'forthetable', 'beers', 'cocktails', 'wine', 'nonalcohol', 'kids'];

export default function InteractiveMenu() {
  const [activeTab, setActiveTab] = useState<MenuTab>(menuOrder[0]);

  const handleTabClick = (tab: MenuTab) => {
    setActiveTab(tab);
  };

  const renderMenuItem = (item: MenuItem, idx: number) => (
    <div
      key={idx}
      className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8 hover:border-accent-primary/30 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-bold text-xl text-white">
          {item.name}
        </h4>
        <span className="text-accent-secondary font-mono text-xl ml-4 shrink-0">
          ${item.price}
        </span>
      </div>
      <p className="text-text-secondary text-base mb-4 leading-relaxed">
        {item.description}
      </p>
      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, tagIdx) => (
            <span
              key={tagIdx}
              className="bg-accent-primary/20 text-accent-secondary px-3 py-1 text-xs tracking-wider font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {item.notes && (
        <p className="text-text-muted text-sm italic mt-3">{item.notes}</p>
      )}
    </div>
  );

  const renderCategoryContent = (categoryKey: MenuTab) => {
    const data = (MENU_DATA as MenuData)[categoryKey];

    if (!data) return null;

    // Handle simple list categories (pizzas, salads, forthetable, cocktails)
    if (Array.isArray(data) && data.every(item => !(item as MenuCategorySection).type)) {
      return (
        <div className="animate-fade-in mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item, idx) => renderMenuItem(item as MenuItem, idx))}
          </div>
          {/* Allergy Information for specific categories */}
          {(categoryKey === 'pizzas' || categoryKey === 'salads' || categoryKey === 'forthetable') && (
            <div className="mt-8 p-6 bg-accent-primary/10 backdrop-blur-sm border border-accent-primary/30 rounded-[3rem]">
              <p className="text-accent-secondary text-sm font-semibold text-center mb-2">
                ⚠️ ALLERGY INFORMATION
              </p>
              <p className="text-text-secondary text-sm text-center">
                Please inform your server of any allergies or dietary restrictions.
                {categoryKey === 'pizzas' && ' All pizzas can be made gluten-free or vegan upon request.'}
              </p>
            </div>
          )}
        </div>
      );
    }

    // Handle structured categories (beers, wine, nonalcohol, kids)
    return (
      <div className="animate-fade-in mb-12">
        {(data as MenuCategorySection[]).map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-16">
            <h3 className="text-3xl md:text-4xl text-white mb-4 text-center font-bold tracking-wide">
              {section.title}
            </h3>
            {section.subtitle && (
              <p className="text-text-muted text-center text-base mb-8 italic">{section.subtitle}</p>
            )}

            {section.items && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item, itemIdx) => renderMenuItem(item, itemIdx))}
              </div>
            )}

            {section.sections && section.sections.map((subSection, subSectionIdx) => (
              <div key={subSectionIdx} className="mb-10">
                <h4 className="font-bold text-xl text-accent-primary mb-6 text-center">{subSection.title}</h4>
                <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-6">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    {subSection.items.map((item, itemIdx) => (
                      <p key={itemIdx} className="text-text-secondary">
                        {item.name} <span className="text-accent-secondary font-semibold">${item.price}</span>{' '}
                        <span className="text-text-muted text-xs block">{item.description}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        {/* Allergy information for applicable structured categories */}
        {(categoryKey === 'beers' || categoryKey === 'wine' || categoryKey === 'nonalcohol') && (
            <div className="mt-8 p-6 bg-accent-primary/10 backdrop-blur-sm border border-accent-primary/30 rounded-[3rem]">
              <p className="text-accent-secondary text-sm font-semibold text-center mb-2">
                ⚠️ ALLERGY INFORMATION
              </p>
              <p className="text-text-secondary text-sm text-center">
                Please inform your server of any allergies or dietary restrictions.
              </p>
            </div>
          )}
      </div>
    );
  };


  return (
    <section id="menu-section" className="py-16 md:py-24 bg-bg-secondary relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`text-center mb-12`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight font-bold">
            OUR MENU
          </h2>
          <div className="w-24 h-1 bg-accent-primary mx-auto"></div>
        </div>

        {/* Tab Navigation */}
        <div className={`sticky top-0 z-40 bg-bg-secondary py-4 flex flex-wrap justify-center gap-2 md:gap-3 mb-16 max-w-5xl mx-auto`}>
          {menuOrder.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-4 md:px-6 py-3 font-bold text-xs md:text-sm tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-accent-primary text-black'
                  : 'bg-transparent border-2 border-border-tabs text-white/70 hover:text-white hover:border-white/30'
              }`}
            >
              {tab.toUpperCase().replace(/_/g, ' ')}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="max-w-7xl mx-auto">
          <div id={activeTab} className="animate-fade-in">
            {/* Render title for simple list categories */}
            {Array.isArray((MENU_DATA as MenuData)[activeTab]) &&
             (MENU_DATA as MenuData)[activeTab].every(item => !(item as MenuCategorySection).type) && (
              <h3 className="text-3xl md:text-4xl text-white mb-8 text-center font-bold tracking-wide capitalize">
                {activeTab === 'kids' ? 'KIDS & DESSERT' : activeTab === 'forthetable' ? 'FOR THE TABLE' : activeTab}
              </h3>
            )}
            {renderCategoryContent(activeTab)}
          </div>
        </div>
      </div>
    </section>
  );
}