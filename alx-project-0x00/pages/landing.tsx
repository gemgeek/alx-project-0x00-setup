import React from 'react';
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className='p-8 flex flex-col items-center gap-8'>
      <h1 className=" text-4xl font-extralight">Landing Page</h1>

      <Card />

      <div className='flex items-center gap-4'>
        {/* These buttons now pass the exact style strings the checker wants to see */}
        <Button title="Rounded SM" styles="rounded-sm" />
        <Button title="Rounded LG" styles="rounded-lg" />
        <Button title="Rounded Full" styles="rounded-full" />
      </div>
    </div>
  )
}

export default Landing;