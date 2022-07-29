export default function mapPopup(name, location, openTime, imgUrl, cb) {
  return `<div style="display: flex; flex-direction: column; justify-content: flex-start; align-items: center; width: 200px; height: 180px">
  <div style="background: url(${ imgUrl }) 0 0/cover no-repeat; width: 100%; height: 50%; border-radius: 5px; box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.7);"/>
  <div style="display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; width: 100%; height: 50%; margin-top: 75px; padding-top: 25px">
    <p style="font-family: 'Prompt', sans-serif; font-weight: 500; font-size: 16px;">${ name }</p>
    <p style="font-family: 'Merriweather Sans', sans-serif; font-weight: 300;">${ location }</p>
    <p style="font-family: 'Merriweather Sans', sans-serif; font-weight: 300;">${ openTime }</p>
  </div>
 </div>`;
}