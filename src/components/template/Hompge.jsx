import FAQ_Section from '@/elements/Homepage/FAQ_Section';
import Feature from '@/elements/Homepage/Feature';
import Hero from '@/elements/Homepage/Hero';
import PricingList from '@/elements/Homepage/PricingList';
import Testimonials from '@/elements/Homepage/Testimonials';
import React from 'react';

const Hompge = () => {
    return (
        <>
            <Hero />
            <Feature />
            <Testimonials />
            <FAQ_Section />
            <PricingList />
        </>
    );
};

export default Hompge;