export const handleClick = (link: string) => {
    window.open(link);
};

export const randomRangeInt = (max: number) =>{
  return Math.floor(Math.random() * max);
}

export const getElementHeightById = (id: string) =>{
  return document.getElementById(id)?.clientHeight ?? 0;
}

export const pictureToLoad = ["/img/vc/vc-max.jpg", "/img/esports/esports-max.jpg", "/img/trybe/trybe-max.jpg", "/img/neide/neide-max-1.jpg"]