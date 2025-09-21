import React from 'react';
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>

      <Card />

<div className='flex items-center gap-4'>
        <Button title="Small Button" size="sm" shape="sm" />
        <Button title="Medium Button" size="md" shape="md" />
        <Button title="Large Button" size="lg" shape="full" />
      </div>
    </div>
  )
}

export default Landing;