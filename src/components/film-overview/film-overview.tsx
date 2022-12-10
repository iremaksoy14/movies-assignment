import React ,{useRef}from 'react';
import { useAppSelector } from '../../hooks';
import { translateRating } from '../../utils/translate-rating';
import { getFilm } from '../../store/data-process/selectors';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import emailjs from '@emailjs/browser';

function FilmOverview(): JSX.Element {
  const activeFilm = useAppSelector(getFilm);
  const {rating, scoresCount, description, director, starring} = activeFilm;
  const actors = `${starring.join(', ')} and other`;
  const form = useRef();
  const sendEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    emailjs.sendForm('service_4pj6pl8', 'template_vofl5hd',form.current, 'eWhEmKpm0drPD187f')
      .then((result) => {
        alert("Mailiniz başarılı bir şekilde gönderildi")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
        alert("Mail gönderirken bir hata meydana geldi")

      });
  };

 

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{translateRating(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text" style={{color:"#eee5b5"}}>
        <p>{description}</p>
        <p className="film-card__director"><strong style={{color:"#eee5b5"}} >Director: {director}</strong></p>
        <p className="film-card__starring"><strong style={{color:"#eee5b5"}}>Starring: {actors}</strong></p>
      </div>

      <div  >
      <form ref={form} onSubmit={sendEmail} style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <div className="form-group" >
        <label>Name</label>
      <input type="text" name="user_name" />
      
        </div>


        <div className="form-group" >
           <label>Email</label>
          <input type="email" name="user_email" />
        </div>
     
     <div className="form-group" >
       <label>Message</label>
       <input type="text" name="message" />
     
     </div>
     <div  style={{marginTop:20}}  >
     <input type="submit" className="btn btn-primary" value="Send" />
     </div>
     
     
    </form>
      </div>
    
  
    </>
  );
}

export default FilmOverview;
