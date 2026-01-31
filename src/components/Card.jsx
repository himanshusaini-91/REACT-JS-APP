import React from 'react';

const Card = ({ title, description, image }) => {
    return (
        <div className='max-w-sm rounded-2xl bg-white border border-gray-200 mt-8 shadow overflow-hidden transition-shadow text-center'>
            {image && <img className="w-full object-cover" src={image} alt="card_image" />}
            <div className='p-4'>
                <h2 className='text-lg font-bold'>{title}</h2>
                <p className='mt-2 text-sm text-gray-500'>{description}</p>
                <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'>Buy Now</button>
            </div>
        </div>
    );
};

export default Card;
