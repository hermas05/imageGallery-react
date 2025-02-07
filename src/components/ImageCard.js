import React from 'react';

function ImageCard(props) {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img src={props.image.download_url}
      className='w-full '/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {props.image.author}
        </div>
        <ul>
          <li>
            <strong>
              Views: </strong>
            4000
          </li>
        </ul>
        <ul>
          <li>
            <strong>
              Downloads: </strong>
            300
          </li>
        </ul>
        <ul>
          <li>
            <strong>
              Likes: </strong>
            400
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className='inline-block bg-gray-200 rounded-full
        px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
        #tag1
        </span>
        <span className='inline-block bg-gray-200 rounded-full
        px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
        #tag2
        </span>
        <span className='inline-block bg-gray-200 rounded-full
        px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
        #tag3
        </span>
      </div>
    </div>
  )
}

export default ImageCard