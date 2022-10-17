export const handleClick = (link: string) => {
    window.open(link);
  };

export const randomRangeInt = (max: number) =>{
  return Math.floor(Math.random() * max);
}

export const getElementHeightById = (id: string) =>{
  return document.getElementById(id)?.clientHeight ?? 0;
}