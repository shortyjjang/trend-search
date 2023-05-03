import  { useEffect, useState } from 'react';
import cloud from 'd3-cloud';
import { WordCloudProps, COLORS, TagsProps } from './types';

export default function WordCloud({
  data,
  width = 700,
  height = 600,
}: WordCloudProps) {
  const [tags, setTags] = useState<TagsProps[] | null>(null)

  
  useEffect(() => {
    let draw = false
    if(!draw) {
      draw = true
      cloud()
      .size([width, height])
      .words(data.map(function(d) {
        return {...d, size: 10 + Math.random() * 90};
      }))
      .padding(5)
      .font("Impact")
      .fontSize((d) => { return d.size? d.size : 1; })
      .on("end", (tags:TagsProps[]) => {setTags(tags)})
      .start();
    }
    return () => {
      draw = false
      setTags(null)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return <>
      {tags && <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <g transform={`translate(${width/2}, ${height/2})`}>
          {tags.map(tag => <text key={tag.text} 
            style={{fontSize: `${tag.size ? tag.size : 10}px`}}
            textAnchor='middle'
            fontFamily='Impact'
            fill={COLORS[Math.floor(Math.random() * 10)]}
            transform={`translate(${tag.x}, ${tag.y}) rotate(${tag.rotate})`}
          >{tag.text}</text>)}
        </g>
      </svg>}
  </>
}

