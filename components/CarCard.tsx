"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { CarProps } from '@/types';
import CustomButton from './CustomButton';

//Instead of listing every prop, we can do
interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car } : CarCardProps) => {
  return (
    <div>
      CarCard
    </div>
  )
}

export default CarCard
