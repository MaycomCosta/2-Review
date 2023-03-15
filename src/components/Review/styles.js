import styled from 'styled-components'


export const Article = styled.article`
  background: #fff;
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s linear;
  text-align: center;

  :hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`
export const ImgContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 1.5rem;

  ::before {
  content: '';
  width: 100%;
  height: 100%;
  background: hsl(205, 78%, 60%);
  position: absolute;
  top: -0.25rem;
  right: -0.5rem;
  border-radius: 50%;
  }

  img {
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
  }

   span {
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
    height: 2.5rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    transform: translateY(25%);
    background: hsl(205, 78%, 60%);
    color: #fff;
  }
`
export const AuthorName = styled.h4`
  margin-bottom: 0.25rem;
`
export const Job = styled.p`
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  color: hsl(205, 78%, 60%);
  font-size: 0.85rem;
`
export const Info = styled.p`
  margin-bottom: 0.75rem;
`
export const ButtonContainer = styled.p`
    .PrevButton, .NextButton {
        color: hsl(205, 90%, 76%);
        font-size: 1.25rem;
        background: transparent;
        border-color: transparent;
        margin: 0 0.5rem;
        transition: all 0.3s linear;
        cursor: pointer;

        :hover {
            color: hsl(205, 78%, 60%);
        }
    }
`
export const SurpriseMeBtn = styled.button`
  margin-top: 0.5rem;
  background: hsl(205, 100%, 96%);
  color: hsl(205, 78%, 60%);
  padding: 0.25rem 0.5rem;
  text-transform: capitalize;
  border-radius: 0.25rem;
  transition: all 0.3s linear;
  border-color: transparent;
  cursor: pointer;

  :hover {
    background: hsl(205, 78%, 60%);
    color: #fff;
  }
`
// export const Container = styled.div`
  
// `
