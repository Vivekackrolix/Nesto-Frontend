import React from 'react';
import { render, screen } from '@testing-library/react';
import BrokerView from './BrokerView';

// Mocking custom hooks
jest.mock('../../../../hooks/LoginQuery', () => ({
  useGetAllPropertyQuery: jest.fn(() => ({
    getAllPropertyIsLoading: false,
    getAllPropertyIsError: false,
    getAllPropertyResponse: [
      {
        id: 1,
        title: 'Property A',
      },
      {
        id: 2,
        title: 'Property B',
      },
    ],
    getAllPropertyError: null,
    getAllpropertyIsSuccess: true,
  })),
  useGetAllBanner: jest.fn(() => ({
    getAllBannerIsLoading: false,
    getAllBannerIsError: false,
    getAllBannerResponse: [
      {
        id: 1,
        title: 'Banner A',
      },
      {
        id: 2,
        title: 'Banner B',
      },
    ],
    getAllBannerError: null,
    getAllBannerIsSuccess: true,
  })),
}));

describe('BrokerView', () => {
  it('renders banner slider with banners', () => {
    render(<BrokerView />);
    expect(screen.getByText('Banner A')).toBeInTheDocument();
    expect(screen.getByText('Banner B')).toBeInTheDocument();
  });

  it('renders small card section', () => {
    render(<BrokerView />);
    expect(screen.getByText('SmallCardSection')).toBeInTheDocument();
  });

  it('renders search filter section', () => {
    render(<BrokerView />);
    expect(screen.getByText('SearchFilter')).toBeInTheDocument();
  });

  it('renders product containers with property data', () => {
    render(<BrokerView />);
    expect(screen.getByText('Promoted Property')).toBeInTheDocument();
    expect(screen.getByText('Property A')).toBeInTheDocument();
    expect(screen.getByText('Property B')).toBeInTheDocument();
  });

  it('renders hero section', () => {
    render(<BrokerView />);
    expect(screen.getByText('HeroSection')).toBeInTheDocument();
  });
});
