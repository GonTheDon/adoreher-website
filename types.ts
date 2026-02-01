import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface PricePlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  color: string;
}

export interface ExampleProject {
  id: string;
  title: string;
  category: 'Couple' | 'Birthday' | 'Family' | 'Distance';
  description: string;
  image: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}