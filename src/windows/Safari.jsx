import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import { blogPosts } from "#constants";
import {
  ChevronLeft,
  ChevronRight,
  MoveRight,
  Copy,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from 'lucide-react'
import React from 'react'

const Safari = ({ mobile }) => {
  return (
    <div className='flex flex-col h-full w-full'>
      <div id="window-header" className='shrink-0'>
        {!mobile && <WindowControls target="safari" />}
        {!mobile && <PanelLeft className='ml-10 icon' />}
        <div className={`flex item-center gap-1 ${mobile ? 'ml-0' : 'ml-5'}`}>
          <ChevronLeft className='icon' />
          <ChevronRight className='icon' />
        </div>
        <div className='flex-1 flex-center gap3'>
          {!mobile && <ShieldHalf className='icon' />}
          <div className='search'>
            <Search className='icon' />
            <input type='text' placeholder='Search or enter website name'
              className='flex-1 min-w-0' />
          </div>
        </div>
        <div className="flex item-center gap-5">
          <Share className='icon' />
          {!mobile && <Plus className='icon' />}
          {!mobile && <Copy className='icon' />}
        </div>
      </div>
      <div className='blog flex-1 w-full overflow-y-auto'>
        <h2>My Profile</h2>
        <div className='space-y-8'>
          {blogPosts.map(({ id, image, title, date, link }) => (
            <div key={id} className="blog-post">
              <div className="col-span-2">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <p>{date}</p>
                <h3>{title}</h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Check out the link <MoveRight className="icon-hover" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const SafariWindow = WindowWrapper(Safari, 'safari');

export default SafariWindow
